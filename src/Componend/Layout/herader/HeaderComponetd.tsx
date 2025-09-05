import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/logo.png'
import Photo from '../../../assets/images/icon/world.svg'

function HeaderComponetd() {
  return (
    <header className="header-area bg-white shadow-md py-4">
      <div className="container extra-container mx-auto px-4">
        <div className="flex items-center justify-between flex-wrap lg:flex-nowrap header">
          

          <div className="logo fade-in-left flex items-center justify-between w-full lg:w-auto">
            <Link to="/">
              <img src={Logo} alt="logo" className="h-10 w-auto" />
            </Link>
            <button className="mobile-bars text-xl text-gray-700 block lg:hidden">
              <i className="fa-solid fa-bars-staggered"></i>
            </button>
          </div>

          <nav className="nav w-full mt-4 lg:mt-0 lg:w-auto">
            <ul className="flex flex-col lg:flex-row items-center gap-4">
              <li className="fade-in-left nav-item-1">
                <Link className="nav-link active text-gray-800 hover:text-blue-500 transition" to="#home-section">Home</Link>
              </li>
              <li className="fade-in-left nav-item-2">
                <Link className="nav-link text-gray-800 hover:text-blue-500 transition" to="#about">About</Link>
              </li>
              <li className="fade-in-left nav-item-3">
                <Link className="nav-link text-gray-800 hover:text-blue-500 transition" to="#ecmcoin">ECM Coin</Link>
              </li>
              <li className="fade-in-left nav-item-4">
                <Link className="nav-link text-gray-800 hover:text-blue-500 transition" to="#ecosystem">Ecosystem</Link>
              </li>
              <li className="fade-in-left nav-item-5 block lg:hidden">
                <Link to="#footer" className="btn-1 nav-link bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

  
          <div className="header-btn hidden lg:block mt-4 lg:mt-0">
            <div className="flex items-center gap-4">
              <Link to="#contact" className="btn-1 fade-in-right btn-animate bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-all duration-300">
                Contact Us
              </Link>

              <div className="dropdown fade-in-right dropdown-item-animate relative">
                <button
                  className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2 text-sm hover:bg-gray-100 transition"
                >
                  <img src={Photo} alt="language" className="w-5 h-5" />
                  EN
                </button>
                <ul className="dropdown-menu country-dropdown absolute mt-2 bg-white border border-gray-200 rounded shadow-md py-2 w-24 z-10">
                  <li>
                    <button className="dropdown-item active block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                      EN
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                      BN
                    </button>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default HeaderComponetd
