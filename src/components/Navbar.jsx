import { useState } from "react"
import {
  Button,
  useDisclosure,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  cn,
} from "@nextui-org/react"
import { IoDocumentTextOutline } from "react-icons/io5"
import { CiUser } from "react-icons/ci"
import { TbBadge } from "react-icons/tb"
import { IoExitOutline } from "react-icons/io5"
import Logo from "../assets/images/Logo.svg"
import hamberMenu from "../assets/images/hamberMenu.svg"
import Login from "./Login/Login"
import "./App.css"

function Navbar() {
  const { isOpen, onOpenChange, onOpen } = useDisclosure()
  const [user, setUser] = useState("ورود")

  return (
    <div>
      <Login
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        isOpen={isOpen}
        setUser={setUser}
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
            {user == "ورود" ? (
              <>
                <Button
                  variant="light"
                  className="md:text-sm lg:text-xl pb-1 hover:cursor-pointer"
                  onPress={onOpen}
                >
                  {user}
                </Button>
              </>
            ) : (
              <>
                <Dropdown className="shadow-none mt-9">
                  <DropdownTrigger>
                    <Button
                      variant="light"
                      className="md:text-sm lg:text-xl pb-1 hover:cursor-pointer"
                      onPress={onOpen}
                    >
                      {user}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    variant="faded"
                    aria-label="Dropdown menu with icons"
                  >
                    <DropdownItem key="new" startContent={<CiUser />}>
                      پنل کاربر
                    </DropdownItem>
                    <DropdownItem
                      key="copy"
                      startContent={<IoDocumentTextOutline />}
                    >
                      آگهی های من
                    </DropdownItem>
                    <DropdownItem key="edit" startContent={<TbBadge />}>
                      نشان ها
                    </DropdownItem>
                    <DropdownItem
                      key="delete"
                      className="text-primary"
                      startContent={<IoExitOutline />}
                    >
                      خروج
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </>
            )}
            <button
              className="btn--primary btn--hover"
              // onClick={}
            >
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
