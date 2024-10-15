import { useState } from "react"
import Logo from "../assets/images/Logo.svg"
import hamberMenu from "../assets/images/hamberMenu.svg"
import Login from "./Login/Login"
import "./App.css"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div>
        <div className="w-svw md:hidden py-3 flex justify-between items-center bg-white">
          <img className="mr-8" src={hamberMenu} />
          <img className="mr-8" src={Logo} />
          <button className="btn--primary btn--hover ml-4">ثبت آگهی</button>
        </div>

        {/* Desktop-Navbar */}
        <div className=" justify-center items-center hidden md:block">
          <div className="flex justify-between min-w-[750px] lg:w-[1000px] xl:w-[1224px] h-[115px] lg:mx-[108px] mt-10 rounded-2xl text-Gr10 bg-Gr2">
            <div className="flex items-center text-xl gap-x-4 lg:gap-x-8">
              <img className="mr-8" src={Logo} />
              <h4 className="md:text-sm lg:text-xl">اجاره</h4>
              <h4 className="md:text-sm lg:text-xl">خرید</h4>
              <h4 className="md:text-sm lg:text-xl">املاک و مستغلات</h4>
              <h4 className="md:text-sm lg:text-xl">مشاورین املاک</h4>
              <h4 className="md:text-sm lg:text-xl">اخبار روز</h4>
            </div>

            <div className="flex items-center gap-x-8 ml-8">
              <h4
                className="md:text-sm lg:text-xl hover:cursor-pointer"
                onClick={() => setOpen(true)}
              >
                ورود
              </h4>
              <button className="btn--primary btn--hover">ثبت آگهی</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Login setOpen={setOpen} open={open} />
      </div>
    </div>
  )
}

export default Navbar
