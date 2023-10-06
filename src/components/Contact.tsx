import React, {FormEvent, useState} from "react";
import "../styles/contact.css"

import Typography from "@mui/material/Typography";

import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from "@mui/material/Button";
import {Form} from "react-bootstrap";
import Alert from '@mui/material/Alert';

import {githubAPI} from "../utils/githubAPI";

export interface UserResponse {
    full_name: string,
    email: string,
    subject: string,
    message: string
}

export const Contact = () => {
    const [alert, setAlert] = useState<Boolean>(false)

    const onSend = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data: UserResponse = {
            full_name: event.currentTarget.full_name.value,
            email: event.currentTarget.email.value,
            subject: event.currentTarget.subject.value,
            message: event.currentTarget.message.value
        }

        githubAPI(data)
            .then(r => {
                setAlert(true);
            })

        event.currentTarget.reset();

    }

    return (
        <div className="mx-auto contactForm">
            {alert && <Alert onClose={() => {
                setAlert(false)
            }}>Thank you for your message! :)</Alert>}

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
                            //required
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
                            //required
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
                            //required
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