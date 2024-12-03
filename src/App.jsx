import { Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Homepage from "./pages/Homepage"
import Advertisement from "./pages/advertisement"

function App() {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center">
        <Toaster />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/advertisement" element={<Advertisement />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
