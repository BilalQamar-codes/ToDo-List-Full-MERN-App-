import { React } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Navbar(params) {
    const auth = useAuth()
    return (
        <nav className="navbar">
            <NavLink to= '/'>
                Home
            </NavLink>
            <NavLink to='/profile'>
                Profile
            </NavLink>
            {
                !auth.user && (<NavLink to='/login'>
                Login/SignUp
                </NavLink>)
            }
        </nav>
    )
}

export default Navbar;