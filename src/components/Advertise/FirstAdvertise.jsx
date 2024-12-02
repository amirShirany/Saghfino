import { useEffect } from "react"
import { useForm } from "react-hook-form"
import Stepper_1 from "../../assets/images/Advertisement/Stepper_1.svg"
import "../App.css"

function FirstAdvertise() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    // Save data to local storage
    localStorage.setItem("formData", JSON.stringify(data))
  }

  // Load initial values from local storage
  useEffect(() => {
    const savedData = localStorage.getItem("formData")
    if (savedData) {
      const formData = JSON.parse(savedData)
      for (const key in formData) {
        setValue(key, formData[key])
      }
    }
  }, [setValue])

  return (
    <div className="svg-advertise-background">
      <div className="bg-white mt-20 mx-4 px-4 lg:px-24 rounded-3xl flex flex-col lg:w-2/3 lg:h-screen lg:m-0 lg:rounded-none">
        {/* Header_Form */}
        <img className="mt-14 w-72 md:w-[580px] mx-auto" src={Stepper_1} />

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="mt-10 mb-6 lg:mt-16 lg:mb-10 text-Gr11 font-medium text-center text-sm lg:text-2xl lg:text-right lg:mr-28">
            لطفا موارد زیر را تکمیل کنید
          </p>
          <div className="flex justify-center">
            <div className="lg:flex lg:justify-center ml-3">
              <div className="flex flex-col mb-5">
                {/* select_1 */}
                <p className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  شهر
                </p>
                <select
                  id="option1"
                  placeholder="لطفا شهر مورد نظر رانتخاب کنید"
                  className="bg-white input-style pr-4"
                  {...register("option1", { required: true })}>
                  <option value="option1Value1">اصفهان</option>
                  <option value="option1Value2">تهران</option>
                  <option value="option1Value2">مشهد</option>
                  <option value="option1Value2">شیراز</option>
                </select>
                {errors.option1 && <span>This field is required</span>}
              </div>

              <div className="flex flex-col mb-5">
                {/* select_2 */}
                <p
                  className="mb-1 text-Gr11 font-medium text-sm lg:text-lg lg:mr-4"
                  htmlFor="option2">
                  منطقه
                </p>
                <select
                  className="bg-white input-style py-2 pr-4 lg:mr-4"
                  id="option2"
                  {...register("option2", { required: true })}>
                  <option value="option1Value1">منطقه 1</option>
                  <option value="option1Value2">منطقه 2</option>
                  <option value="option1Value2">منطقه 3</option>
                  <option value="option1Value2">منطقه 4</option>
                </select>
                {errors.option2 && <span>This field is required</span>}
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
                  className="bg-white input-style pr-4 lg:w-72"
                  placeholder="آدرس خود را وارد کنید"
                  id="input1"
                  type="text"
                  {...register("input1", { required: true })}
                />
                {errors.input1 && (
                  <span className="text-red-500">فیلد اجباری است!</span>
                )}
              </div>

              {/* input_4 */}
              <div className="flex flex-col">
                <p className="mb-1 text-Gr11 font-medium text-sm lg:text-lg lg:mr-4">
                  خیابان فرعی/کوچه
                </p>
                <input
                  className="bg-white input-style pr-4 lg:mr-4"
                  placeholder="جزئیات آدرس را وارد کنید"
                  id="input2"
                  type="text"
                  {...register("input2", { required: true })}
                />
                {errors.input2 && (
                  <span className="text-red-500">فیلد اجباری است!</span>
                )}
              </div>
            </div>
          </div>
          {/* buttons */}
          <div className="mb-16 mt-10 lg:mt-24 flex justify-center">
            <button className="btn--primary py-0 text-primary border-primary font-medium w-24 h-8 lg:w-48 lg:h-12">
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

export default FirstAdvertise
