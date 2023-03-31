import { Outlet, NavLink } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import logo from '../images/Rick_and_Morty.svg.png'

export default function RootLayout() {
  const today=new Date()
  return (
    <div className="root-layout">
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt='Headline'/>
        </div>
        <nav className="header__nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="characters">Characters</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </header>
      <Breadcrumbs/>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>Copyright &copy; {today.getFullYear()} Mateo Bukić</p>
      </footer>
    </div>
  )
}