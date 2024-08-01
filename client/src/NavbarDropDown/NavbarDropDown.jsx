import React, { useState } from 'react';
import './NavbarDropDown.styles.css';
import Imports from '../../imports';


const NavbarDropDown = ({src}) => {
  const {Link , useState , React } = Imports ;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const token = localStorage.getItem("jwt") ;
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__profile">
        <img
          src={src} // replace with the path to your profile image
          alt="Profile"
          className="navbar__profile-image"
          onClick={toggleDropdown}
        />
        {dropdownOpen && (
          <div className="navbar__dropdown">
            <Link to="/user/profile" className="navbar__dropdown-item">Dashboard</Link>
            {
                token === "" || token === null ?  <Link to="/user/signin" className="navbar__dropdown-item" >Sign In</Link>
                 :""
            }
             {
                token === "" || token === null ?  <Link to="/user/signup" className="navbar__dropdown-item" >Sign Up</Link>
                 :""
            }
             {
                token === "" || token === null ?  "" :<Link to="/user/signout" className="navbar__dropdown-item" >Sign Out</Link>
                 
            }
            
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarDropDown;
