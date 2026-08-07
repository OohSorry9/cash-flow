import React from 'react'
import balanceImg from '../assets/balance-card-img.png'
import heroImg from '../assets/hero-image.png'
import SectionTitle from './SectionTitle'
import heroImgDark from '../assets/hero-image.png'
function Balance({amount}) {
    return (
        <div className="hero">
            <div className="hero-left">
                <SectionTitle data={{ 
                    src: balanceImg,
                    alt: "Balance",
                    title: "Current Balance"
                }} />
                <div className="hero-balance">
                    <h1 className="hero-balance-amount">Rs. <span id='Balance'>{amount.toLocaleString()}</span></h1>
                </div>

            </div>
            <div className="hero-right">
                <img className='hero-img' src={heroImg} alt="Hero" />
            </div>
        </div>
    )
}

export default Balance