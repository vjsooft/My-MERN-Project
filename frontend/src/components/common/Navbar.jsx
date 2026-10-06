import {NavLink} from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import {userLogout} from '../../services/authService';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { user, setUser } = useContext(AuthContext);  
  const navigate = useNavigate(); 
   const handleLogout = async () => {
        try {
            await userLogout();
            setUser(null);
            navigate("/login");
        } catch (error) {
            console.log("Logout error:", error);
        }
    };
  return (
    <div className="collapse navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink   >
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              {!user?._id ? (
                <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Signup
                </NavLink>
              </li>
              </>
              ) : (
                <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={handleLogout}>
                  Logout
                </NavLink>
              </li>
              </>
              )}
               
              {/* <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                <a className="btn site-header__cta" href="#contact">Get started <span aria-hidden="true">&#8594;</span></a>
              </li> */}
            </ul>
          </div>
  )
}

export default Navbar
