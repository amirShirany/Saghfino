import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Advertisement from "./pages/advertisement"

function App() {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/advertisement" element={<Advertisement />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
