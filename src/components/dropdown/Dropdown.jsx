import "./Dropdown.css"
import React, { useState } from 'react'


const Dropdown = () => {

  const [ click, setclick ] = useState( false);

  const handleClick = () => setclick(!click)
  return (
    <>
    <ul onClick={handleClick}
    className={ click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      {
        MenuItems.map((item, index) =>{
          return(
            <li key={index}>
              <Link className={item.cName} to={item.path} onClick={()=>setclick(false)}>
              {item.title}
              </Link>

            </li>
          )
        })
      }

    </ul>
    </>
  )
}

export default Dropdown
