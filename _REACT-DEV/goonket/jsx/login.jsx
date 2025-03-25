import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { PageButton } from "./global.jsx"

function leftpage() {
    return(
        <div className="left-login-header">
            <h1 className="top-left-goonket-logo"
            <button className="sign-up-btn"></button>
        </div>
    )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <MainContent/>
  </StrictMode>
)