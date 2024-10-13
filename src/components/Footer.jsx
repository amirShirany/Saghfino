import footerImage from "../assets/images/footer/footerImage.svg"
import footerIcon from "../assets/images/footer/footerIcon.svg"
import call from "../assets/images/footer/call.svg"
import telegram from "../assets/images/footer/telegram.svg"
import instagram from "../assets/images/footer/instagram.svg"
import { Divider } from "@nextui-org/react"

function Footer() {
  return (
    <div className="w-full flex justify-center">
      {/* ........................................ */}
      {/* DesktopVersion */}
      <div className="bg-Gr2 px-5 mt-[104px] hidden md:block w-screen">
        <h1 className="text-center pt-12 text-3xl font-bold mb-1">
          سقفینو؛ سقفی برای یک زندگی ایده‌آل
        </h1>

        {/* section_1 */}
        <div className="flex mt-6 justify-evenly whitespace-nowrap">
          <div>
            <p className="mb-2">بازارهای املاک و مستغلات</p>
            <p className="caption--desktop--footer">
              بازار املاک و مستغلات تهران
            </p>
            <p className="caption--desktop--footer">
              بازار املاک و مستغلات اصفهان
            </p>
            <p className="caption--desktop--footer">
              بازار املاک و مستغلات شمال
            </p>
          </div>

          <div>
            <p className="mb-2">بیشترین جست‌وجوها</p>
            <p className="caption--desktop--footer">آپارتمان نزدیک مترو</p>
            <p className="caption--desktop--footer">آپارتمان تک واحده</p>
            <p className="caption--desktop--footer">
              بازار املاک و مستغلات شمال
            </p>
          </div>

          <div>
            <p className="mb-2">پرامتیازترین مشاوران املاک</p>
            <p className="caption--desktop--footer">میترا جباری</p>
            <p className="caption--desktop--footer">حسام‌الدین عزیزی</p>
            <p className="caption--desktop--footer">بهرام مشعوف</p>
          </div>

          <div>
            <p className="mb-2">با ما در ارتباط باشید</p>
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
        </div>

        <div className="flex justify-center mx-16 my-6">
          <Divider />
        </div>

        {/* section_2 */}
        <div className="flex mt-6 justify-evenly whitespace-nowrap">
          <div>
            <img className="w-44 mb-6" src={footerIcon} alt="footerIcon" />
            <p className="text-base mb-2">تجربه لذت خانه‌دار شدن سریع و آسان</p>
            <p className="w-60 text-xs mb-1 whitespace-break-spaces">
              سقفینو پلی است تا به سرعت در بین هزاران آگهی ثبت‌شده جست‌وجو کنید.
              ملک مورد نظر را پیدا کنید و برای انجام معامله‌ای مطمئن، با مشاورین
              املاک معتمد و متخصص شهرتان در ارتباط باشید.
            </p>
          </div>

          <div>
            <p className="mb-2">خدمات</p>
            <p className="caption--desktop--footer">اجاره</p>
            <p className="caption--desktop--footer">خرید</p>
            <p className="caption--desktop--footer">ثبت رایگان آگهی ملک</p>
            <p className="caption--desktop--footer">املاک و مستغلات</p>
            <p className="caption--desktop--footer">مشاورین املاک</p>
            <p className="caption--desktop--footer">اخبار روز املاک</p>
            <p className="caption--desktop--footer">سوال ملکی دارید؟</p>
          </div>

          <div>
            <p className="mb-2">اطلاعات</p>
            <p className="caption--desktop--footer">دانلود اپلیکشن سقفینو</p>
            <p className="caption--desktop--footer">تماس با ما</p>
            <p className="caption--desktop--footer">داستان ‌سقفینو</p>
            <p className="caption--desktop--footer">پرسش‌های پرتکرار</p>
            <p className="caption--desktop--footer">یک سقف؛ بلاگ سقفینو</p>
            <p className="caption--desktop--footer">حریم شخصی شما</p>
            <p className="caption--desktop--footer">تعهدات ما و شما</p>
          </div>

          <div>
            <p className="mb-2">حساب کاربری</p>
            <p className="caption--desktop--footer">پروفایل من</p>
            <p className="caption--desktop--footer">ملک‌های نشان‌شده</p>
            <p className="caption--desktop--footer">آگهی‌های من</p>
          </div>
        </div>
        <img
          className="mt-7 mx-auto w-1/2"
          src={footerImage}
          alt="footerImage"
        />
      </div>

      {/* ........................................ */}
      {/* MobileVersion */}
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
            <p className="caption--mobile--footer">اجاره</p>
            <p className="caption--mobile--footer">ثبت آگهی ملک</p>
            <p className="caption--mobile--footer">املاک</p>
            <p className="caption--mobile--footer">مشاورین املاک</p>
            <p className="caption--mobile--footer">اخبار روز املاک</p>
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
            <p className="caption--mobile--footer">دانلود اپلیکشن سقفینو</p>
            <p className="caption--mobile--footer">تماس با ما</p>
            <p className="caption--mobile--footer">داستان ‌سقفینو</p>
            <p className="caption--mobile--footer">پرسش‌های پرتکرار</p>
            <p className="caption--mobile--footer">یک سقف؛ بلاگ سقفینو </p>
            <p className="caption--mobile--footer">حریم شخصی شما</p>
            <p className="caption--mobile--footer">اطلاعات</p>
          </div>
        </div>
        <img className="mt-20 w-full" src={footerImage} alt="footerImage" />
      </div>
    </div>
  )
}

export default Footer
