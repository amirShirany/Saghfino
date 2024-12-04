/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { usePage2Store } from "../../store/useFormStore"
import Stepper_2 from "../../assets/images/Advertisement/Stepper_2.svg"
import arrow_3 from "../../assets/images/Advertisement/arrow_3.svg"
import { Select, SelectItem } from "@nextui-org/react"
import "../App.css"

export const transactiontypes = [
  { key: "11", label: "11" },
  { key: "12", label: "12" },
  { key: "13", label: "13" },
  { key: "14", label: "14" },
]

export const propertytypes = [
  { key: "تجاری", label: "تجاری" },
  { key: "مسکونی", label: "مسکونی" },
]

function SecondAdv() {
  const navigate = useNavigate()
  const handleClickPreviousPage = () => {
    navigate("/first-advertisement")
  }

  //use react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()
  //use zustand
  const { page2Data, setPage2Data } = usePage2Store()

  useEffect(() => {
    setValue("transactiontype", page2Data.transactiontype)
    setValue("propertytype", page2Data.propertytype)
    setValue("mortgage", page2Data.mortgage)
    setValue("rent", page2Data.rent)
  }, [setValue, page2Data])

  const onSubmit = (data2) => {
    setPage2Data(data2)
    console.log("Page 2 Data Submitted:", data2)
  }

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target
  //   setPage2Data({ [name]: value })
  // }

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
                <p className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  نوع معامله
                </p>
                <Select
                  name="transactiontype"
                  variant="underlined"
                  placeholder="نوع معامله خود را انتخاب کنید"
                  {...register("transactiontype", { required: true })}
                  className="bg-white input-style pr-4">
                  {transactiontypes.map((transactiontype) => (
                    <SelectItem key={transactiontype.key}>
                      {transactiontype.label}
                    </SelectItem>
                  ))}
                  {errors.transactiontype && <span>فیلد اجباری است!</span>}
                </Select>
              </div>

              {/* select_2 */}
              <div className="flex flex-col mb-5">
                <p className="mb-1 text-Gr11 font-medium text-sm lg:text-lg lg:mr-4">
                  نوع ملک
                </p>
                <Select
                  name="propertytype"
                  variant="underlined"
                  placeholder="نوع ملک خود را انتخاب کنید"
                  {...register("propertytype", { required: true })}
                  className="bg-white input-style pr-4 lg:mr-4">
                  {propertytypes.map((propertytype) => (
                    <SelectItem key={propertytype.key}>
                      {propertytype.label}
                    </SelectItem>
                  ))}
                  {errors.propertytype && <span>فیلد اجباری است!</span>}
                </Select>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="lg:flex lg:justify-center lg:mt-9 ml-3">
              {/* input_3 */}
              <div className="flex flex-col mb-5">
                <p className="mb-1 text-Gr11 font-medium text-sm lg:text-lg">
                  رهن
                </p>
                <input
                  type="text"
                  name="mortgage"
                  {...register("mortgage", { required: true })}
                  className="bg-white input-style pr-4 lg:w-72"
                  placeholder="مثلاً ۵۰ میلیون تومان"
                />
                {errors.mortgage && (
                  <span className="text-red-500">فیلد اجباری است!</span>
                )}
              </div>

              <div className="flex flex-col">
                <p className="mb-1 text-Gr11 font-medium text-sm lg:text-lg lg:mr-4">
                  اجاره
                </p>
                {/* input_4 */}
                <input
                  type="text"
                  name="rent"
                  {...register("rent", { required: true })}
                  className="bg-white input-style pr-4 lg:mr-4"
                  placeholder="مثلاً ۲ میلیون تومان"
                />
                {errors.rent && (
                  <span className="text-red-500">فیلد اجباری است!</span>
                )}

                {/* ckeckbox */}
                <div className="mt-2 lg:mt-2 lg:flex lg:justify-start lg:-mr-[296px]">
                  <span className="flex items-center gap-x-1">
                    <input
                      type="checkbox"
                      className="w-3 h-3 lg:w-4 lg:h-4 rounded-full lg:rounded"
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
              // onClick={handleClickNextPage}
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
