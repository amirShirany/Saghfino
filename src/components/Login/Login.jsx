import Logo from "../../assets/images/Logo.svg"
import CloseCircle from "../../assets/images/CloseCircle.svg"
import "../App.css"

function Login() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center relative">
        <img
          className="absolute left-4 top-4"
          src={CloseCircle}
          alt="CloseCircle"
        />
        <img className="mt-14 w-20" src={Logo} alt="Logo_image" />
        <h1 className="mt-16 text-Gr12">ورود/ثبت نام</h1>
        <p className="text-Gr11 mt-16">
          لطفا برای ورود یا ثبت نام شماره موبایل خود را وارد کنید
        </p>
        <input className="w-80 mt-10 py-1 text-xl border border-bColorInput rounded-lg shadowInput" />

        <div className="flex mt-4 -mr-28">
          <input type="checkbox" />
          <p className="mr-1">با قوانین سقفینو موافق هستم</p>
        </div>

        <button className="btn--primary btn--secondary w-80 mt-16">ورود</button>
      </div>
    </div>
  )
}

export default Login
