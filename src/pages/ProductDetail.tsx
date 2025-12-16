import { useParams, Link } from 'react-router-dom';
import { useState, CSSProperties } from 'react';
import { getProductBySlug } from '../data/products';
import WhatsAppButton from '../components/WhatsAppButton';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');

  if (!product) {
    return (
      <div style={{ 
        paddingTop: '10rem', 
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', marginBottom: '1rem' }}>
          Produit non trouvé
        </h1>
        <Link 
          to="/collections"
          style={{
            color: '#B8860B',
            textDecoration: 'underline'
          }}
        >
          Retour aux collections
        </Link>
      </div>
    );
  }

  const containerStyles: CSSProperties = {
    paddingTop: '8rem',
    paddingBottom: '6rem',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '8rem 2rem 6rem'
  };

  const gridStyles: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: '4rem',
    alignItems: 'start'
  };

  const galleryStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const mainImageStyles: CSSProperties = {
    width: '100%',
    aspectRatio: '3/4',
    objectFit: 'cover',
    backgroundColor: '#f5f5f5'
  };

  const thumbnailContainerStyles: CSSProperties = {
    display: 'flex',
    gap: '0.5rem'
  };

  const thumbnailStyles = (isActive: boolean): CSSProperties => ({
    width: '80px',
    height: '100px',
    objectFit: 'cover',
    cursor: 'pointer',
    border: isActive ? '2px solid #B8860B' : '2px solid transparent',
    opacity: isActive ? 1 : 0.7,
    transition: 'all 0.3s ease'
  });

  const contentStyles: CSSProperties = {
    padding: '2rem 0'
  };

  const categoryStyles: CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: '#B8860B',
    marginBottom: '0.75rem'
  };

  const titleStyles: CSSProperties = {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
    fontWeight: 400,
    color: '#0A0A0A',
    marginBottom: '1rem'
  };

  const priceStyles: CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#0A0A0A',
    marginBottom: '2rem'
  };

  const descriptionStyles: CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '1rem',
    lineHeight: 1.8,
    color: '#555',
    marginBottom: '2rem'
  };

  const detailsTitleStyles: CSSProperties = {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.25rem',
    fontWeight: 500,
    marginBottom: '1rem',
    color: '#0A0A0A'
  };

  const detailsListStyles: CSSProperties = {
    listStyle: 'none',
    padding: 0,
    marginBottom: '2rem'
  };

  const detailItemStyles: CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.9rem',
    color: '#666',
    padding: '0.5rem 0',
    borderBottom: '1px solid #eee',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const sizesContainerStyles: CSSProperties = {
    marginBottom: '2rem'
  };

  const sizeButtonStyles = (isActive: boolean): CSSProperties => ({
    width: '50px',
    height: '50px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 500,
    border: '1px solid',
    borderColor: isActive ? '#B8860B' : '#ddd',
    backgroundColor: isActive ? '#B8860B' : 'transparent',
    color: isActive ? '#fff' : '#0A0A0A',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginRight: '0.5rem'
  });

  const whatsappMessage = `Bonjour Président,
Je souhaite commander le modèle "${product.name}" en taille ${selectedSize || '[Taille]'}.
Prix: ${product.priceFormatted}`;

  return (
    <div style={containerStyles}>
      <Link 
        to="/collections"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '0.85rem',
          color: '#666',
          textDecoration: 'none',
          marginBottom: '2rem'
        }}
      >
        ← Retour aux collections
      </Link>

      <div style={gridStyles}>
        <div style={galleryStyles}>
          <img 
            src={product.images[selectedImage]}
            alt={product.name}
            style={mainImageStyles}
          />
          <div style={thumbnailContainerStyles}>
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} - Vue ${index + 1}`}
                style={thumbnailStyles(selectedImage === index)}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        <div style={contentStyles}>
          <p style={categoryStyles}>{product.category}</p>
          <h1 style={titleStyles}>{product.name}</h1>
          <p style={priceStyles}>{product.priceFormatted}</p>
          
          <p style={descriptionStyles}>{product.description}</p>

          <h3 style={detailsTitleStyles}>Caractéristiques</h3>
          <ul style={detailsListStyles}>
            {product.details.map((detail, index) => (
              <li key={index} style={detailItemStyles}>
                <span style={{ color: '#B8860B' }}>◆</span>
                {detail}
              </li>
            ))}
          </ul>

          <div style={sizesContainerStyles}>
            <h3 style={detailsTitleStyles}>Taille</h3>
            <div>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  style={sizeButtonStyles(selectedSize === size)}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <WhatsAppButton message={whatsappMessage}>
            Commander via WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
