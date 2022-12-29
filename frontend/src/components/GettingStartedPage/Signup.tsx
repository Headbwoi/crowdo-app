import "./formstyle.css"
function Signup() {
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
      {/* confirm password */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="ConfirmPassword" className="text-light_Gray">
          Confirm Password
        </label>
        <input
          type="password"
          name="ConfirmPassword"
          placeholder="Re-enter your Password"
          className="form-input"
        />
      </div>
    </>
  )
}

export default Signup
