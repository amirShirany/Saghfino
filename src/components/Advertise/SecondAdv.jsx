import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { usePage2Store } from "../../store/useFormStore"
import toast from "react-hot-toast"
import Stepper_2 from "../../assets/images/Advertisement/Stepper_2.svg"
import arrow_3 from "../../assets/images/Advertisement/arrow_3.svg"
import "../App.css"

export const TRANSACTIONTYPES = [
  { value: "رهن و اجاره", label: "رهن و اجاره" },
  { value: "خرید", label: "خرید" },
]
export const PROPERTYTYPES = [
  { value: "تجاری", label: "تجاری" },
  { value: "مسکونی", label: "مسکونی" },
]

const REQUIRED = "فیلد اجباری است!"
const INPUT_BASE = "bg-white input-style"

function SecondAdv() {
  const navigate = useNavigate()
  const { page2Data, setPage2Data } = usePage2Store()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: page2Data })

  const watchedValues = watch()
  const inputClass = (field) =>
    `${INPUT_BASE} ${watchedValues[field] ? "border border-Gr11" : "border border-Gr7"}`

  const onSubmit = (data) => {
    const storedData = JSON.parse(localStorage.getItem("page2Data") ?? "null")
    const hasChanged = JSON.stringify(data) !== JSON.stringify(storedData)

    if (hasChanged) {
      setPage2Data(data)
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

    navigate("/third-advertisement")
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
                    required: REQUIRED,
                  })}
                  className={inputClass("transactiontype")}>
                  <option value="" disabled>
                    نوع معامله خود را انتخاب کنید
                  </option>
                  {TRANSACTIONTYPES.map(({ value, label }) => (
                    <option key={value} value={value} className="font-semibold">
                      {label}
                    </option>
                  ))}
                </select>
                {errors.transactiontype && (
                  <span>{errors.transactiontype.message}</span>
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
                    required: REQUIRED,
                  })}
                  className={inputClass("propertytype")}>
                  <option value="" disabled>
                    نوع ملک خود را انتخاب کنید
                  </option>
                  {PROPERTYTYPES.map(({ value, label }) => (
                    <option className="font-semibold" key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                {errors.propertytype && (
                  <span>{errors.propertytype.message}</span>
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
                    required: REQUIRED,
                    // validate: (value) =>
                    // !isNaN(value) || "فقط اعداد مجاز هستند",
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
                    required: REQUIRED,
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

          {/* Buttons */}
          <div className="mb-16 mt-10 lg:mt-24 flex justify-center">
            <button
              type="button"
              className="btn--primary py-0 text-primary border-primary font-medium w-24 h-8 lg:w-48 lg:h-12"
              onClick={() => navigate("/first-advertisement")}>
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
