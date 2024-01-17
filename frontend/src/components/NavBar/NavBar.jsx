import {NavLink} from "react-router-dom";
import './NavBar.scss'
import logo from '../../assets/logo.svg'

export default function NavBar() {
    return (
        <nav className="navBar">
            <figure>
                <img src={logo} alt="Logo"/>
                <figcaption>Coding Challenge</figcaption>
            </figure>
            <ul>
                <li>
                    <NavLink to='/home' className={({isActive}) =>
                        isActive ? "active" : ""
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({isActive}) =>
                        isActive ? "active" : ""
                    }>About</NavLink>
                </li>
            </ul>
        </nav>
    )
}