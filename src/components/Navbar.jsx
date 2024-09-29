import Logo from "../assets//images/Logo.svg"

function Navbar() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-between min-w-[750px] lg:w-[1000px] xl:w-[1224px] h-[115px] lg:mx-[108px] mt-10 rounded-2xl text-Gr10 bg-Gr2">
        <div className="flex items-center text-xl gap-x-4 lg:gap-x-8">
          <img className="mr-8" src={Logo} />
          <h4>اجاره</h4>
          <h4>خرید</h4>
          <h4>املاک و مستغلات</h4>
          <h4>مشاورین املاک</h4>
          <h4>اخبار روز</h4>
        </div>

        <div className="flex items-center gap-x-8 ml-8">
          <h4>ورود</h4>
          <button className="btn--primary btn--hover">ثبت آگهی</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
