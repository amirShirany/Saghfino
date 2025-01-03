import HelpHomePage from "../components/HelpHomePage"
import HelpMelk from "../components/HelpMelk"
import Moshavere from "../components/Moshavere"
import News from "../components/News"

function Homepage() {
  return (
    <div className="container xl:max-w-screen-2xl">
      <HelpHomePage />
      <HelpMelk />
      <Moshavere />
      <News />
    </div>
  )
}

export default Homepage
