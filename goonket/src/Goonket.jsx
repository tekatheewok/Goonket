import { useState } from 'react'
import './styles/main.css'

function Head() {
  return (
    <div className="header-main">
      <h1 className="site-header">Welcome to Goonket!</h1>
      <p className="site-desc">Goonket is a site that connects learning with play.</p>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Head/>
    </>
  )
}