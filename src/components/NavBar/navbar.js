import React, { useState, useContext } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';
import { ThemeContext } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="navbar">

            <img src={logo} alt="Logo" className='logo'/>

            <div className="desktopMenu">

                 <Link 
                    activeClass='active' 
                    to='intro' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500} className="desktopMenuListItem"
                >
                    Home
                </Link>

                <Link 
                    activeClass='active' 
                    to='skills' 
                    spy={true} 
                    smooth={true} 
                    offset={-50} 
                    duration={500} className="desktopMenuListItem"
                >
                    About
                </Link>

                <Link 
                    activeClass='active' 
                    to='works' 
                    spy={true} 
                    smooth={true} 
                    offset={-50} 
                    duration={500} className="desktopMenuListItem"
                >
                    Portfolio
                </Link>

                <Link 
                    activeClass='active' 
                    to='clients' 
                    spy={true} 
                    smooth={true} 
                    offset={-50} 
                    duration={500} className="desktopMenuListItem"
                >
                    Testimonies
                </Link>
            </div>

            {/* Contact Button */}
            <button 
                className="desktopMenuBtn" 
                onClick={() => {
                    document.getElementById('contact').scrollIntoView({behavior: 'smooth'
                });
              }}
            >
                <img 
                src={contactImg} 
                alt="" 
                className="desktopMenuImg" 
                />
                Contact Me
            </button>

             {/* Theme Button */}
            <button 
                className="themeBtn" 
                onClick={toggleTheme}>
                    {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
            </button>

             {/* Mobile Menu Icon */}
            <img 
                src={menu} 
                alt="Menu" 
                className='mobMenu' 
                onClick={()=>setShowMenu(!showMenu)}
            />

            <div 
                className="navMenu" 
                style={{display: showMenu? 'flex':'none'}}
            >
                <Link 
                    activeClass='active' 
                    to='intro' 
                    spy={true} 
                    smooth={true}
                    offset={-100} 
                    duration={500} 
                    className="listItem"
                    onClick={()=>setShowMenu(false)}
                >
                    Home
                </Link>

                <Link 
                    activeClass='active' 
                    to='skills' 
                    spy={true} 
                    smooth={true} 
                    offset={-50} 
                    duration={500} 
                    className="listItem" 
                    onClick={()=>setShowMenu(false)}
                >
                    About
                </Link>

                <Link 
                    activeClass='active' 
                    to='works' 
                    spy={true} 
                    smooth={true} 
                    offset={-50} 
                    duration={500} 
                    className="listItem" 
                    onClick={()=>setShowMenu(false)}
                >
                    Portfolio
                </Link>

                <Link 
                    activeClass='active' 
                    to='clients' 
                    spy={true} 
                    smooth={true} 
                    offset={-50} 
                    duration={500} 
                    className="listItem" 
                    onClick={()=>setShowMenu(false)}
                >
                    Testimonies
                </Link>

                <Link 
                    activeClass='active' 
                    to='contact' 
                    spy={true} 
                    smooth={true} 
                    offset={-50} 
                    duration={500} 
                    className="listItem" 
                    onClick={()=>setShowMenu(false)}
                >
                    Contact
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;