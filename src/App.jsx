import { Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import HomeLayout from "./layout/HomeLayout"
import Homepage from "./pages/Homepage"
import FirstAdvertisement from "./pages/FirstAdvertisement"
import SecondAdvertisement from "./pages/SecondAdvertisement"
import ThirdAdvertisement from "./pages/ThirdAdvertisement"

function App() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <Toaster />
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Homepage />} />
          </Route>

          <Route path="/first-advertisement" element={<FirstAdvertisement />} />
          <Route
            path="/second-advertisement"
            element={<SecondAdvertisement />}
          />
          <Route path="/third-advertisement" element={<ThirdAdvertisement />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
