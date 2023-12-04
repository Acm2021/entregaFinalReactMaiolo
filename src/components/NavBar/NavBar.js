import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css";

const NavBar = ()=>{
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <Link to='/' className="navbar-brand">
            <h3>Chulis Outdoor</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <NavLink to={`/category/Mochilas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Mochilas</NavLink>
              <NavLink to={`/category/Calzado`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Calzado</NavLink>
              <NavLink to={`/category/Linternas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Linternas</NavLink>
            </div>
          </div>
          <CartWidget />
        </nav>
      );
    

    } 


export  default NavBar