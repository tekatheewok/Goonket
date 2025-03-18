import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function Head() {
  return (
    <div className="end-block page-header center-items">
      <h1 className="header-title">Welcome to Goonket!</h1>
      <p className="header-desc">Goonket is a site that connects gooning with play.</p>
    </div>
  )
}

function PageButton({text, location}) {
  return (
    <button onClick={() => {
      window.location.href = location;
    }}>{text}</button>
  )
} 

function Content() {
  return (
    <div className="content-block center-items">
      <PageButton text="Free Minecraft" location="/minecraft"/>
      <PageButton text="Login" location="/login"/>
    </div>
  )
}

function Footer() {
  return (
    <div className="end-block page-footer center-items">
      <p>©2025 Goonket Inc.</p>
      <p>We are not affiliated with Blooket or Gimkit.</p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Head/>
    <Content/>
    <Footer/>
  </StrictMode>,
)