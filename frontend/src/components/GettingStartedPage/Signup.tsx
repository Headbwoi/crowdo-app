import { FormEvent, useContext } from "react"
import "./formstyle.css"
import { UserContext } from "../../context"

type SIGNUP = {
  loginState: boolean
  handleSignup: (e: FormEvent) => void
}

function Signup({ loginState, handleSignup }: SIGNUP) {
  const { signUpValues, handleSignUpValues, signUpErrors, checkNoErrors } =
    useContext(UserContext)
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSignup}>
      {/* first name */}
      <div className="flex flex-col">
        <label htmlFor="firstName" className="text-light_Gray mb-1">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter Your First Name"
          className="form-input"
          value={signUpValues?.firstName}
          onChange={handleSignUpValues}
        />
        {<p className="text-error text-sm italic">{signUpErrors.firstName}</p>}
      </div>
      {/* last name */}
      <div className="flex flex-col">
        <label htmlFor="lastName" className="text-light_Gray mb-1">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter Your Last Name"
          className="form-input"
          value={signUpValues?.lastName}
          onChange={handleSignUpValues}
        />
        {<p className="text-error text-sm italic">{signUpErrors.lastName}</p>}
      </div>
      {/* email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-light_Gray mb-1">
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
        {<p className="text-error text-sm italic">{signUpErrors.email}</p>}
      </div>
      {/* password */}
      <div className="flex flex-col">
        <label htmlFor="Password" className="text-light_Gray mb-1">
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
        {<p className="text-error text-sm italic">{signUpErrors.password}</p>}
      </div>
      {/* confirm password */}
      <div className="flex flex-col">
        <label htmlFor="cPassword" className="text-light_Gray mb-1">
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
        {<p className="text-error text-sm italic">{signUpErrors.cpassword}</p>}
      </div>

      <button className="btn bg-dark_green" disabled={!checkNoErrors}>
        {loginState ? "Login" : "Sign Up"}
      </button>
    </form>
  )
}

export default Signup
