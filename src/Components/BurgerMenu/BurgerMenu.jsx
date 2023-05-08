import { stack as Menu } from 'react-burger-menu'
import "./burgermenu.css"
import { Link } from "react-router-dom"
import { useState } from 'react'


const BurgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleStateChange = (state) => {
        setMenuOpen(state.isOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <div>
            <Menu
                isOpen={menuOpen}
                onStateChange={(state) => handleStateChange(state)}
                width={"280px"}

            >
                <Link className="menu-item" to="/home" onClick={() => closeMenu()}>Home</Link >
                <Link className="menu-item" to="/account" onClick={() => closeMenu()}>Account</Link>
                <Link className="menu-item" to="/help" onClick={() => closeMenu()}>Help</Link>
                <Link className="menu-item" to="/signout" onClick={() => closeMenu()}>Sign out</Link>
                <div className='name'>
                    <h5>Smart Bank Alura LATAM &#9415;</h5>
                </div>
            </Menu>

        </div>
    )
}

export default BurgerMenu;
