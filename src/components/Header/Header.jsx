import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const getMenuStyles = () => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpen && "-100%" }
        }
    }
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100} />

                <OutsideClickHandler
                 onOutsideClick={() => {
                    setMenuOpen(false)
                 }}
                >
                    <div className="flexCenter h-menu"
                        style={getMenuStyles(menuOpen)}
                    >
                        <a href="">Residences</a>
                        <a href="">Our Value</a>
                        <a href="">Contact Us</a>
                        <a href="">Get Started</a>
                        <button className='button'>
                            <a href="">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <BiMenuAltRight />
                </div>
            </div>
        </section>
    )
}

export default Header