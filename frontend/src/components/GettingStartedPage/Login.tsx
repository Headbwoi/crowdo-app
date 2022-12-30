import { useContext } from "react"
import "./formstyle.css"
import { UserContext } from "../../context"
function Login() {
  const { formValues, handleChange } = useContext(UserContext)

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
          value={formValues.email}
          onChange={handleChange}
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
          value={formValues.password}
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default Login
