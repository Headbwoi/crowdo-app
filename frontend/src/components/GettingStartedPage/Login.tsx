import { FormEvent, useContext } from "react"
import "./formstyle.css"
import { UserContext } from "../../context"
import { useForm, SubmitHandler } from "react-hook-form"

type LOGIN = {
  loginState: boolean
  // handleLogin: (e: FormEvent) => void
}

interface IFormInputs {
  email: string
  password: string
}

function Login({ loginState }: LOGIN) {
  // const { loginValues, handleLoginValues } = useContext(UserContext)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>()

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data)

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-light_Gray mb-1.5">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter Your Email"
          className="form-input"
          {...register("email", { required: true })}
        />
        <p className="text-[red]">{errors.email && "email is required"}</p>
      </div>
      <div className="flex flex-col">
        <label htmlFor="Password" className="text-light_Gray mb-1.5">
          Password
        </label>
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Enter Your Password"
          className="form-input"
        />
        <p className="text-[red]">
          {errors.password && "Password is required"}
        </p>
      </div>

      <button className="btn bg-dark_green">
        {loginState ? "Sign Up" : "Login"}
      </button>
    </form>
  )
}

export default Login
