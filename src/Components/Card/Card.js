import React from 'react'

import './style.css'
import WhatsAppLogo from '../../assets/whatsapp.svg'

function Card({ image, name, city, price, description, phone, key }) {
    return (
        <div className="card" key={key}>
            <div 
                className="card-img"
                style={{backgroundImage: `url(${image})`}}
            />
            <div className="card-info">
                <div className="card-title">
                    <h3>{name}, <span>{city}</span></h3> 
                </div>                                                    
                <h2>R$ {price},00</h2>                                                        
                <p>{description}</p>
                <p><img src={WhatsAppLogo}/> {phone}</p>                
            </div>                        
        </div>
    )
}

export default Card
