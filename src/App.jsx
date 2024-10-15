import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"

function App() {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
