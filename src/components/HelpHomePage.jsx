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
    <div className="flex justify-center">
      <div className="w-[1224px]">
        <h2 className="mt-[104px] mb-8">
          سقفینو چطور به خانه‌دار شدن شما کمک می‌کند
        </h2>
        <div className="flex justify-center gap-x-6">
          {itemWork.map((item) => {
            return (
              <div
                key={item.id}
                className="w-full max-w-[392px] h-[511px] text-center border border-Gr4 bg-Gr2 rounded-2xl"
              >
                <div className="mx-14 my-8">
                  <img src={item.picItem} />
                </div>
                <div className="h-full max-h-[214px] mb-6">
                  <p className="font-bold text-2xl mb-3">{item.Title}</p>
                  <p className="mx-8">{item.subTitle}</p>
                </div>
                <button className="btn--secondary w-[328px] mb-8 mx-8">
                  {item.btnWork}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DetailHomePage
