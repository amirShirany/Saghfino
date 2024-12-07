/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { usePage3Store } from "../../store/useFormStore"
import toast from "react-hot-toast"
import Stepper_3 from "../../assets/images/Advertisement/Stepper_3.svg"
import "../App.css"

function ThirdAdv() {
  const [isFilled, setIsFilled] = useState({
    area: false,
    room: false,
    floor: false,
    numfloors: false,
  })

  // Go-PreviousPage
  const navigate = useNavigate()
  const handleClickPreviousPage = () => {
    navigate("/second-advertisement")
  }

  //use react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  //use zustand
  const { page3Data, setPage3Data } = usePage3Store()

  useEffect(() => {
    setValue("area", page3Data.area)
    setValue("room", page3Data.room)
    setValue("floor", page3Data.floor)
    setValue("numfloors", page3Data.numfloors)
    // Set initial fill state for Input-border
    setIsFilled({
      area: page3Data.area !== "",
      room: page3Data.room !== "",
      floor: page3Data.floor !== "",
      numfloors: page3Data.numfloors !== "",
    })
  }, [setValue, page3Data])

  const handleChange = (field) => (e) => {
    setIsFilled((prev) => ({
      ...prev,
      [field]: e.target.value.trim() !== "",
    }))
  }

  //Submit-Form
  const onSubmit = (page3Data) => {
    // localStorage دریافت اطلاعات قبلی از
    const storedData = JSON.parse(localStorage.getItem("page3Data"))
    // مقایسه اطلاعات جدید با اطلاعات قبلی
    if (JSON.stringify(page3Data) !== JSON.stringify(storedData)) {
      setPage3Data(page3Data)
      console.log("Page 3 Data Submitted:", page3Data)
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

    console.log(isFilled, "border-style-filled")
    // navigate("/second-advertisement")
  }

  return (
    <div className="svg-advertise-background">
      <div className="bg-white mt-20 mx-4 px-4 lg:px-24 rounded-3xl flex flex-col lg:w-2/3 lg:h-screen lg:m-0 lg:rounded-none">
        {/* Header_Form */}
        <img
          className="mt-14 w-72 h-5 lg:w-[580px] lg:h-6 mx-auto"
          src={Stepper_3}
        />

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="mt-10 mb-6 lg:mt-16 lg:mb-10 text-Gr11 font-medium text-center text-sm lg:text-2xl lg:text-right lg:mr-28">
            لطفا موارد زیر را تکمیل کنید
          </p>
          <div className="flex justify-center">
            <div className="lg:flex lg:justify-center lg:mt-9 ml-3">
              {/* input_1 */}
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="area"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  متراژ(متر مربع)
                </label>
                <input
                  id="area"
                  type="text"
                  name="area"
                  {...register("area", {
                    onChange: handleChange("area"),
                    required: true,
                  })}
                  className={`input-style ${
                    isFilled.area ? "filled-input" : ""
                  }`}
                  placeholder="مساحت ملک خود را وارد کنید"
                />
                {errors.area && (
                  <span className="text-red-500 font-medium m-1">
                    فیلد اجباری است!
                  </span>
                )}
              </div>

              {/* input_2 */}
              <div className="flex flex-col">
                <label
                  htmlFor="room"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg lg:mr-4">
                  اتاق
                </label>
                <input
                  id="room"
                  type="text"
                  name="room"
                  {...register("room", {
                    onChange: handleChange("room"),
                    required: true,
                  })}
                  className={`input-style lg:mr-4 ${
                    isFilled.area ? "filled-input" : ""
                  }`}
                  placeholder="تعداد اتاق‌ها را بنویسید"
                />
                {errors.room && (
                  <span className="text-red-500 font-medium m-1 lg:mr-4">
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
                  htmlFor="floor"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  طبقه
                </label>
                <input
                  id="floor"
                  type="text"
                  name="floor"
                  {...register("floor", {
                    onChange: handleChange("floor"),
                    required: true,
                  })}
                  className={`input-style ${
                    isFilled.floor ? "filled-input" : ""
                  }`}
                  placeholder="طبقه ملک خود را بنویسید"
                />
                {errors.floor && (
                  <span className="text-red-500 font-medium m-1">
                    فیلد اجباری است!
                  </span>
                )}
              </div>

              {/* input_4 */}
              <div className="flex flex-col">
                <label
                  htmlFor="numfloors"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg lg:mr-4">
                  تعداد طبقات
                </label>
                <input
                  id="numfloors"
                  type="text"
                  name="numfloors"
                  {...register("numfloors", {
                    onChange: handleChange("numfloors"),
                    required: true,
                  })}
                  className={`input-style lg:mr-4 ${
                    isFilled.numfloors ? "filled-input" : ""
                  }`}
                  placeholder="تعداد طبقات ملک خود را بنویسید"
                />
                {errors.numfloors && (
                  <span className="text-red-500 font-medium m-1 lg:mr-4">
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

export default ThirdAdv
