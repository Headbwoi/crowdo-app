import { FormEvent, useContext } from "react"
import "./formstyle.css"
import { UserContext } from "../../context"

type SIGNUP = {
  loginState: boolean
  handleSignup: (e: FormEvent) => void
}

function Signup({ loginState, handleSignup }: SIGNUP) {
  const { signUpValues, handleSignUpValues, errors } = useContext(UserContext)
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSignup}>
      {/* first name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="firstname" className="text-light_Gray">
          First Name
        </label>
        <input
          type="text"
          name="firstname"
          placeholder="Enter Your First Name"
          className={`form-input ${
            errors?.firstname ? "border-error" : "border-lightGrayishViolet"
          }`}
          value={signUpValues?.firstname}
          onChange={handleSignUpValues}
        />
        {/* {errors.firstname && <p className="error-val">{errors.firstname}</p>} */}
      </div>
      {/* last name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="lastname" className="text-light_Gray">
          Last Name
        </label>
        <input
          type="text"
          name="lastname"
          placeholder="Enter Your Last Name"
          className="form-input"
          value={signUpValues?.lastname}
          onChange={handleSignUpValues}
        />
      </div>
      {/* email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-light_Gray">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          className="form-input"
          value={signUpValues?.email}
          onChange={handleSignUpValues}
        />
      </div>
      {/* password */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="Password" className="text-light_Gray">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          className="form-input"
          value={signUpValues?.password}
          onChange={handleSignUpValues}
        />
      </div>
      {/* confirm password */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cPassword" className="text-light_Gray">
          Confirm Password
        </label>
        <input
          type="password"
          name="cpassword"
          placeholder="Re-enter your Password"
          className="form-input"
          value={signUpValues?.cpassword}
          onChange={handleSignUpValues}
        />
      </div>

      <button className="btn bg-dark_green">
        {loginState ? "Sign Up" : "Login"}
      </button>
    </form>
  )
}

export default Signup
