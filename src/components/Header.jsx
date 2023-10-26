import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from  "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import { useState } from "react"

const nav = [
    {path : "/",
    name : "Home"},
    {path : "about",
    name : "About"},
    {path : "menu",
    name : "Menu"},
    {path : "reservation",
    name : "Reservation"},
    {path : "order",
    name : "Order Online"},
    {path : "login",
    name : "Login"},
]

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
        <div className="container">
      <header>
        <img className="headerLogo" src={logo} alt="Little Lemon" />
        <nav className="navbar" >
            <ul className={isNavExpanded ? 'navbarLinks active' : 'navbarLinks'}>
              {
                nav.map((link, index)=>{
                    return (
                        <li key={index} className="navLink">
                            <Link to = {link.path}>{link.name}</Link>
                        </li>
                    )
                })
              }
            </ul>
        <button
          className="navbarHamburger"
          type="button"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ?
            <GiHamburgerMenu /> :
            <AiOutlineClose />}
        </button>
        </nav>
    </header>
        </div>
  )
}

export default Header