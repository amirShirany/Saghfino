import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { IoIosTimer } from "react-icons/io"
import Logo from "../../assets/images/Logo.svg"
import CloseCircle from "../../assets/images/CloseCircle.svg"

function Login() {
  const [phone, setPhone] = useState("")
  const [rulesAccepted, setRulesAccepted] = useState(false)
  const [isOtpSent, setIsOtpSent] = useState(false)
  const [otp, setOtp] = useState("")
  const [timeLeft, setTimeLeft] = useState(15) // 2 minutes in seconds

  console.log(isOtpSent, "...")

  useEffect(() => {
    // Exit early if we reach 0
    if (timeLeft === 0) {
      return
    }
    // Set up the interval to update the timer every second

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    // Clear the interval on component unmount
    return () => clearInterval(intervalId)
  }, [timeLeft])

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`
  }

  //handlePhonenumber
  const handleSendOtp = () => {
    if (!rulesAccepted) {
      alert("با قوانین موافقت نشده است")
    } else if (phone === "09137983097" && rulesAccepted) {
      // console.log(`Sending OTP to ${phone}`)
      setIsOtpSent(true)
    } else {
      alert("لطفا یک شماره تلفن معتبر وارد کنید")
    }
  }

  //handleCheckbox
  const handleCheckboxChange = () => {
    setRulesAccepted(!rulesAccepted)
    console.log(rulesAccepted, "ddd")
  }

  //handleSetOTP...........................
  const inputs = useRef([])
  const handleChange = (e, index) => {
    const value = e.target.value

    // Move to the next input if a value is entered
    if (value && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus()
    }

    // Move to the previous input if backspace is pressed and the field is empty
    if (value === "" && index > 0) {
      inputs.current[index - 1].focus()
    }
  }

  const handleFocus = (index) => {
    // Automatically select the text when focusing on the box
    inputs.current[index].select()
  }

  const handleSubmitOtp = () => {
    const otp = inputs.current.map((input) => input.value).join("")
    if (otp === "12345") {
      // Example OTP
      alert(`OTP ارسال شد: ${otp}`)
    } else {
      alert("کد نامعتبر است، لطفاً دوباره امتحان")
    }
    // Add additional submission logic here...
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center relative">
        <img
          className="absolute left-4 top-4"
          src={CloseCircle}
          alt="CloseCircle"
        />
        <img className="mt-14 w-20" src={Logo} alt="Logo_image" />

        {!isOtpSent && (
          <>
            <h1 className="mt-16 text-Gr12">ورود/ثبت نام</h1>
            <p className="text-Gr11 mt-16">
              لطفا برای ورود یا ثبت نام شماره موبایل خود را وارد کنید
            </p>
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
                  className="text-primary hover:underline"
                >
                  قوانین سقفینو
                </Link>{" "}
                موافق هستم
              </p>
            </div>
            <button
              onClick={handleSendOtp}
              className="btn--primary btn--secondary w-80 mt-16"
            >
              ورود
            </button>
          </>
        )}

        {/* If the otp was valid */}
        {isOtpSent && (
          <>
            <h1 className="mt-16 text-Gr12">کدتایید</h1>
            <p className="text-Gr11 mt-16">
              کد ارسال‌شده به شماره 09137983097 را وارد کنید
            </p>
            <p
              onClick={() => setIsOtpSent(!isOtpSent)}
              className="text-Gr9 mb-8 cursor-pointer"
            >
              ویرایش شماره موبایل
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                  onFocus={(e) => (e.target.style.border = "2px solid #66afe9")} // Change border on focus
                />
              ))}
            </div>

            <div className="flex items-center mt-4">
              <IoIosTimer />
              <p className="text-primary mx-[2px]">
                {timeLeft > 0
                  ? formatTime(timeLeft)
                  : setIsOtpSent(!isOtpSent) && timeLeft === 15}
              </p>
              <p>تا دریافت مجدد کد</p>
            </div>

            <button
              onClick={handleSubmitOtp}
              className="btn--primary btn--secondary w-80 mt-16"
            >
              تایید
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Login
