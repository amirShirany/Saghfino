/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { usePage2Store } from "../../store/useFormStore"
import toast from "react-hot-toast"
import Stepper_2 from "../../assets/images/Advertisement/Stepper_2.svg"
import arrow_3 from "../../assets/images/Advertisement/arrow_3.svg"
import "../App.css"

export const transactiontypes = [
  { value: "رهن و اجاره", label: "رهن و اجاره" },
  { value: "خرید", label: "خرید" },
]
export const propertytypes = [
  { value: "تجاری", label: "تجاری" },
  { value: "مسکونی", label: "مسکونی" },
]

function SecondAdv() {
  //use react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({})
  //use zustand
  const { page2Data, setPage2Data } = usePage2Store()

  // نظارت بر تغییرات تمامی فیلدها
  const watchedValues = watch()
  const inputClass = (field) => {
    const isEmpty = watchedValues[field] === ""
    return `bg-white input-style ${
      isEmpty ? "border border-Gr7" : "border border-Gr11"
    }`
  }

  useEffect(() => {
    setValue("Convertible", page2Data.Convertible)
    setValue("transactiontype", page2Data.transactiontype)
    setValue("propertytype", page2Data.propertytype)
    setValue("mortgage", page2Data.mortgage)
    setValue("rent", page2Data.rent)
  }, [setValue, page2Data])

  const onSubmit = (page2Data) => {
    // localStorage دریافت اطلاعات قبلی از
    const storedData = JSON.parse(localStorage.getItem("page2Data"))
    // مقایسه اطلاعات جدید با اطلاعات قبلی
    if (JSON.stringify(page2Data) !== JSON.stringify(storedData)) {
      setPage2Data(page2Data)
      console.log("Page 2 Data Submitted:", page2Data)
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

    navigate("/third-advertisement")
  }

  // Go-PreviousPage
  const navigate = useNavigate()
  const handleClickPreviousPage = () => {
    navigate("/first-advertisement")
  }

  return (
    <div className="svg-advertise-background">
      <div className="bg-white mt-20 mx-4 px-4 lg:px-24 rounded-3xl flex flex-col lg:w-2/3 lg:h-screen lg:m-0 lg:rounded-none">
        {/* Header_Form */}
        <img
          className="mt-14 w-72 h-5 lg:w-[580px] lg:h-6 mx-auto"
          src={Stepper_2}
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
                  htmlFor="transactiontype"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  نوع معامله
                </label>
                <select
                  id="transactiontype"
                  {...register("transactiontype", {
                    // onChange: handleChange("transactiontype"),
                    required: true,
                  })}
                  className={inputClass("transactiontype")}>
                  <option value="" disabled>
                    نوع معامله خود را انتخاب کنید
                  </option>
                  {transactiontypes.map((transactiontype) => (
                    <option
                      className="font-semibold"
                      key={transactiontype.value}>
                      {transactiontype.label}
                    </option>
                  ))}
                </select>
                {errors.transactiontype && (
                  <span className="text-red-500 font-medium m-1">
                    فیلد اجباری است!
                  </span>
                )}
              </div>

              {/* select_2 */}
              <div className="flex flex-col mb-5 lg:mr-4">
                <label
                  htmlFor="propertytype"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  نوع ملک
                </label>
                <select
                  id="propertytype"
                  {...register("propertytype", {
                    // onChange: handleChange("propertytype"),
                    required: true,
                  })}
                  className={inputClass("propertytype")}>
                  <option value="" disabled>
                    نوع ملک خود را انتخاب کنید
                  </option>
                  {propertytypes.map((propertytype) => (
                    <option className="font-semibold" key={propertytype.value}>
                      {propertytype.label}
                    </option>
                  ))}
                </select>
                {errors.propertytype && (
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
                  htmlFor="mortgage"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  رهن
                </label>
                <input
                  id="mortgage"
                  type="text"
                  {...register("mortgage", {
                    required: "فیلد اجباری است!",
                    // validate: (value) =>
                    //   !isNaN(value) || "فقط اعداد مجاز هستند",
                  })}
                  className={inputClass("mortgage")}
                  placeholder="مثلاً ۵۰ میلیون تومان"
                />
                {errors.mortgage && (
                  <span className="text-red-500 font-medium m-1">
                    {errors.mortgage.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col lg:mr-4">
                <label
                  htmlFor="rent"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  اجاره
                </label>
                {/* input_4 */}
                <input
                  id="rent"
                  type="text"
                  {...register("rent", {
                    required: "فیلد اجباری است!",
                    // validate: (value) =>
                    //   !isNaN(value) || "فقط اعداد مجاز هستند",
                  })}
                  className={inputClass("rent")}
                  placeholder="مثلاً ۲ میلیون تومان"
                />
                {errors.rent && (
                  <span className="text-red-500 font-medium m-1">
                    {errors.rent.message}
                  </span>
                )}

                {/* ckeckbox */}
                <div className="mt-1 lg:mt-5 lg:flex lg:justify-start lg:-mr-[310px]">
                  <span className="flex items-center gap-x-1">
                    <input
                      type="checkbox"
                      {...register("Convertible")}
                      className="w-3 h-3 lg:w-4 lg:h-4"
                    />
                    <p className="text-Gr11 font-medium text-sm lg:text-lg">
                      قابل تبدیل
                    </p>
                    <img className="w-3 h-3 lg:w-5 lg:h-5" src={arrow_3} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="mb-16 mt-10 lg:mt-24 flex justify-center">
            <button
              className="btn--primary py-0 text-primary border-primary font-medium w-24 h-8 lg:w-48 lg:h-12"
              onClick={handleClickPreviousPage}>
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

export default SecondAdv
