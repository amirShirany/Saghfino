import Logo from "../assets//images/Logo.svg"

function Navbar() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-between w-full xl:w-[1224px] h-[115px] mx-[108px] mt-10 rounded-2xl text-Gr10 bg-Gr2">
        <div className="flex items-center text-xl gap-x-8">
          <img className="mr-8" src={Logo} />
          <p>اجاره</p>
          <p>خرید</p>
          <p>املاک و مستغلات</p>
          <p>مشاورین املاک</p>
          <p>اخبار روز</p>
        </div>

        <div className="flex items-center gap-x-8 ml-8">
          <p>ورود</p>
          <button className="btn--primary btn--secondary">ثبت آگهی</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
