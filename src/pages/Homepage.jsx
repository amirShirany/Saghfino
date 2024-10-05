import HeaderHomepage from "../components/HeaderHomePage"
import HelpHomePage from "../components/HelpHomePage"
import HelpMelk from "../components/HelpMelk"
import Moshavere from "../components/Moshavere"
import News from "../components/News"
import Footer from "../components/Footer"

function Homepage() {
  return (
    <div className="container xl:max-w-screen-2xl">
      <HeaderHomepage />
      <HelpHomePage />
      <HelpMelk />
      <Moshavere />
      <News />
      <Footer />
    </div>
  )
}

export default Homepage
