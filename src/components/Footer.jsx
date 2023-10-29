import footerImg from "../assets/logo-white.png"
import { Link } from 'react-router-dom'
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

const Footer = () => {
  return (
    <footer>
    <div className="container">
      <div className="footerContainer">
        <img className='footerImage' src={footerImg} alt="Little Lemon" width={162} />

          <nav className="footerNavigation">
            <h4 className="doormatHeading">Doormat <br /> Navigation</h4>
            <ul className="doormatLinks">
              {nav.map((link, index)=>{
                    return (
                        <li key={index} className="footerNavLink">
                            <Link to = {link.path}>{link.name}</Link>
                        </li>
                    )
                })}
            </ul>
            <h4 className="contactHeading">Contact</h4>
            <ul className="contactLinks">
            <li>Chicago</li>
            <li>03000000000</li>
            <li>littlelemon@gmail.com</li>
            </ul>
            <h4 className="socialHeading">Social Media Links</h4>
            <ul className="socialLinks">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer