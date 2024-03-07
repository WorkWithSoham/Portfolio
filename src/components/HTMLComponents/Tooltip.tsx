import {ReactNode} from "react";

type props = {
    message: string,
    children: ReactNode
}

export default function Tooltip({message, children}: props) {
    return (
        <div className="group relative flex justify-center mx-1 my-3">
            {children}
            <span className="absolute top-12 scale-0 transition-all rounded bg-accent/50 p-2 text-xs text-primary
             group-hover:scale-100">{message}</span>
        </div>
    )
}
