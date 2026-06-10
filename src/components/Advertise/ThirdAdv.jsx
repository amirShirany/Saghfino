import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { usePage3Store } from "../../store/useFormStore"
import toast from "react-hot-toast"
import Stepper_3 from "../../assets/images/Advertisement/Stepper_3.svg"
import "../App.css"

const REQUIRED = "فیلد اجباری است!"
const INPUT_BASE = "bg-white input-style"

function ThirdAdv() {
  const navigate = useNavigate()
  const { page3Data, setPage3Data } = usePage3Store()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: page3Data })

  const watchedValues = watch()
  const inputClass = (field) =>
    `${INPUT_BASE} ${watchedValues[field] ? "border border-Gr11" : "border border-Gr7"}`

  const onSubmit = (data) => {
    const storedData = JSON.parse(localStorage.getItem("page3Data") ?? "null")
    const hasChanged = JSON.stringify(data) !== JSON.stringify(storedData)

    if (hasChanged) {
      setPage3Data(data)
      toast.success("اطلاعات با موفقیت ثبت شد", {
        duration: 4000,
        icon: "✔️",
        className: "success-toast",
      })
    } else {
      toast.error("اطلاعات تغییر نکرد!", {
        duration: 4000,
        icon: "⚠️",
        className: "alert-toast",
      })
    }

    navigate("/fourth-advertisement")
  }

  return (
    <div className="svg-advertise-background">
      <div className="bg-white mt-20 mx-4 px-4 lg:px-24 rounded-3xl flex flex-col lg:w-2/3 lg:h-screen lg:m-0 lg:rounded-none">
        <img
          src={Stepper_3}
          alt="step indicator"
          className="mt-14 w-72 h-5 lg:w-[580px] lg:h-6 mx-auto"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="mt-10 mb-6 lg:mt-16 lg:mb-10 text-Gr11 font-medium text-center text-sm lg:text-2xl lg:text-right lg:mr-28">
            لطفا موارد زیر را تکمیل کنید
          </p>

          {/* Row 1 — Area & Room */}
          <div className="flex justify-center">
            <div className="lg:flex lg:justify-center lg:mt-9 ml-3">
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="area"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  متراژ (متر مربع)
                </label>
                <input
                  id="area"
                  type="text"
                  {...register("area", { required: REQUIRED })}
                  className={inputClass("area")}
                  placeholder="مساحت ملک خود را وارد کنید"
                />
                {errors.area && (
                  <span className="text-red-500 font-medium m-1">
                    {errors.area.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col lg:mr-4">
                <label
                  htmlFor="room"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  اتاق
                </label>
                <input
                  id="room"
                  type="text"
                  {...register("room", { required: REQUIRED })}
                  className={inputClass("room")}
                  placeholder="تعداد اتاق‌ها را بنویسید"
                />
                {errors.room && (
                  <span className="text-red-500 font-medium m-1">
                    {errors.room.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Row 2 — Floor & NumFloors */}
          <div className="flex justify-center">
            <div className="lg:flex lg:justify-center lg:mt-9 ml-3">
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="floor"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  طبقه
                </label>
                <input
                  id="floor"
                  type="text"
                  {...register("floor", { required: REQUIRED })}
                  className={inputClass("floor")}
                  placeholder="طبقه ملک خود را بنویسید"
                />
                {errors.floor && (
                  <span className="text-red-500 font-medium m-1">
                    {errors.floor.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col lg:mr-4">
                <label
                  htmlFor="numfloors"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  تعداد طبقات
                </label>
                <input
                  id="numfloors"
                  type="text"
                  {...register("numfloors", { required: REQUIRED })}
                  className={inputClass("numfloors")}
                  placeholder="تعداد طبقات ملک خود را بنویسید"
                />
                {errors.numfloors && (
                  <span className="text-red-500 font-medium m-1">
                    {errors.numfloors.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-16 mt-10 lg:mt-24 flex justify-center">
            <button
              type="button" // ✅ type اضافه شد
              onClick={() => navigate("/second-advertisement")}
              className="btn--primary py-0 text-primary border-primary font-medium w-24 h-8 lg:w-48 lg:h-12">
              قبلی
            </button>
            <button
              type="submit"
              className="btn--secondary font-medium mr-4 w-24 h-8 lg:w-48 lg:h-12">
              ادامه
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ThirdAdv
