import React from 'react'

import './style.css'

import Logo from '../../assets/Logo-be36f7.png'
import NavButton from '../../Components/NavButton/NavButton'

function Nav({ btnTitle, btnRoute }) {
    return (
        <nav>
            <div className="nav-content">
                <div className="nav-img">
                    <img src={Logo} />
                </div>
                <div className="nav-menu">
                    <NavButton title={btnTitle} to={btnRoute}/>
                </div>
            </div>                
        </nav>
    )
}

export default Nav
