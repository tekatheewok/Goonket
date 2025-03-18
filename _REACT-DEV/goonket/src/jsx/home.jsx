import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { PageButton } from "./global.jsx"
import "../style.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <h1>Goonket</h1>
      <PageButton text="test" destination="https://example.com"/>
    </div>
  </StrictMode>
)