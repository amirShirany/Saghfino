/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"
import Logo from "../../assets/images/Logo.svg"
import CloseCircle from "../../assets/images/CloseCircle.svg"
import { Modal, ModalContent, Image, Button } from "@nextui-org/react"
import "../App.css"

function Login({
  isOpen,
  onOpenChange,
  userName,
  setUserName,
  setFinalUserName,
}) {
  const [phone, setPhone] = useState("")
  const [rulesAccepted, setRulesAccepted] = useState(false)
  const [isOtpSent, setIsOtpSent] = useState(false)
  let [time, setTime] = useState(120) // 2 minutes in seconds

  // const [otp, setOtp] = useState("") //to save otp code!

  console.log(isOtpSent, "...")

  useEffect(() => {
    if (time > 0 && isOtpSent) {
      const timerId = setInterval(() => {
        setTime(time - 1)
      }, 1000)
      return () => clearInterval(timerId)
    }
  }, [time, isOtpSent])

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  //handlePhonenumber
  const handlePhonenumber = () => {
    if (!rulesAccepted) {
      toast.error("با قوانین موافقت نشده است!", {
        duration: 4000,
        className: "error-toast",
        icon: "❌",
      })
    } else if (userName === "") {
      toast.error("نام و نام خانوادگی خود را وارد کنید", {
        duration: 4000,
        className: "error-toast",
        icon: "❌",
      })
    } else if (phone === "09137983097") {
      // console.log(`Sending OTP to ${phone}`)
      toast.success("کد تایید برای شما ارسال شد", {
        duration: 4000,
        icon: "✔️",
        className: "success-toast",
      })
      setIsOtpSent(true)
    } else {
      toast.error("لطفا یک شماره تلفن معتبر وارد کنید", {
        duration: 4000,
        className: "error-toast",
        icon: "❌",
      })
    }
  }

  //handleCheckbox
  const handleCheckboxChange = () => {
    setRulesAccepted(!rulesAccepted)
  }

  //handleSetOTP...........................
  const inputs = useRef([])
  const handleChange = (e, index) => {
    const value = e.target.value

    // Move to the next input if a value is entered
    if (value && index < inputs.current.length + 1) {
      inputs.current[index - 1].focus()
    }

    // Move to the previous input if backspace is pressed and the field is empty
    if (value === "" && index < 4) {
      inputs.current[index + 1].focus()
    }
  }

  const handleFocus = (index) => {
    // Automatically select the text when focusing on the box
    inputs.current[index].select()
  }

  const handleSubmitOtp = () => {
    const otp = inputs.current.map((input) => input.value).join("")
    // Example OTP
    if (otp === "54321") {
      toast.success("ورود با موفقیت انجام شد!", {
        duration: 4000,
        icon: "✔️",
        className: "success-toast",
      })
      localStorage.setItem("userName", userName)
      setFinalUserName(userName)
      setTime(0)
    } else {
      toast.error("کد نامعتبر است. لطفادوباره تلاش کنید!", {
        duration: 4000,
        className: "error-toast",
        icon: "❌",
      })
      setTime(0)
    }
    // Add additional submission logic here...
  }

  //handleEditPhonenumber
  const handleEditPhonenumber = () => {
    setIsOtpSent(!isOtpSent)
    setTime(120)
  }

  //handleUsername for holding the current username
  const handleUsername = (event) => {
    setUserName(event.target.value)
  }

  return (
    <div>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="h-screen md:h-[500px] relative">
        <ModalContent>
          {(onClose) => (
            <>
              <Image
                className="absolute left-4 top-4 cursor-pointer"
                src={CloseCircle}
                alt="CloseCircle"
                onPress={onClose}
              />
              <div className="flex flex-col justify-center items-center ">
                <img
                  className="mt-14 md:mt-4 w-20"
                  src={Logo}
                  alt="Logo_image"
                />

                {!isOtpSent && (
                  <>
                    <h1 className="mt-16 md:mt-4 md:text-2xl text-Gr12">
                      ورود/ثبت نام
                    </h1>
                    <p className="text-Gr11 mt-16">
                      لطفا برای ورود یا ثبت نام شماره موبایل خود را وارد کنید
                    </p>
                    <input
                      type="text"
                      placeholder="نام و نام خانوادگی"
                      value={userName}
                      onChange={handleUsername}
                      className="w-80 mt-10 py-1 text-xl border border-bColorInput rounded-lg shadowInput text-center"
                    />
                    <input
                      type="text"
                      placeholder="---------09"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-80 mt-10 py-1 text-xl border border-bColorInput rounded-lg shadowInput text-center"
                    />

                    <div className="flex mt-4 -mr-28">
                      <input
                        type="checkbox"
                        checked={rulesAccepted} // The checkbox is controlled
                        onChange={handleCheckboxChange}
                        className="border border-Gr7 rounded-full w-4"
                      />
                      <p className="mr-1">
                        با{" "}
                        <Link
                          href="https://www.google.com/"
                          target="_blank"
                          className="text-primary hover:underline">
                          قوانین سقفینو
                        </Link>{" "}
                        موافق هستم
                      </p>
                    </div>
                    <button
                      onClick={handlePhonenumber}
                      className="btn--primary btn--secondary py-0 w-80 mt-16 md:mb-6">
                      ورود
                    </button>
                  </>
                )}

                {/* If the otp was valid */}
                {isOtpSent && (
                  <>
                    <h1 className="mt-16 md:mt-4 md:text-2xl text-Gr12">
                      کدتایید
                    </h1>
                    <p className="text-Gr11 mt-16">
                      کد ارسال‌شده به شماره 09137983097 را وارد کنید
                    </p>
                    <p
                      onClick={handleEditPhonenumber}
                      className="text-Gr9 mb-8 cursor-pointer">
                      ویرایش شماره موبایل
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                      {[...Array(5)].map((_, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength="1"
                          ref={(el) => (inputs.current[index] = el)} // Store reference to each input
                          onChange={(e) => handleChange(e, index)}
                          onFocus={() => handleFocus(index)}
                          style={{
                            width: "50px",
                            height: "50px",
                            textAlign: "center",
                            fontSize: "24px",
                            margin: "0 5px",
                            borderRadius: "5px",
                            border: "2px solid #ccc",
                            outline: "none",
                            transition: "border-color 0.3s",
                          }}
                          onBlur={(e) => {
                            if (e.target.value === "") {
                              e.target.style.border = "2px solid red" // Indicate empty field
                            } else {
                              e.target.style.border = "2px solid #ccc" // Reset border
                            }
                          }}
                        />
                      ))}
                    </div>

                    <div className="flex items-center mt-4">
                      <p className="text-primary mx-[2px]">
                        {time > 0
                          ? formatTime(time)
                          : setIsOtpSent(!isOtpSent) &
                            setPhone("") &
                            setTime(120)}
                      </p>
                      <p>تا دریافت مجدد کد</p>
                    </div>

                    <Button
                      className="bg-primary text-white w-80 mt-20 md:mt-28"
                      onClick={handleSubmitOtp}
                      onPress={onClose}>
                      تایید
                    </Button>
                  </>
                )}
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Login
