import footerImage from "../assets/images/footer/footerImage.svg"
import footerIcon from "../assets/images/footer/footerIcon.svg"
import call from "../assets/images/footer/call.svg"
import telegram from "../assets/images/footer/telegram.svg"
import instagram from "../assets/images/footer/instagram.svg"

function Footer() {
  return (
    <div className="bg-Gr2 px-5 mt-14 md:hidden">
      {/* 1 */}
      <div className="pt-12">
        <img className="mb-4" src={footerIcon} alt="footerIcon" />
        <h1 className="text-base font-medium mb-1">
          سقفینو؛ سقفی برای یک زندگی ایده‌آل
        </h1>
        <p className="font-normal">تجربه لذت خانه‌دار شدن آنی و آسان</p>
      </div>

      {/* 2 */}
      <div className="flex mt-4 gap-x-20">
        <p className="text-[10px]">بیشترین جست‌وجوها</p>
        <p className="text-[10px]">بازارهای املاک و مستغلات</p>
      </div>
      <p className="text-[10px] text-Gr9 mt-8">
        سقفینو پلی است تا به سرعت در بین هزاران آگهی ثبت‌شده جست‌وجو کنید. ملک
        مورد نظر را پیدا کنید و برای انجام معامله‌ای مطمئن، با مشاورین املاک
        معتمد و متخصص شهرتان در ارتباط باشید.
      </p>

      {/* 3 */}
      <div className="flex mt-6 gap-x-4">
        <div>
          <p className="mb-2">خدمات</p>
          <p className="caption--text--footer">اجاره</p>
          <p className="caption--text--footer">ثبت آگهی ملک</p>
          <p className="caption--text--footer">املاک</p>
          <p className="caption--text--footer">مشاورین املاک</p>
          <p className="caption--text--footer">اخبار روز املاک</p>
          <p className="text-[10px] text-Gr9">سوالات ملکی</p>
        </div>

        <div>
          <p className="mb-2">ارتباط با ما</p>
          <span className="flex items-center">
            <img className="m-1" src={call} alt="call" />
            <p className="text-[10px] text-Gr9">تلفن</p>
          </span>
          <span className="flex items-center">
            <img className="m-1" src={instagram} alt="call" />
            <p className="text-[10px] text-Gr9">اینستاگرام</p>
          </span>
          <span className="flex items-center">
            <img className="m-1" src={telegram} alt="call" />
            <p className="text-[10px] text-Gr9">تلگرام</p>
          </span>
        </div>

        <div>
          <p className="mb-2">اطلاعات</p>
          <p className="caption--text--footer">دانلود اپلیکشن سقفینو</p>
          <p className="caption--text--footer">تماس با ما</p>
          <p className="caption--text--footer">داستان ‌سقفینو</p>
          <p className="caption--text--footer">پرسش‌های پرتکرار</p>
          <p className="caption--text--footer">یک سقف؛ بلاگ سقفینو </p>
          <p className="caption--text--footer">حریم شخصی شما</p>
          <p className="caption--text--footer">اطلاعات</p>
        </div>
      </div>
      <img className="mt-20 w-full" src={footerImage} alt="footerImage" />
    </div>
  )
}

export default Footer
