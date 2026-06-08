import { div } from "framer-motion/client"
import HelpHomePage from "../components/HelpHomePage"
import HelpMelk from "../components/HelpMelk"
import Moshavere from "../components/Moshavere"
import News from "../components/News"

function Homepage() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="container xl:max-w-screen-2xl mx-auto">
        <HelpHomePage />
        <HelpMelk />
        <Moshavere />
        <News />
      </div>
    </div>
  )
}

export default Homepage
