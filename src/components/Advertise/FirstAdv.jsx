/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { usePage1Store } from "../../store/useFormStore"
import Stepper_1 from "../../assets/images/Advertisement/Stepper_1.svg"
import { Select, SelectItem } from "@nextui-org/react"
import "../App.css"

export const citys = [
  { key: "اصفهان", label: "اصفهان" },
  { key: "تهران", label: "تهران" },
  { key: "مشهد", label: "مشهد" },
  { key: "شیراز", label: "شیراز" },
]

export const regions = [
  { key: "منطقه 1", label: "منطقه 1" },
  { key: "منطقه 2", label: "منطقه 2" },
  { key: "منطقه 3", label: "منطقه 3" },
  { key: "منطقه 4", label: "منطقه 4" },
]

function FirstAdv() {
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

  useEffect(() => {
    setValue("city", page1Data.city)
    setValue("region", page1Data.region)
    setValue("mainstreet", page1Data.mainstreet)
    setValue("sidestreet", page1Data.sidestreet)
  }, [setValue, page1Data])

  const onSubmit = (data1) => {
    setPage1Data(data1)
    console.log("Page 1 Data Submitted:", data1)
    navigate("/second-advertisement")
  }

  // localStorage.setItem("formData", JSON.stringify(data))
  // const onSubmit = (data) => {
  // Save data to local storage
  // }

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
                <p className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  شهر
                </p>
                <Select
                  name="city"
                  variant="underlined"
                  placeholder="لطفا شهر مورد نظر رانتخاب کنید"
                  {...register("city", { required: true })}
                  className="bg-white input-style pr-4">
                  {citys.map((city) => (
                    <SelectItem key={city.key}>{city.label}</SelectItem>
                  ))}
                  {errors.city && <span>فیلد اجباری است!</span>}
                </Select>
              </div>

              {/* select_2 */}
              <div className="flex flex-col mb-5">
                <p className="mb-1 text-Gr11 font-medium text-sm lg:text-lg lg:mr-4">
                  منطقه
                </p>
                <Select
                  name="region"
                  variant="underlined"
                  placeholder="لطفا منطقه مورد نظر رانتخاب کنید"
                  {...register("region", { required: true })}
                  className="bg-white input-style pr-4 lg:mr-4">
                  {regions.map((region) => (
                    <SelectItem key={region.key}>{region.label}</SelectItem>
                  ))}
                  {errors.region && <span>فیلد اجباری است!</span>}
                </Select>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="lg:flex lg:justify-center lg:mt-9 ml-3">
              {/* input_3 */}
              <div className="flex flex-col mb-5">
                <p className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  خیابان اصلی
                </p>
                <input
                  type="text"
                  name="mainstreet"
                  {...register("mainstreet", { required: true })}
                  className="bg-white input-style pr-4"
                  placeholder="آدرس خود را وارد کنید"
                />
                {errors.mainstreet && (
                  <span className="text-red-500">فیلد اجباری است!</span>
                )}
              </div>

              {/* input_4 */}
              <div className="flex flex-col">
                <p className="mb-1 text-Gr11 font-medium text-sm lg:text-lg lg:mr-4">
                  خیابان فرعی/کوچه
                </p>
                <input
                  type="text"
                  name="sidestreet"
                  {...register("sidestreet", { required: true })}
                  className="bg-white input-style pr-4 lg:mr-4"
                  placeholder="جزئیات آدرس را وارد کنید"
                />
                {errors.sidestreet && (
                  <span className="text-red-500">فیلد اجباری است!</span>
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
