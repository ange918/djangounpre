import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyles: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#fff',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
    boxShadow: isHovered ? '0 10px 40px rgba(0, 0, 0, 0.1)' : 'none'
  };

  const imageContainerStyles: CSSProperties = {
    position: 'relative',
    aspectRatio: '3/4',
    overflow: 'hidden',
    backgroundColor: '#f5f5f5'
  };

  const imageStyles: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)'
  };

  const categoryBadgeStyles: CSSProperties = {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    backgroundColor: 'rgba(10, 10, 10, 0.8)',
    color: '#FAFAFA',
    padding: '0.35rem 0.75rem',
    fontSize: '0.7rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.1em'
  };

  const contentStyles: CSSProperties = {
    padding: '1.5rem 1rem'
  };

  const nameStyles: CSSProperties = {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.1rem',
    fontWeight: 500,
    marginBottom: '0.5rem',
    color: '#0A0A0A'
  };

  const priceStyles: CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#B8860B',
    marginBottom: '1rem'
  };

  const buttonContainerStyles: CSSProperties = {
    display: 'flex',
    gap: '0.5rem'
  };

  const buttonStyles: CSSProperties = {
    flex: 1,
    padding: '0.75rem',
    fontSize: '0.7rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer'
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour Président, je suis intéressé(e) par le modèle "${product.name}" à ${product.priceFormatted}.`
  );

  return (
    <div 
      style={cardStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/produit/${product.slug}`} style={{ textDecoration: 'none' }}>
        <div style={imageContainerStyles}>
          <img 
            src={product.images[0]} 
            alt={product.name}
            style={imageStyles}
            loading="lazy"
          />
          <span style={categoryBadgeStyles}>{product.category}</span>
        </div>
        <div style={contentStyles}>
          <h3 style={nameStyles}>{product.name}</h3>
          <p style={priceStyles}>{product.priceFormatted}</p>
        </div>
      </Link>
      <div style={{ ...contentStyles, paddingTop: 0 }}>
        <div style={buttonContainerStyles}>
          <Link 
            to={`/produit/${product.slug}`}
            style={{
              ...buttonStyles,
              backgroundColor: 'transparent',
              color: '#0A0A0A',
              border: '1px solid #0A0A0A'
            }}
          >
            Voir
          </Link>
          <a
            href={`https://wa.me/22996494918?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...buttonStyles,
              backgroundColor: '#25D366',
              color: '#fff'
            }}
          >
            Acheter
          </a>
        </div>
      </div>
    </div>
  );
}
