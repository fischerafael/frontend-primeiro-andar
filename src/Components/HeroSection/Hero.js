import React from 'react'

import './style.css'
import HeroImg from '../../assets/hero.svg'
import HeroHouse from '../../assets/herohouse.svg'

function Hero() {
    return (
        <div className="hero">            
            <div className="logo">
                <img src={HeroHouse} alt=""/>
            </div>
            <div className="copy">
                <h1>Alugue um quarto</h1>
                <h3>Compartilhe experiências, economize dinheiro</h3>
            </div>
        </div>
    )
}

export default Hero
