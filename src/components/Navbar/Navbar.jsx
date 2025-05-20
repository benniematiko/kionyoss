// import "./Navbar.css";
// import { MenuList } from "./MenuList";

// import { Link } from "react-router-dom"
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useState } from "react";

// const Navbar = () => {

//   const [ clicked, setClicked ] =  useState(false)

//   const handleClick = () =>{
//     setClicked(!clicked)
//   }
//   const menuListItems = MenuList.map(({ url, title }, index) => {
//     return (
//       <li key={index}>
//         <a href={url}>{title}</a>
//       </li>
//     );
//   });

//   return (
//     <nav>
//       <div className="container">
//         <div className="logo">
//           <Link to="/"><h2>Kionyo Secondary School</h2></Link>
//         </div>

//         <div className="menu-icon" onClick={handleClick}>
//           <span>{ clicked ? <FaTimes/> : <FaBars />}</span>
//         </div>

//         <ul className={ clicked ? "menu-list" : "menu-list close" }>{menuListItems}</ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import "./Navbar.css";

import React, { useState } from "react";
import { FaBars, FaCaretDown, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="navbar-logo">
            Kionyo Secondary School
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            {/* <i className={ click ? <FaTimes/> : <FaBars /> }></i> */}
            <span>{click ? <FaTimes /> : <FaBars />}</span>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/ourschool"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our School
                <FaCaretDown />
              </Link>

              {dropdown && <Dropdown />}
            </li>
            <li className="nav-item">
              <Link
                to="/academics"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Academics
                <FaCaretDown />
              </Link>

              {dropdown && <Dropdown />}
            </li>

            <li className="nav-item">
              <Link
                to="/noticeboard"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Noticeboard & Annoucements
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contactus"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
