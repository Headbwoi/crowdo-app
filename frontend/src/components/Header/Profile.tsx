import { useRef } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useLogout } from "../../hooks/useLogout"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const { logout } = useLogout()
  const { state } = useAuthContext()
  const dropdownRef = useRef({} as HTMLDivElement)
  const navigate = useNavigate()

  const handleDropdown = () => {
    dropdownRef.current.classList.contains("hidden")
      ? dropdownRef.current.classList.remove("hidden")
      : dropdownRef.current.classList.add("hidden")
  }

  const handleSignOut = () => {
    logout()
    navigate("/getstarted")
  }

  return (
    <>
      <div className="flex items-center md:order-2 relative">
        <button
          type="button"
          className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 relative"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
          onClick={handleDropdown}
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 h-8 rounded-full"
            src={`https://api.multiavatar.com/${state.user?.firstName}%20${state.user?.lastName}.svg`}
            alt={`${state.user?.firstName} avatar`}
          />
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          className="z-50 hidden my-4 text-base list-none bg-background divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-7 left-1/2 -translate-x-1/2"
          id="user-dropdown"
          ref={dropdownRef}
        >
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">
              {state.user?.firstName}
              {state.user?.lastName}
            </span>
            <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
              {state.user?.email}
            </span>
          </div>
          <ul className="py-1" aria-labelledby="user-menu-button">
            <li>
              <a
                href="/dashboard"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/dashboard/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li onClick={() => handleSignOut()}>
              <a
                href="/dashboard"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Profile
