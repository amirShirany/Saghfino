import { createRoot } from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { NextUIProvider } from "@nextui-org/react"
import App from "./App.jsx"
import "./assets/fonts.css"
import "./index.css"
// import { StrictMode } from "react"

createRoot(document.getElementById("root")).render(
  <Router>
    {/* <StrictMode> */}
    <NextUIProvider>
      <App />
    </NextUIProvider>
    {/* </StrictMode> */}
  </Router>
)
