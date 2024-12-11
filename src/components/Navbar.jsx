import { useState } from "react"
import {
  Button,
  useDisclosure,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react"
import {
  usePage1Store,
  usePage2Store,
  usePage3Store,
} from "../store/useFormStore"

import { useNavigate } from "react-router-dom"
import { IoDocumentTextOutline } from "react-icons/io5"
import { CiUser } from "react-icons/ci"
import { TbBadge } from "react-icons/tb"
import { IoExitOutline } from "react-icons/io5"
import Logo from "../assets/images/Logo.svg"
import hamberMenu from "../assets/images/hamberMenu.svg"
import Login from "./Login/Login"
import toast from "react-hot-toast"
import "./App.css"

function Navbar() {
  const { resetpage1Data } = usePage1Store()
  const { resetpage2Data } = usePage2Store()
  const { resetpage3Data } = usePage3Store()

  const { isOpen, onOpenChange, onOpen } = useDisclosure()
  const [finalUserName, setFinalUserName] = useState(
    localStorage.getItem("userName")
  )
  const [UserName, setUserName] = useState("") //Auxiliary variable for holding the current username
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    setFinalUserName("")
    resetpage1Data()
    resetpage2Data()
    resetpage3Data()
    toast.success("خروج با موفقیت انجام شد", {
      duration: 2000,
      icon: "✔️",
      className: "success-toast",
    })
  }

  const handleAdvertisement = () => {
    if (finalUserName) {
      navigate("/first-advertisement")
    } else
      toast.error("لطفا اول ثبت نام کنید", {
        duration: 2000,
        className: "error-toast",
        icon: "❌",
      })
  }
  return (
    <div>
      <Login
        onOpenChange={onOpenChange}
        isOpen={isOpen}
        userName={UserName}
        setUserName={setUserName}
        setFinalUserName={setFinalUserName}
      />
      <div className="w-svw md:hidden py-3 flex justify-between items-center bg-white">
        <img className="mr-8" src={hamberMenu} />
        <img className="mr-8" src={Logo} />
        <button className="btn--primary btn--hover ml-4">ثبت آگهی</button>
      </div>
      {/* Desktop-Navbar */}
      <div className=" justify-center items-center hidden md:block">
        <div className="flex justify-between min-w-[750px] lg:w-[1000px] xl:w-[1224px] h-[115px] lg:mx-[108px] mt-10 rounded-2xl text-Gr10 bg-Gr2">
          <div className="flex items-center text-xl gap-x-4 lg:gap-x-8">
            <img className="mr-8" src={Logo} />
            <h4 className="md:text-sm lg:text-xl">اجاره</h4>
            <h4 className="md:text-sm lg:text-xl">خرید</h4>
            <h4 className="md:text-sm lg:text-xl">املاک و مستغلات</h4>
            <h4 className="md:text-sm lg:text-xl">مشاورین املاک</h4>
            <h4 className="md:text-sm lg:text-xl">اخبار روز</h4>
          </div>

          <div className="flex items-center gap-x-8 ml-8">
            {finalUserName ? (
              <>
                <Dropdown className="shadow-none mt-9">
                  <DropdownTrigger>
                    <Button
                      variant="light"
                      className="md:text-base lg:text-xl pb-1 hover:cursor-pointer"
                      onPress={onOpen}>
                      {finalUserName}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    variant="faded"
                    aria-label="Dropdown menu with icons">
                    <DropdownItem key="user" startContent={<CiUser />}>
                      پنل کاربر
                    </DropdownItem>
                    <DropdownItem
                      key="copy"
                      startContent={<IoDocumentTextOutline />}>
                      آگهی های من
                    </DropdownItem>
                    <DropdownItem key="Advertising" startContent={<TbBadge />}>
                      نشان ها
                    </DropdownItem>
                    <DropdownItem
                      key="exit"
                      onClick={handleLogout}
                      className="text-primary"
                      startContent={<IoExitOutline />}>
                      خروج
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </>
            ) : (
              <>
                <Button
                  variant="light"
                  className="text-Gr10 font-medium md:text-sm lg:text-xl pb-1 hover:cursor-pointer"
                  onPress={onOpen}>
                  ثبت نام
                </Button>
              </>
            )}
            <button
              className="btn--primary btn--hover"
              onClick={handleAdvertisement}>
              ثبت آگهی
            </button>
          </div>
        </div>
      </div>
      <div className="h-full"></div>
    </div>
  )
}

export default Navbar
