import React, { Suspense } from "react"
const HeaderHomepage = React.lazy(() => import("../components/HeaderHomePage"))
// import HeaderHomepage from "../components/HeaderHomePage"
import HelpHomePage from "../components/HelpHomePage"
import HelpMelk from "../components/HelpMelk"
import Moshavere from "../components/Moshavere"
import News from "../components/News"
import Footer from "../components/Footer"

function Homepage() {
  return (
    <div className="container xl:max-w-screen-2xl">
      <Suspense fallback={<div>Loading...</div>}>
        <HeaderHomepage />
      </Suspense>
      <HelpHomePage />
      <HelpMelk />
      <Moshavere />
      <News />
      <Footer />
    </div>
  )
}

export default Homepage
