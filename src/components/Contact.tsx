import React, {FormEvent} from "react";
import "../styles/contact.css"

import Typography from "@mui/material/Typography";

import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from "@mui/material/Button";
import {Form} from "react-bootstrap";

export const Contact = () => {

    const owner = "workwithsoham";
    const repo = "your-repo-name";
    const branch = "your-branch-name";
    const pathToFile = "path/to/your/file.txt";
    const token = "your-personal-access-token";

    const onSend = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            full_name: event.currentTarget.full_name.value,
            email: event.currentTarget.email.value,
            subject: event.currentTarget.subject.value,
            message: event.currentTarget.message.value
        }

        fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${pathToFile}`, {
            headers: {
                Authorization: `token ${token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // Decode and modify the file content
                const content = atob(data.content); // Decode base64 content
                const updatedContent = content + "\nUser Input: " + data;

                // Create a new commit
                fetch(`https://api.github.com/repos/${owner}/${repo}/git/commits`, {
                    method: "POST",
                    headers: {
                        Authorization: `token ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        message: "Update file with user input",
                        content: btoa(updatedContent), // Encode back to base64
                        sha: data.sha, // Use the SHA from the original content
                        branch: branch,
                    }),
                })
                    .then((response) => response.json())
                    .then((commitData) => {
                        // Update the branch reference
                        fetch(`https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branch}`, {
                            method: "PATCH",
                            headers: {
                                Authorization: `token ${token}`,
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                sha: commitData.sha,
                            }),
                        })
                            .then((response) => response.json())
                            .then((updatedRefData) => {
                                console.log("File updated successfully.");
                            })
                            .catch((error) => {
                                console.error("Error updating branch reference:", error);
                            });
                    })
                    .catch((error) => {
                        console.error("Error creating commit:", error);
                    });
            })
            .catch((error) => {
                console.error("Error fetching file content:", error);
            });

        console.log(data)

        event.currentTarget.reset();

    }

    return (
        <div className="mx-auto contactForm">
            <Typography variant="h5" align="center" sx={{fontWeight: "bold"}}>
                Contact Me
            </Typography>

            <h6 className="m-4">
                Feel free to reach out and share your thoughts, questions, or ideas. I'm here to listen and happy to
                discuss anything you have in mind. Your feedback and inquiries are always welcome!
            </h6>

            <div className="mx-lg-5">
                <Form className="m-3 mb-2 mt-2" onSubmit={onSend}>
                    <Form.Group controlId="full_name">
                        <TextField
                            className="m-2"
                            id="full_name"
                            required
                            fullWidth
                            label="Full Name"
                            variant="filled"
                            size="small"
                        />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <TextField
                            className="m-2"
                            id="email"
                            required
                            fullWidth
                            label="Email"
                            variant="filled"
                            size="small"
                        />
                    </Form.Group>

                    <Form.Group controlId="subject">
                        <TextField
                            className="m-2"
                            id="subject"
                            required
                            fullWidth
                            label="Subject"
                            variant="filled"
                            size="small"
                        />
                    </Form.Group>

                    <Form.Group controlId="message">
                        <TextField
                            className="m-2"
                            id="message"
                            multiline
                            rows={3}
                            fullWidth
                            label="Message"
                            variant="filled"
                            size="small"
                        />
                    </Form.Group>

                    <Button variant="outlined" className="mt-3" endIcon={<SendIcon/>} type="submit">
                        Send
                    </Button>
                </Form>
            </div>

        </div>
    )
}