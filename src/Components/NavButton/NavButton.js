import React from 'react'
import { Link } from 'react-router-dom'

function NavButton({ title, to }) {
    return (
        <Link to={to}>
            <button className="btn">            
                {title}                        
            </button>
        </Link>        
    )
}

export default NavButton
