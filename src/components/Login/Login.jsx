import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/images/Logo.svg"
import CloseCircle from "../../assets/images/CloseCircle.svg"
import Dialog from "@mui/material/Dialog"
import "../App.css"

function Login({ setOpen, open }) {
  const [phone, setPhone] = useState("")
  const [rulesAccepted, setRulesAccepted] = useState(false)
  const [isOtpSent, setIsOtpSent] = useState(false)
  let [time, setTime] = useState(120) // 2 minutes in seconds
  // const [otp, setOtp] = useState("")
  // console.log(isOtpSent, "...")

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

  //handleEditPhonenumber
  const handleEditPhonenumber = () => {
    setIsOtpSent(!isOtpSent)
    setTime(120)
  }

  return (
    <div className="">
      <Dialog open={open} setOpen={setOpen}>
        <div className="flex justify-center items-center relative w-screen lg:w-[600px] lg:h-[400px]">
          <div className="flex justify-center items-center ">
            <div className="flex flex-col justify-center items-center ">
              <img
                className="absolute left-4 top-4 cursor-pointer"
                onClick={() => setOpen(false)}
                src={CloseCircle}
                alt="CloseCircle"
              />
              <img className="mt-14 w-20" src={Logo} alt="Logo_image" />
              {!isOtpSent && (
                <>
                  <h1 className="mt-16 md:text-2xl text-Gr12">ورود/ثبت نام</h1>
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
                    onClick={handlePhonenumber}
                    className="btn--primary btn--secondary w-80 mt-16"
                  >
                    ورود
                  </button>
                </>
              )}

              {/* If the otp was valid */}
              {isOtpSent && (
                <>
                  <h1 className="mt-16 md:text-2xl text-Gr12">کدتایید</h1>
                  <p className="text-Gr11 mt-16">
                    کد ارسال‌شده به شماره 09137983097 را وارد کنید
                  </p>
                  <p
                    onClick={handleEditPhonenumber}
                    className="text-Gr9 mb-8 cursor-pointer"
                  >
                    ویرایش شماره موبایل
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
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
                        onFocus={(e) =>
                          (e.target.style.border = "2px solid #66afe9")
                        } // Change border on focus
                      />
                    ))}
                  </div>

                  <div className="flex items-center mt-4">
                    <p className="text-primary mx-[2px]">
                      {time > 0
                        ? formatTime(time)
                        : setIsOtpSent(!isOtpSent) && time === 15}
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
        </div>
      </Dialog>
    </div>
  )
}

export default Login

// import React, {useEffect, useState} from 'react'
// const Timer = ({isCodeSent, setOpen, setIsCodeSent}) => {
//  const [timer, setTimer] = useState(10); // 60 seconds timer
// console.log("in Timer")
//  useEffect(() => {
//  let interval = null;
//  if (isCodeSent && timer > 0) {
//  interval = setInterval(() => {
//  setTimer(prevTimer => prevTimer - 1);
//  }, 1000);
//  } else if (timer === 0) {
//  clearInterval(interval);
//  // setIsCodeSent(false); // Reset code sent status if timer expires
//  setOpen(false)
//  setIsCodeSent(false)
//  }
//  return () => clearInterval(interval);
//  }, [isCodeSent, timer]);

//  return (
//  <p>Time remaining: {timer} seconds</p>

//  )
// }
// export default Timer

// import React, {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import {Dialog} from "@mui/material";
// import Timer from "./Timer";

// const ConfirmDialog = ({open, setOpen, isCodeSent , setIsCodeSent}) => {
//  const [code, setCode] = useState('');

//  console.log("in Confirm")

//  const handleCodeChange = (e) =>{
//  setCode(e.target.value)
//  }

//  return (
//  <Dialog open={open} onClose={() => setOpen(false)}>
//  <div>
//  {/*code*/}
//  <h2>Enter your code </h2>
//  <input
//  type="text"
//  value={code}
//  onChange={(e) => handleCodeChange(e.target.value)}
//  placeholder="code"
//  />
//  <Timer isCodeSent={isCodeSent} setOpen={setOpen} setIsCodeSent={setIsCodeSent}/>

//  <button>فرستادن کد</button>

//  </div>
//  </Dialog>

//  )

// }
// export default ConfirmDialog

// import ReactDOM from 'react-dom';
// import {Dialog} from "@mui/material";
// import ConfirmDialog from "./testsgima/ConfirmDialog";

// const Phone = () => {
//  const [phone, setPhone] = useState('')
//  const [openDialog, setOpenDialog] = useState(false)
//  const [isCodeSent, setIsCodeSent] = useState(false)
//  const handlePhoneChange = (e) => {
//  setPhone(e.target.value)
//  }
//  const handlePhoneSubmit = () => {
//  setOpenDialog(true)
//  setIsCodeSent(true)
//  }
//  console.log("in pHones")
//  return (
//  <>
//  {openDialog && <ConfirmDialog open={openDialog} setOpen={setOpenDialog} isCodeSent={isCodeSent} setIsCodeSent={setIsCodeSent}/>}
//  <p>شماره تلفن</p>
//  <input onChange={handlePhoneChange}/>
//  <button onClick={handlePhoneSubmit}> تایید</button>
//  </>

//  )

// }
// export default Phone
