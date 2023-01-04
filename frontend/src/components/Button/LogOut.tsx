import { useLogout } from "../../hooks/useLogout"

type LOGOUT = {
  color: string
}

function LogOut({ color }: LOGOUT) {
  const { logout } = useLogout()
  return (
    <>
      <button
        className={`text-${color} border border-light_Gray h-10 w-full lg:w-[6rem] rounded-md hover:text-dark_green hover:border-dark_green duration-300 font-semibold`}
        onClick={() => logout()}
      >
        Log Out
      </button>
    </>
  )
}

export default LogOut
