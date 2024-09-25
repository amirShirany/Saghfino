import HeaderHomepage from "../components/HeaderHomePage"
import DetailHomePage from "../components/DetailHomePage"

function Homepage() {
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-2xl">
        <HeaderHomepage />
        <DetailHomePage />
      </div>
    </div>
  )
}

export default Homepage
