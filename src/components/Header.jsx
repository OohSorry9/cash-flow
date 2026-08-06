import React from 'react'
import logo from '../assets/logo.png'
import './css/header.css'
function Header() {
    return (
        <header>
            <div className="title">
                <img className="logo" src={logo} alt="Logo" />
                <div className="logo-text">
                    <h1>CashFlow</h1>
                    <span>Personal Finance App</span></div>

            </div>

        </header>
    )
}

export default Header