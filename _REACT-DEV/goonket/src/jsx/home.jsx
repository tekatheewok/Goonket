import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { PageButton } from "./global.jsx"
import "../style.css"

function Header() {
  return (
    <div id="header" className="content-section center-content vertical-stack">
      <h1 id="header-title" className="header-item">Goonket</h1>
      <p id="header-desc" className="header-item">Goonket is a site that combines gooning with learning.</p>
    </div>
  )
}

function MainContent() {
  return (
    <div className="content-section center-content vertical-stack">
      <h1>Ready to play?</h1>
      <PageButton text="Log in" destination="/login"/>
      <PageButton text="Sign up" destination="/register"/>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <MainContent/>
  </StrictMode>
)