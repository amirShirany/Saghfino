/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { usePage1Store } from "../../store/useFormStore"
import toast from "react-hot-toast"
import Stepper_1 from "../../assets/images/Advertisement/Stepper_1.svg"
import "../App.css"

export const citys = [
  { value: "اصفهان", label: "اصفهان" },
  { value: "تهران", label: "تهران" },
  { value: "مشهد", label: "مشهد" },
  { value: "شیراز", label: "شیراز" },
]

export const regions = [
  { value: "منطقه 1", label: "منطقه 1" },
  { value: "منطقه 2", label: "منطقه 2" },
  { value: "منطقه 3", label: "منطقه 3" },
  { value: "منطقه 4", label: "منطقه 4" },
]

function FirstAdv() {
  //use react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm()
  //use zustand
  const { page1Data, setPage1Data } = usePage1Store()

  // نظارت بر تغییرات تمامی فیلدها
  const watchedValues = watch()
  const inputClass = (field) => {
    const isEmpty = watchedValues[field] === ""
    return `bg-white input-style ${
      isEmpty ? "border border-Gr7" : "border border-Gr11"
    }`
  }

  useEffect(() => {
    setValue("city", page1Data.city)
    setValue("region", page1Data.region)
    setValue("mainstreet", page1Data.mainstreet)
    setValue("sidestreet", page1Data.sidestreet)
  }, [setValue, page1Data])

  //Submit-Form
  const onSubmit = (page1Data) => {
    // localStorage دریافت اطلاعات قبلی از
    const storedData = JSON.parse(localStorage.getItem("page1Data"))
    // مقایسه اطلاعات جدید با اطلاعات قبلی
    if (JSON.stringify(page1Data) !== JSON.stringify(storedData)) {
      setPage1Data(page1Data)
      console.log("Page 1 Data Submitted:", page1Data)

      //toast.success
      toast.success("اطلاعات باموفقیت ثبت شد", {
        duration: 4000,
        icon: "✔️",
        className: "success-toast",
      })
    } else {
      //toast.error
      toast.error("اطلاعات تغییر نکرد!", {
        duration: 4000,
        icon: "⚠️",
        className: "alert-toast",
      })
    }

    navigate("/second-advertisement")
  }

  const navigate = useNavigate()
  const handleClickHomePage = () => {
    navigate("/")
  }

  return (
    <div className="svg-advertise-background">
      <div className="bg-white mt-20 mx-4 px-4 lg:px-24 rounded-3xl flex flex-col lg:w-2/3 lg:h-screen lg:m-0 lg:rounded-none">
        {/* Header_Form */}
        <img
          className="mt-14 w-72 h-5 lg:w-[580px] lg:h-6 mx-auto"
          src={Stepper_1}
        />

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="mt-10 mb-6 lg:mt-16 lg:mb-10 text-Gr11 font-medium text-center text-sm lg:text-2xl lg:text-right lg:mr-28">
            لطفا موارد زیر را تکمیل کنید
          </p>
          <div className="flex justify-center">
            <div className="lg:flex lg:justify-center ml-3">
              {/* select_1 */}
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="city"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  شهر
                </label>
                <select
                  id="city"
                  {...register("city", {
                    required: "فیلد اجباری است!",
                  })}
                  className={inputClass("city")}>
                  <option value="" disabled>
                    لطفا شهر مورد نظر رانتخاب کنید
                  </option>
                  {citys.map((city) => (
                    <option className="font-semibold" key={city.value}>
                      {city.label}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <span className="text-red-500 font-medium m-1">
                    {errors.city.message}
                  </span>
                )}
              </div>

              {/* select_2 */}
              <div className="flex flex-col mb-5 lg:mr-4">
                <label
                  htmlFor="region"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  منطقه
                </label>
                <select
                  id="region"
                  name="region"
                  placeholder="لطفا منطقه مورد نظر رانتخاب کنید"
                  {...register("region", {
                    required: true,
                  })}
                  className={inputClass("region")}>
                  <option value="" disabled>
                    لطفا منطقه مورد نظر رانتخاب کنید
                  </option>
                  {regions.map((region) => (
                    <option className="font-semibold" key={region.value}>
                      {region.label}
                    </option>
                  ))}
                </select>
                {errors.region && (
                  <span className="text-red-500 font-medium m-1">
                    فیلد اجباری است!
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="lg:flex lg:justify-center lg:mt-9 ml-3">
              {/* input_3 */}
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="mainstreet"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  خیابان اصلی
                </label>
                <input
                  id="mainstreet"
                  type="text"
                  name="mainstreet"
                  {...register("mainstreet", {
                    required: true,
                  })}
                  className={inputClass("mainstreet")}
                  placeholder="آدرس خود را وارد کنید"
                />
                {errors.mainstreet && (
                  <span className="text-red-500 font-medium m-1">
                    فیلد اجباری است!
                  </span>
                )}
              </div>

              {/* input_4 */}
              <div className="flex flex-col lg:mr-4">
                <label
                  htmlFor="sidestreet"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  خیابان فرعی/کوچه
                </label>
                <input
                  id="sidestreet"
                  type="text"
                  name="sidestreet"
                  {...register("sidestreet", {
                    required: true,
                  })}
                  className={inputClass("sidestreet")}
                  placeholder="جزئیات آدرس را وارد کنید"
                />
                {errors.sidestreet && (
                  <span className="text-red-500 font-medium m-1">
                    فیلد اجباری است!
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="mb-16 mt-10 lg:mt-24 flex justify-center">
            <button
              className="btn--primary py-0 text-primary border-primary font-medium w-24 h-8 lg:w-48 lg:h-12"
              onClick={handleClickHomePage}>
              قبلی
            </button>
            <button
              className="btn--secondary font-medium mr-4 w-24 h-8 lg:w-48 lg:h-12"
              type="submit">
              ادامه
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FirstAdv
