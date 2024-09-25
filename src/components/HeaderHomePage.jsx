import { CiSearch } from "react-icons/ci"
import { Divider } from "@nextui-org/react"
import Navbar from "./Navbar"
import "./App.css"

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
        <div className="w-full max-w-[816px] bg-white rounded-xl mt-[72px]">
          <div className="flex justify-around text-2xl font-medium my-6">
            <button className="text-Gr11">اجاره</button>
            <button className="text-Gr11">خرید</button>
          </div>

          <div className="flex justify-center mx-4">
            <Divider className="max-w-[800px] text-Gr11" />
          </div>

          <div className="flex items-center text-Gr11">
            <CiSearch className="mr-4 w-5 h-5" />
            <input
              className="my-3 mr-2 border-0 outline-none"
              type="text"
              placeholder="شهر مورد نظر را جستجو کنید"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderHomepage
