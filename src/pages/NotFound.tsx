import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';

export default function NotFound() {
  const containerStyles: CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#FAFAFA'
  };

  const titleStyles: CSSProperties = {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(6rem, 15vw, 12rem)',
    fontWeight: 400,
    color: '#B8860B',
    lineHeight: 1,
    marginBottom: '1rem'
  };

  const subtitleStyles: CSSProperties = {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
    fontWeight: 400,
    color: '#0A0A0A',
    marginBottom: '1rem'
  };

  const textStyles: CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '1rem',
    color: '#666',
    marginBottom: '2.5rem',
    maxWidth: '400px',
    lineHeight: 1.8
  };

  const linkStyles: CSSProperties = {
    display: 'inline-block',
    padding: '1rem 2.5rem',
    backgroundColor: '#B8860B',
    color: '#FAFAFA',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={containerStyles}>
      <h1 style={titleStyles}>404</h1>
      <h2 style={subtitleStyles}>Page non trouvée</h2>
      <p style={textStyles}>
        La page que vous recherchez n'existe pas ou a été déplacée. 
        Retournez à l'accueil pour découvrir nos collections.
      </p>
      <Link to="/" style={linkStyles}>
        Retour à l'accueil
      </Link>
    </div>
  );
}
