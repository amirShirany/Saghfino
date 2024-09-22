import HomeEjare from "../assets/images/HomeEjare.svg"
import HomeKharid from "../assets/images/HomeKharid.svg"
import HomeAgahi from "../assets/images/HomeAgahi.svg"

const itemWork = [
  {
    id: 1,
    picItem: HomeEjare,
    Title: "به آسانی یک خانه اجاره کنید",
    subTitle:
      "در میان صدها آگهی که روزانه به وب‌سایت سقفینو افزوده می‌شود، با استفاده از بیش از ۲۸ فیلتر کاربردی تلاش کرده‌ایم خانه‌ای که در جست‌وجوی آن هستید را هر چه سریعتر پیدا و اجاره کنید.",
    btnWork: "اجاره خانه",
  },
  {
    id: 2,
    picItem: HomeKharid,
    Title: "خانه مورد علاقه‌تان را بخرید",
    subTitle:
      "بالای ۱ میلیون آگهی فروش در وب‌سایت سقفینو وجود دارد علاوه بر آگهی‌های فراوان با به‌کارگیری املاک و مشاورین متخصص در هر شهر، تلاش می‌کنیم در تجربه لذت یک خرید آسان با شما سهیم باشد.",
    btnWork: "خرید خانه",
  },
  {
    id: 3,
    picItem: HomeAgahi,
    Title: "مالک هستید؟",
    subTitle:
      "آیا می‌دانید میانگین بازدید از وب‌سایت به‌طور متوسط روزانه بالای هزاران نفر است؟ پس به‌سادگی و با چند کلیک ساده، ملک‌تان را به‌صورت رایگان در سقفینو آگهی و در سریع‌ترین زمان ممکن معامله کنید.",
    btnWork: "ثبت آگهی",
  },
]

function DetailHomePage() {
  return (
    <div className="bg-white text-itemColor w-screen flex justify-center">
      <div className="w-1224">
        <p className="font-bold text-2xl my-4">
          سقفینو چطور به خانه‌دار شدن شما کمک می‌کند
        </p>

        <div className="">
          <div className="flex justify-center gap-x-6">
            {itemWork.map((item) => {
              return (
                <div key={item.id} className="flex text-center">
                  <div className="bg-bgCard rounded-2xl">
                    <span className="flex mx-16 my-8">
                      <img src={item.picItem} alt="" />
                    </span>
                    <p className="font-bold text-2xl mb-3">{item.Title}</p>
                    <span className="flex justify-center">
                      <p className="w-80">{item.subTitle}</p>
                    </span>
                    <button className="btn-entry w-80 mt-16 mb-8">
                      {item.btnWork}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailHomePage
