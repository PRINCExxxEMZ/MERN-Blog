import React, { useState } from 'react'
import  {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'


const Header = () => {
    const [navActive, setNavActive] = useState(window.innerWidth > 800 ? true : false);

    const closeNavHandler = () =>{
        if(window.innerWidth < 800) {
            setNavActive(false);
        } else {
            setNavActive(true)
        }
    }
  return (
    <nav>
        <div className='container nav_container'>
            <Link to ="/" className='nav_logo' onClick={closeNavHandler}>
                <h2 className='nav_logo'>BOUESTI <span>BLOG</span></h2>
            </Link>
           {navActive && <ul className='nav_menu'>
                <li><Link t0="/profile" onClick={closeNavHandler}>Ark</Link></li>
                <li><Link t0="/create" onClick={closeNavHandler}>Create Post</Link></li>
                <li><Link t0="/author" onClick={closeNavHandler}>Authors</Link></li>
                <li><Link t0="/logout" onClick={closeNavHandler}>Logout</Link></li>
            </ul>}
            <button className='nav_toggle-btn' onClick={() => setNavActive(!navActive)}>
                {
                    navActive ? <AiOutlineClose/> : <FaBars/>
                }
            </button>
        </div>
    </nav>
  )
}

export default Header
