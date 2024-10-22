import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png'
// import Signup from './Signup';

function Header() {
    return (
        <header>
        <nav className="flex flex-wrap items-center justify-between w-full py-1 md:py-0 px-4 text-lg text-gray-700 bg-white "  >
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-auto" style={{height: "7.5rem"}} // Properly maintain aspect ratio with h-10 and w-auto
              />
              <span className="ml-2 text-xl font-bold">APNAGOLD</span>
            </a>
          </div>
  
          <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
            <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
              <li className="relative group">
                <NavLink className="md:p-4 py-2 block hover:text-purple-400" to="/home">Home</NavLink>
              </li>
              <li className="relative group">
                <NavLink className="md:p-4 py-2 block hover:text-purple-400" to="#">Category</NavLink>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-1">
                  <li>
                    <NavLink className="block px-4 py-2 hover:bg-purple-400" to="/ring">Ring</NavLink>
                  </li>
                  <li>
                    <NavLink className="block px-4 py-2 hover:bg-purple-400" to="/cat2">Chain</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400 text-purple-500" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal1">Sign Up</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
}

export default Header;
