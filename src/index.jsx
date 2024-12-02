import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { StrictMode } from "react"
import { NextUIProvider } from "@nextui-org/react"
import App from "./App.jsx"
import "./assets/fonts.css"
import "./index.css"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </StrictMode>
  </BrowserRouter>
)
