import { useLogout } from "../../hooks/useLogout"

type LOGOUT = {
  color: string
  width: string
}

function LogOut({ color, width }: LOGOUT) {
  const { logout } = useLogout()
  return (
    <>
      <button
        className={`text-${color} border border-light_Gray h-10 w-${width} rounded-md hover:text-dark_green hover:border-dark_green duration-300 font-semibold`}
        onClick={() => logout()}
      >
        Log Out
      </button>
    </>
  )
}

export default LogOut
