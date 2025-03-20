import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { PageButton } from "./global.jsx"

function Page() {
    return (
        <div className="center-item center-content vertical-stack">
            <h1>404</h1>
            <PageButton text="Return home" destination="/"/>
        </div>
    )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page/>
  </StrictMode>
)