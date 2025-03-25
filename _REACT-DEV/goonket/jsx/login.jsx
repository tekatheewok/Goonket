import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { PageButton } from "./global.jsx"

function Leftpage() {
    return(
        <div className="left-login-header">
            <div className="top-left-logo">
            <h1 className="top-left-logo-txt">GOONKET</h1>
            </div>
            <button className="sign-up-btn">adgsdg</button>
        </div>
    )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Leftpage/>
  </StrictMode>
)