import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header items-center align-middle" >
        <NavLink to="/" className="w-14 h-12 rounded-lg bg-white items-center align-middle justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text item-center align-middle">MDH3</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar