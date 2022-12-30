import { useContext } from "react"
import "./formstyle.css"
import { UserContext } from "../../context"

function Signup() {
  const { formValues, handleChange } = useContext(UserContext)
  return (
    <>
      {/* first name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="firstname" className="text-light_Gray">
          First Name
        </label>
        <input
          type="text"
          name="firstname"
          placeholder="Enter Your First Name"
          className="form-input"
          value={formValues?.firstname}
          onChange={handleChange}
        />
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
          value={formValues?.lastname}
          onChange={handleChange}
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
          value={formValues?.email}
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
          name="password"
          placeholder="Enter Your Password"
          className="form-input"
          value={formValues?.password}
          onChange={handleChange}
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
          value={formValues?.cpassword}
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default Signup
