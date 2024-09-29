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
      <div>
        <h2 className="mt-[56px] lg:mt-[104px] mb-8">
          سقفینو چطور به خانه‌دار شدن شما کمک می‌کند
        </h2>
        <div className="overflow-x-auto">
          <div className="flex flex-row gap-x-6 h-[430px] lg:h-[530px] w-[350px] md:w-[720px] lg:w-[1224px]">
            {itemWork.map((item) => {
              return (
                <div
                  key={item.id}
                  className=" text-center lg:w-[392px] lg:h-[511px]  border border-Gr4 bg-Gr2 rounded-2xl relative"
                >
                  <div className="lg:mx-14 lg:my-8 mx-20 my-6 w-[181px] h-[93px] lg:w-[280px] lg:h-[145px]">
                    <img src={item.picItem} />
                  </div>
                  <div className="h-full max-h-[214px]">
                    <h2 className="mb-3">{item.Title}</h2>
                    <p className="mx-8">{item.subTitle}</p>
                  </div>
                  <div className="flex justify-center">
                    <button className="btn--secondary min-w-[156px] lg:w-[328px] absolute lg:bottom-8 lg:left-8 lg:right-8">
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
