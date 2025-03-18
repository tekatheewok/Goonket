import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

export function PageButton({text, destination}) {
    return (
        <button onClick={() => {window.location.href = destination}}>{text}</button>
    );
}