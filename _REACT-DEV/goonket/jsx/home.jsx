import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { PageButton } from "./global.jsx"

function Header() {
  return (
    <div id="header" className="content-section center-content">
      <div class="content-section center-content vertical-stack header-content-section">
        <h1 id="header-title" className="header-item">Goonket</h1>
        <p id="header-desc" className="header-item">Goonket is a site that combines learning with play.</p>
      </div>
      <div class="content-section center-content vertical-stack header-content-section">
        <button className="home-log-in-direct-btn">Log in</button>
        <button className="home-sign-up-direct-btn">Sign up</button>
      </div>
    </div>
  )
}

function MainContent() {
  return (
    <div className="content-section center-content vertical-stack">
      <h1>goonket is awesome</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <MainContent/>
  </StrictMode>
)