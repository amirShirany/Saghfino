import { useState, useRef } from "react"
import { CiSearch } from "react-icons/ci"

function HeaderSearchCard() {
  const [selected, setSelected] = useState("option_1")
  const inputRef = useRef()

  const InputWithIcon = () => {
    inputRef.current.focus()
  }

  const handleToggle = (opttion) => {
    setSelected(opttion)
  }

  return (
    <div className="min-w-80 lg:w-[816px] bg-white rounded-xl mt-[72px]">
      <div className="flex justify-center text-2xl font-medium mt-[14px]">
        {/* selection 1 */}
        <div className="flex flex-col items-center w-36 lg:w-96">
          <h1
            onClick={() => handleToggle("Option_1")}
            className={`cursor-pointer mb-1 text-Gr11 font-medium text-sm lg:text-2xl ${
              selected === "Option_1" && "font-extrabold"
            }`}>
            اجاره
          </h1>
          <span
            className={`h-[2px] w-full ${
              selected === "Option_1"
                ? "bg-primary transition ease-linear"
                : "bg-Gr5"
            }`}></span>
        </div>

        {/* selection 2*/}
        <div className="flex flex-col items-center w-36 lg:w-96">
          <h1
            onClick={() => handleToggle("Option_2")}
            className={`cursor-pointer mb-1 text-Gr11 font-medium text-sm lg:text-2xl ${
              selected === "Option_2" && "font-extrabold"
            }`}>
            خرید
          </h1>
          <span
            className={`h-[2px] w-full ${
              selected === "Option_2"
                ? "bg-primary transition ease-linear"
                : "bg-Gr5"
            }`}></span>
        </div>
      </div>

      <div className="flex items-center font-semibold my-2 lg:my-3">
        <CiSearch
          onClick={InputWithIcon}
          className="cursor-pointer mr-4 w-5 h-5 lg:w-6 lg:h-6 text-Gr10"
        />
        <input
          ref={inputRef}
          className="w-full pr-2 outline-none lg:text-lg text-Gr10 placeholder-Gr10"
          type="text"
          placeholder="شهر مورد نظر را جستجو کنید"
        />
      </div>
    </div>
  )
}

export default HeaderSearchCard
