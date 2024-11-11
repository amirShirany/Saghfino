import { useEffect } from "react"
import { useForm } from "react-hook-form"
import Stepper_1 from "../../assets/images/Advertisement/Stepper_1.svg"
import "../App.css"

function Advertise() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data) // Save data to local storage
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
    <div className="svg-advertise-background lg:w-full">
      <div className="bg-white mt-20 mx-4 px-4 rounded-3xl flex flex-col justify-center max-w-[800px] lg:h-screen lg:m-0 lg:rounded-none">
        <img className="mt-14 max-h-10" src={Stepper_1} />
        <h1 className="mt-10 text-Gr11 text-sm text-center">
          لطفا موارد زیر را تکمیل کنید
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:flex lg:justify-center">
            {/* select_1 */}
            <div className="flex flex-col mb-5">
              <h2 className="mb-1 text-Gr11 text-sm">شهر</h2>
              <select
                id="option1"
                placeholder="لطفا شهر مورد نظر رانتخاب کنید"
                className="bg-white rounded border-Gr11 border py-2 pr-4 lg:w-72"
                {...register("option1", { required: true })}
              >
                <option value="option1Value1">اصفهان</option>
                <option value="option1Value2">تهران</option>
                <option value="option1Value2">مشهد</option>
                <option value="option1Value2">شیراز</option>
              </select>
              {errors.option1 && <span>This field is required</span>}
            </div>

            {/* select_2 */}
            <div className="flex flex-col mb-5">
              <h2 className="mb-1 text-Gr11 text-sm lg:mr-4" htmlFor="option2">
                منطقه
              </h2>
              <select
                className="bg-white rounded border-Gr11 border py-2 pr-4 lg:w-72 lg:mr-4"
                id="option2"
                {...register("option2", { required: true })}
              >
                <option value="option1Value1">منطقه 1</option>
                <option value="option1Value2">منطقه 2</option>
                <option value="option1Value2">منطقه 3</option>
                <option value="option1Value2">منطقه 4</option>
              </select>
              {errors.option2 && <span>This field is required</span>}
            </div>
          </div>

          <div className="lg:flex lg:justify-center ml-3">
            {/* input_3 */}
            <div className="flex flex-col mb-5">
              <h2 className="mb-1 text-Gr11 text-sm lg:mr-4">خیابان اصلی</h2>
              <input
                className="bg-white rounded border-Gr11 border py-2 pr-4 lg:w-72 lg:mr-4"
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
              <h2 className="mb-1 text-Gr11 text-sm lg:mr-4">خیابان فرعی/کوچه</h2>
              <input
                className="bg-white rounded border-Gr11 border py-2 pr-4 lg:w-72 lg:mr-4"
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

          {/* buttons */}
          <div className="flex justify-center mb-16 mt-10">
            <button className="btn--primary px-8 text-primary border-primary">
              قبلی
            </button>
            <button
              className="btn--primary btn--secondary px-8 mr-4"
              type="submit"
            >
              ادامه
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Advertise
