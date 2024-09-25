import Navbar from "./Navbar"
import "./App.css"
import HeaderSearchCard from "./HeaderSearchCard"

function HeaderHomepage() {
  return (
    <div className="svg-background">
      <div className="flex flex-col justify-center items-center text-center">
        <Navbar />

        {/* title text in Header */}
        <div className="mt-[124px] gap-y-3">
          <h1 className="text-Gr3">سقفینو؛ سقفی برای همه</h1>
          <h2 className="text-Gr3">
            آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید
          </h2>
        </div>

        {/* Search card */}
        <HeaderSearchCard />
      </div>
    </div>
  )
}

export default HeaderHomepage
