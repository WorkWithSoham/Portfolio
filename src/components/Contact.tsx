import {FormEvent, useState} from "react";
import {Alert} from 'flowbite-react';

import {githubAPI} from "../utils/githubUtils.ts";

export interface FormData {
    name: string,
    subject: string,
    email: string,
    message: string,
}

export const Contact = () => {

    const [alert, setAlert] = useState(false)

    const [formData, setFormData] = useState<FormData>({
        name: "",
        subject: "",
        email: "",
        message: ""
    })

    const formSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const target = e.currentTarget

        setFormData({
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            name: target.name.value,
            subject: target.subject.value,
            email: target.email.value,
            message: target.message.value,
        })

        console.log(formData)

        githubAPI(formData)
            .then(() => {
                setAlert(true);
            })

        setAlert(true)

        e.currentTarget.reset()
    }

    return (
        <div className="flex flex-col m-3 text-lg h-full text-center">
            {alert ?
                <Alert color="success" className="w-2/3 mx-auto my-2" onDismiss={() => {
                    setAlert(false)
                }}>
                    <span className="font-medium">✅</span> Thank you! Your message has been
                    received!
                </Alert> : <></>
            }
            <h6 className="m-4 text-primary">
                Feel free to reach out and share your thoughts, questions, or ideas. I'm here to
                listen and happy to
                discuss anything you have in mind. Your feedback and inquiries are always welcome!
            </h6>
            <form className="m-4" onSubmit={formSubmit}>
                <input
                    required={true}
                    className="rounded-md lg:w-2/3 h-12 m-3 bg-accent/30"
                    type="text"
                    placeholder="Name"
                    name="name"/>
                <input
                    required={true}
                    className="rounded-md lg:w-2/3 h-12 m-3 bg-accent/30"
                    type="text"
                    placeholder="Subject"
                    name="subject"/>
                <input
                    required={true}
                    className="rounded-md lg:w-2/3 h-12 m-3 bg-accent/30"
                    type="text"
                    placeholder="Email"
                    name="email"/>
                <textarea
                    required={true}
                    className="rounded-md lg:w-2/3 h-32 max-h-48 m-3 bg-accent/30"
                    rows={4}
                    placeholder="Message"
                    name="message"/>
                <br/>
                <button
                    className="px-3 py-2 w-1/3 text-sm text-center inline-flex justify-center
                    bg-slate-700/50 my-4 border-[1px] border-primary/40 text-primary/80 rounded-md
                    hover:bg-slate-400/50"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}