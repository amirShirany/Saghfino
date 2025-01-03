import HeaderHomepage from "../components/HeaderHomePage"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"

function HomeLayout() {
  return (
    <div>
      <HeaderHomepage />
      <Outlet />
      <Footer />
    </div>
  )
}

export default HomeLayout
