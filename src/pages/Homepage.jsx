import HeaderHomepage from "../components/HeaderHomePage"
import HelpHomePage from "../components/HelpHomePage"
import HelpMelk from "../components/HelpMelk"

function Homepage() {
  return (
    <div className="container xl:max-w-screen-2xl">
      <HeaderHomepage />
      <HelpHomePage />
      <HelpMelk />
    </div>
  )
}

export default Homepage
