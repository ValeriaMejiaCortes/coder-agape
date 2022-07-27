import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w8xl mx-auto px-8 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-[80px]">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <img
                    className="block lg:hidden h-16 w-auto"
                    src={`../assets/logo.png`}
                    alt=""
                  ></img>

                  <img
                    className="hidden lg:block h-16 w-auto"
                    src={`../assets/logo.png`}
                    alt=""
                  />
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6 mt-[1%]">
                <div className="flex space-x-4 ">
                  <Link
                    to="/category/1"
                    className="no-underline bg-gray-900 text-white px-3 py-2 rounded-md font-medium"
                    aria-current="page"
                  >
                    Tablas
                  </Link>

                  <Link
                    to="/category/2"
                    className="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Sangrías
                  </Link>

                  <Link
                    to="/category/3"
                    className="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Kids
                  </Link>

                  <Link
                    to="/category/4"
                    className="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Picnics
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <CartWidget />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/category/1"
              className="no-underline bg-gray-900 text-white block px-3 py-2 rounded-md font-medium"
            >
              Tablas
            </Link>
            <Link
              to="/category/2"
              className="no-underline text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md  font-medium"
            >
              Sangrías
            </Link>
            <Link
              to="/category/3"
              className="no-underline text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md  font-medium"
            >
              Kids
            </Link>
            <Link
              to="/category/4"
              className="no-underline text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium"
            >
              Picnics
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
