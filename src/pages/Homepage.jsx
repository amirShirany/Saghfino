import HeaderHomepage from "../components/HeaderHomePage"
import HelpHomePage from "../components/HelpHomePage"

function Homepage() {
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-2xl">
        <HeaderHomepage />
        <HelpHomePage />
        
      </div>
    </div>
  )
}

export default Homepage
