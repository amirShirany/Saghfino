import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { usePage1Store } from "../../store/useFormStore"
import toast from "react-hot-toast"
import Stepper_1 from "../../assets/images/Advertisement/Stepper_1.svg"
import "../App.css"

export const CITIES = [
  { value: "اصفهان", label: "اصفهان" },
  { value: "تهران", label: "تهران" },
  { value: "مشهد", label: "مشهد" },
  { value: "شیراز", label: "شیراز" },
]

export const REGIONS = [
  { value: "منطقه 1", label: "منطقه 1" },
  { value: "منطقه 2", label: "منطقه 2" },
  { value: "منطقه 3", label: "منطقه 3" },
  { value: "منطقه 4", label: "منطقه 4" },
]

const REQUIRED = "فیلد اجباری است!"
const INPUT_BASE = "bg-white input-style"

function FirstAdv() {
  const navigate = useNavigate()
  const { page1Data, setPage1Data } = usePage1Store()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: page1Data }) // جای useEffect + setValue رو گرفت

  const watchedValues = watch()

  const inputClass = (field) =>
    `${INPUT_BASE} ${watchedValues[field] ? "border border-Gr11" : "border border-Gr7"}`

  const onSubmit = (data) => {
    const storedData = JSON.parse(localStorage.getItem("page1Data") ?? "null")
    const hasChanged = JSON.stringify(data) !== JSON.stringify(storedData)

    if (hasChanged) {
      setPage1Data(data)
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

    navigate("/second-advertisement")
  }

  return (
    <div className="svg-advertise-background">
      <div className="bg-white mt-20 mx-4 px-4 lg:px-24 rounded-3xl flex flex-col lg:w-2/3 lg:h-screen lg:m-0 lg:rounded-none">
        <img
          src={Stepper_1}
          alt="step indicator"
          className="mt-14 w-72 h-5 lg:w-[580px] lg:h-6 mx-auto"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="mt-10 mb-6 lg:mt-16 lg:mb-10 text-Gr11 font-medium text-center text-sm lg:text-2xl lg:text-right lg:mr-28">
            لطفا موارد زیر را تکمیل کنید
          </p>

          {/* Row 1 — City & Region */}
          <div className="flex justify-center">
            <div className="lg:flex lg:justify-center ml-3">
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="city"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  شهر
                </label>
                <select
                  id="city"
                  {...register("city", { required: REQUIRED })}
                  className={inputClass("city")}>
                  <option value="" disabled>
                    لطفا شهر مورد نظر را انتخاب کنید
                  </option>
                  {CITIES.map(({ value, label }) => (
                    <option key={value} value={value} className="font-semibold">
                      {label}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <span className="text-red-500 font-medium m-1">
                    {errors.city.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col mb-5 lg:mr-4">
                <label
                  htmlFor="region"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  منطقه
                </label>
                <select
                  id="region"
                  {...register("region", { required: REQUIRED })}
                  className={inputClass("region")}>
                  <option value="" disabled>
                    لطفا منطقه مورد نظر را انتخاب کنید
                  </option>
                  {REGIONS.map(({ value, label }) => (
                    <option key={value} value={value} className="font-semibold">
                      {label}
                    </option>
                  ))}
                </select>
                {errors.region && (
                  <span className="text-red-500 font-medium m-1">
                    {errors.region.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Row 2 — Streets */}
          <div className="flex justify-center">
            <div className="lg:flex lg:justify-center lg:mt-9 ml-3">
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="mainstreet"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  خیابان اصلی
                </label>
                <input
                  id="mainstreet"
                  type="text"
                  {...register("mainstreet", { required: REQUIRED })}
                  className={inputClass("mainstreet")}
                  placeholder="آدرس خود را وارد کنید"
                />
                {errors.mainstreet && (
                  <span className="text-red-500 font-medium m-1">
                    {errors.mainstreet.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col lg:mr-4">
                <label
                  htmlFor="sidestreet"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  خیابان فرعی/کوچه
                </label>
                <input
                  id="sidestreet"
                  type="text"
                  {...register("sidestreet", { required: REQUIRED })}
                  className={inputClass("sidestreet")}
                  placeholder="جزئیات آدرس را وارد کنید"
                />
                {errors.sidestreet && (
                  <span className="text-red-500 font-medium m-1">
                    {errors.sidestreet.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-16 mt-10 lg:mt-24 flex justify-center">
            <button
              type="button"
              onClick={() => navigate("/")}
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

export default FirstAdv
