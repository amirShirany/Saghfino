import Homephoto from "../assets/images/Homephoto.svg"
import Logo from "../assets//images/Logo.svg"
import { CiSearch } from "react-icons/ci"

function HeaderHomepage() {
  return (
    <div
      style={{
        backgroundImage: "",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "40px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>44444444444444444444</div>
        <div>55555555555555555555</div>
      </div>
      <div style={{ paddingTop: "100px" }}>2</div>

      <div>3</div>
    </div>

    // <div>
    //   <div className="card card-actions rounded-none image-full">
    //     <figure className="overflow-hidden w-screen h-screen flex items-center justify-center">
    //       <img src={Homephoto} className="w-screen overflow-" />
    //     </figure>

    //     {/* header */}
    //     <div className="flex justify-between bg-white h-28 mx-24 mt-10 rounded-2xl text-colorHeading">
    //       <div className="flex items-center text-xl gap-x-8">
    //         <img className="mr-8" src={Logo} />
    //         <p>اجاره</p>
    //         <p>خرید</p>
    //         <p>املاک و مستغلات</p>
    //         <p>مشاورین املاک</p>
    //         <p>اخبار روز</p>
    //       </div>

    //       <div className="flex items-center gap-x-8 ml-8">
    //         <p>ورود</p>
    //         <button className="btn-header">ثبت آگهی</button>
    //       </div>
    //     </div>

    //     {/* detailHeader */}
    //     <div className="text-center text-hColor mt-72">
    //       <h2 className="text-5xl font-bold mb-3">سقفینو؛ سقفی برای همه</h2>
    //       <p className="text-3xl">
    //         آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید
    //       </p>
    //     </div>

    //     <div className="flex justify-center text-itemColor">
    //       <div className="mt-473 w-3/4 justify-center bg-white rounded-xl">
    //         <div className="flex justify-evenly font-medium text-2xl mt-2">
    //           <p>خرید</p>
    //           <p>اجاره</p>
    //         </div>
    //         <div className="divider border-b-slate-700-600 mx-4"></div>
    //         <div className="flex items-center text-lg m-3">
    //           <CiSearch className="mt-2 w-6 h-6" />
    //           <p>شهر مورد نظر را جستجو کنید</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default HeaderHomepage
