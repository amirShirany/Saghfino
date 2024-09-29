import { useState } from "react"
import { CiSearch } from "react-icons/ci"
import { Divider } from "@nextui-org/react"

function HeaderSearchCard() {
  const [selected, setSelected] = useState("option_1")

  const handleToggle = (opttion) => {
    setSelected(opttion)
  }

  return (
    <div className="h-full max-h-[108px] w-full md:w-[750px] max-w-[816px] bg-white rounded-xl mt-[72px]">
      <div className="flex justify-around text-2xl font-medium mt-[14px]">
        <div
          onClick={() => handleToggle("Option_1")}
          className={`transition duration-200 ease-in-out cursor-pointer text-Gr11 ${
            selected === "Option_1" && "font-bold"
          }`}
        >
          اجاره
          {selected === "Option_1" && (
            <div className="h-[2px] bg-primary w-40"></div>
          )}
        </div>

        <div
          onClick={() => handleToggle("Option_2")}
          className={`transition duration-200 ease-in-out cursor-pointer text-Gr11 ${
            selected === "Option_2" && "font-bold"
          }`}
        >
          خرید
          {selected === "Option_2" && (
            <div className="h-[2px] bg-primary w-40"></div>
          )}
        </div>
      </div>

      <div className="my-auto mx-4">
        <Divider className="max-w-[800px] text-Gr11" />
      </div>
      <div className="flex items-center text-Gr11">
        <CiSearch className="mr-4 w-5 h-5" />
        <input
          className="mr-2 mb-3 mt-[10px] border-0 outline-none"
          type="text"
          placeholder="شهر مورد نظر را جستجو کنید"
        />
      </div>
    </div>
  )
}

export default HeaderSearchCard
