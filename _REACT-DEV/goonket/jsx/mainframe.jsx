import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

function ContentBox() {
    return (
        <div className="mainframe-content-box">
            <h1>MAINFRAME</h1>
        </div>
    )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>

  </StrictMode>
)