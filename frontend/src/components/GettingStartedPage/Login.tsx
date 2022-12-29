import "./formstyle.css"
function Login() {
  return (
    <>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-light_Gray">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          className="form-input"
        />
      </div>
      {/* password */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="Password" className="text-light_Gray">
          Password
        </label>
        <input
          type="password"
          name="Password"
          placeholder="Enter Your Password"
          className="form-input"
        />
      </div>
    </>
  )
}

export default Login
