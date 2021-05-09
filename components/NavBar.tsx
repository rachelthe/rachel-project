import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export default function NavBar() {
  const router = useRouter()
  const [state, setState] = useState({
    mobileMenuOpen: false
  })

  return (
    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
      <nav
        className="relative flex items-center justify-between sm:h-10 lg:justify-start"
        aria-label="Global"
      >
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/#">
              <a>
                <span className="sr-only">Photo of cat</span>

                <img className="h-8 w-auto sm:h-10" src="/koko.jpg" />
              </a>
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
                onClick={() =>
                  setState({ ...state, mobileMenuOpen: !state.mobileMenuOpen })
                }
              >
                <span className="sr-only">Open main menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns=""
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          <Link href="/about">
            <a
              className={`font-medium hover:text-green-900 ${
                router.asPath === "/about" ? "text-red-500" : "text-gray-500 "
              }`}
            >
              About
            </a>
          </Link>
          <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
            Works
          </a>
          <a
            href="#"
            className="font-medium text-gray-500
                    hover:text-gray-900"
          >
            {" "}
            Testimonials
          </a>
          <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
            Contact Me
          </a>
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Log in
          </a>
        </div>

        {state.mobileMenuOpen && (
          <div className="absolute top-0 inset-x-0 p-2 z-20 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>Rachel Website</div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() =>
                      setState({
                        ...state,
                        mobileMenuOpen: !state.mobileMenuOpen
                      })
                    }
                  >
                    <span className="sr-only">Close main menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Home{" "}
                </a>

                <a
                  href="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  About{" "}
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Works{" "}
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Testimonials{" "}
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Contact Me{" "}
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                ></a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
