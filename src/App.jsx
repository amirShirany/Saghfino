import { Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Homepage from "./pages/Homepage"
import FirstAdvertisement from "./pages/FirstAdvertisement"
import SecondAdvertisement from "./pages/SecondAdvertisement"

function App() {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center">
        <Toaster />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/first-advertisement" element={<FirstAdvertisement />} />
          <Route
            path="/second-advertisement"
            element={<SecondAdvertisement />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
