/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { usePage1Store } from "../../store/useFormStore"
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
  const [isFilled, setIsFilled] = useState({
    city: false,
    region: false,
    mainstreet: false,
    sidestreet: false,
  })

  const navigate = useNavigate()
  const handleClickHomePage = () => {
    navigate("/")
  }
  //use react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()
  //use zustand
  const { page1Data, setPage1Data } = usePage1Store()

  console.log(isFilled, 111)

  useEffect(() => {
    setValue("city", page1Data.city)
    setValue("region", page1Data.region)
    setValue("mainstreet", page1Data.mainstreet)
    setValue("sidestreet", page1Data.sidestreet)

    // Set initial fill state
    setIsFilled({
      city: page1Data.city !== "",
      region: page1Data.region !== "",
      mainstreet: page1Data.mainstreet !== "",
      sidestreet: page1Data.sidestreet !== "",
    })
  }, [setValue, page1Data])

  const handleChange = (field) => (e) => {
    setIsFilled((prev) => ({
      ...prev,
      [field]: e.target.value.trim() !== "",
    }))
  }

  const onSubmit = (data1) => {
    setPage1Data(data1)
    console.log("Page 1 Data Submitted:", data1)
    navigate("/second-advertisement")
  }

  // Load initial values from local storage
  // useEffect(() => {
  //   const savedData = localStorage.getItem("formData")
  //   if (savedData) {
  //     const formData = JSON.parse(savedData)
  //     for (const key in formData) {
  //       setValue(key, formData[key])
  //     }
  //   }
  // }, [setValue])

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
                    onChange: handleChange("city"),
                    required: "فیلد اجباری است!",
                  })}
                  className={`bg-white input-style ${
                    isFilled.city ? "filled-input" : ""
                  }`}>
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
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="region"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg lg:mr-4">
                  منطقه
                </label>
                <select
                  id="region"
                  name="region"
                  placeholder="لطفا منطقه مورد نظر رانتخاب کنید"
                  {...register("region", {
                    onChange: handleChange("region"),
                    required: true,
                  })}
                  className={`bg-white input-style lg:mr-4 ${
                    isFilled.region ? "filled-input" : ""
                  }`}>
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
                  htmlFor="mainstreet"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  خیابان اصلی
                </label>
                <input
                  id="mainstreet"
                  type="text"
                  name="mainstreet"
                  {...register("mainstreet", {
                    onChange: handleChange("mainstreet"),
                    required: true,
                  })}
                  className={`input-style ${
                    isFilled.mainstreet ? "filled-input" : ""
                  }`}
                  placeholder="آدرس خود را وارد کنید"
                />
                {errors.mainstreet && (
                  <span className="text-red-500 font-medium m-1">
                    فیلد اجباری است!
                  </span>
                )}
              </div>

              {/* input_4 */}
              <div className="flex flex-col">
                <label
                  htmlFor="sidestreet"
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg lg:mr-4">
                  خیابان فرعی/کوچه
                </label>
                <input
                  id="sidestreet"
                  type="text"
                  name="sidestreet"
                  {...register("sidestreet", {
                    onChange: handleChange("sidestreet"),
                    required: true,
                  })}
                  className={`input-style lg:mr-4 ${
                    isFilled.sidestreet ? "filled-input" : ""
                  }`}
                  placeholder="جزئیات آدرس را وارد کنید"
                />
                {errors.sidestreet && (
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
