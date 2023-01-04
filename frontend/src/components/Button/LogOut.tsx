import { useLogout } from "../../hooks/useLogout"

function LogOut() {
  const { logout } = useLogout()
  return (
    <>
      <button
        className="text-light_Gray border border-light_Gray h-10 w-24 rounded-md hover:text-dark_green hover:border-dark_green duration-300 "
        onClick={() => logout()}
      >
        Log Out
      </button>
    </>
  )
}

export default LogOut
