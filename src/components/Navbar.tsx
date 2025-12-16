import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import type { CSSProperties } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navStyles: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(250, 250, 250, 0.98)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
  };

  const containerStyles: CSSProperties = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '1rem clamp(1rem, 4vw, 2rem)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyles: CSSProperties = {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#0A0A0A',
    textDecoration: 'none',
    letterSpacing: '0.05em'
  };

  const logoAccentStyles: CSSProperties = {
    color: '#B8860B'
  };

  const menuStyles: CSSProperties = {
    display: 'flex',
    gap: '3rem',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const linkStyles: CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: '#0A0A0A',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    position: 'relative'
  };

  const burgerStyles: CSSProperties = {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '5px'
  };

  const mobileMenuStyles: CSSProperties = {
    position: 'fixed',
    top: '70px',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    opacity: isMenuOpen ? 1 : 0,
    visibility: isMenuOpen ? 'visible' : 'hidden',
    transition: 'all 0.3s ease'
  };

  const mobileLinkStyles: CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '1rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: '#FFFFFF',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    position: 'relative'
  };

  return (
    <nav style={navStyles}>
      <div style={containerStyles}>
        <Link to="/" style={logoStyles}>
          Le <span style={logoAccentStyles}>Président</span> Djangoun
        </Link>

        <ul style={menuStyles} className="desktop-menu">
          <li>
            <NavLink 
              to="/" 
              style={({ isActive }) => ({
                ...linkStyles,
                color: isActive ? '#B8860B' : '#0A0A0A'
              })}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/collections" 
              style={({ isActive }) => ({
                ...linkStyles,
                color: isActive ? '#B8860B' : '#0A0A0A'
              })}
            >
              Collections
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/a-propos" 
              style={({ isActive }) => ({
                ...linkStyles,
                color: isActive ? '#B8860B' : '#0A0A0A'
              })}
            >
              À Propos
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              style={({ isActive }) => ({
                ...linkStyles,
                color: isActive ? '#B8860B' : '#0A0A0A'
              })}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <button 
          style={burgerStyles} 
          className="burger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{
            width: '25px',
            height: '2px',
            backgroundColor: '#0A0A0A',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none'
          }} />
          <span style={{
            width: '25px',
            height: '2px',
            backgroundColor: '#0A0A0A',
            opacity: isMenuOpen ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }} />
          <span style={{
            width: '25px',
            height: '2px',
            backgroundColor: '#0A0A0A',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none'
          }} />
        </button>
      </div>

      <div style={mobileMenuStyles} className="mobile-menu">
        <NavLink 
          to="/" 
          style={({ isActive }) => ({
            ...mobileLinkStyles,
            color: isActive ? '#B8860B' : '#FFFFFF'
          })}
          onClick={() => setIsMenuOpen(false)}
        >
          Accueil
        </NavLink>
        <NavLink 
          to="/collections" 
          style={({ isActive }) => ({
            ...mobileLinkStyles,
            color: isActive ? '#B8860B' : '#FFFFFF'
          })}
          onClick={() => setIsMenuOpen(false)}
        >
          Collections
        </NavLink>
        <NavLink 
          to="/a-propos" 
          style={({ isActive }) => ({
            ...mobileLinkStyles,
            color: isActive ? '#B8860B' : '#FFFFFF'
          })}
          onClick={() => setIsMenuOpen(false)}
        >
          À Propos
        </NavLink>
        <NavLink 
          to="/contact" 
          style={({ isActive }) => ({
            ...mobileLinkStyles,
            color: isActive ? '#B8860B' : '#FFFFFF'
          })}
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </NavLink>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .burger-menu { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
