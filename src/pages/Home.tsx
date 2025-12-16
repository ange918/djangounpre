import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import { getFeaturedProducts, testimonials } from '../data/products';
import ProductCard from '../components/ProductCard';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  const heroStyles: CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#0A0A0A',
    overflow: 'hidden'
  };

  const heroOverlayStyles: CSSProperties = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.5) 100%)'
  };

  const heroBgStyles: CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.6
  };

  const heroContentStyles: CSSProperties = {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    padding: '0 clamp(1rem, 4vw, 2rem)',
    maxWidth: '900px'
  };

  const heroSubtitleStyles: CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 400,
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: '#B8860B',
    marginBottom: '1.5rem'
  };

  const heroTitleStyles: CSSProperties = {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
    fontWeight: 400,
    color: '#FAFAFA',
    marginBottom: '1.5rem',
    lineHeight: 1.1,
    fontStyle: 'italic'
  };

  const heroDescStyles: CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '1.1rem',
    fontWeight: 300,
    color: 'rgba(250, 250, 250, 0.8)',
    marginBottom: '2.5rem',
    lineHeight: 1.8
  };

  const sectionStyles: CSSProperties = {
    padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)'
  };

  const containerStyles: CSSProperties = {
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const sectionTitleStyles: CSSProperties = {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 400,
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#0A0A0A'
  };

  const sectionSubtitleStyles: CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 400,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#B8860B',
    marginBottom: '4rem'
  };

  const productGridStyles: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem'
  };

  const aboutSectionStyles: CSSProperties = {
    ...sectionStyles,
    backgroundColor: '#f8f7f5'
  };

  const aboutGridStyles: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
    gap: '2rem',
    alignItems: 'center'
  };

  const aboutImageStyles: CSSProperties = {
    width: '100%',
    aspectRatio: '4/5',
    objectFit: 'cover'
  };

  const aboutContentStyles: CSSProperties = {
    padding: '2rem 0'
  };

  const testimonialGridStyles: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  };

  const testimonialCardStyles: CSSProperties = {
    backgroundColor: '#fff',
    padding: '2.5rem',
    textAlign: 'center',
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.05)'
  };

  const ctaSectionStyles: CSSProperties = {
    padding: 'clamp(4rem, 10vw, 8rem) clamp(1rem, 4vw, 2rem)',
    backgroundColor: '#0A0A0A',
    textAlign: 'center'
  };

  return (
    <>
      <section style={heroStyles}>
        <div style={heroBgStyles} />
        <div style={heroOverlayStyles} />
        <div style={heroContentStyles} className="fade-in">
          <p style={heroSubtitleStyles}>Le Président Djangoun</p>
          <h1 style={heroTitleStyles}>La mode africaine réinventée</h1>
          <p style={heroDescStyles}>
            Des créations uniques alliant savoir-faire ancestral et élégance contemporaine.<br />
            L'excellence de la haute couture africaine.
          </p>
          <WhatsAppButton message="Bonjour Président, je souhaite découvrir vos créations.">
            Commander sur WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      <section style={sectionStyles}>
        <div style={containerStyles}>
          <h2 style={sectionTitleStyles}>Collections Phares</h2>
          <p style={sectionSubtitleStyles}>Nos créations les plus prisées</p>
          <div style={productGridStyles}>
            {featuredProducts.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link 
              to="/collections" 
              style={{
                display: 'inline-block',
                padding: '1rem 3rem',
                backgroundColor: 'transparent',
                color: '#0A0A0A',
                border: '1px solid #0A0A0A',
                fontSize: '0.85rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
            >
              Voir toutes les collections
            </Link>
          </div>
        </div>
      </section>

      <section style={aboutSectionStyles}>
        <div style={containerStyles}>
          <div style={aboutGridStyles}>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="Le Président Djangoun"
              style={aboutImageStyles}
            />
            <div style={aboutContentStyles}>
              <p style={{ ...sectionSubtitleStyles, textAlign: 'left', marginBottom: '1rem' }}>
                À Propos
              </p>
              <h2 style={{ ...sectionTitleStyles, textAlign: 'left', marginBottom: '1.5rem' }}>
                L'Art de la Mode Africaine
              </h2>
              <p style={{ 
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1rem',
                lineHeight: 2,
                color: '#555',
                marginBottom: '2rem'
              }}>
                Depuis plus de quinze ans, Le Président Djangoun réinvente la mode africaine. 
                Ses créations sont le fruit d'un dialogue constant entre tradition et modernité, 
                entre le wax authentique et les coupes européennes les plus raffinées.
              </p>
              <p style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.25rem',
                fontStyle: 'italic',
                color: '#B8860B',
                marginBottom: '2rem',
                lineHeight: 1.6
              }}>
                « Chaque tissu raconte une histoire. Mon travail est de la sublimer. »
              </p>
              <Link 
                to="/a-propos"
                style={{
                  display: 'inline-block',
                  padding: '1rem 2.5rem',
                  backgroundColor: '#B8860B',
                  color: '#FAFAFA',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                Découvrir mon histoire
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionStyles}>
        <div style={containerStyles}>
          <h2 style={sectionTitleStyles}>Témoignages</h2>
          <p style={sectionSubtitleStyles}>Ce que disent nos clients</p>
          <div style={testimonialGridStyles}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} style={testimonialCardStyles}>
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 1.5rem'
                  }}
                />
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  lineHeight: 1.8,
                  color: '#333',
                  marginBottom: '1.5rem'
                }}>
                  "{testimonial.text}"
                </p>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#0A0A0A',
                  marginBottom: '0.25rem'
                }}>
                  {testimonial.name}
                </p>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.8rem',
                  color: '#888'
                }}>
                  {testimonial.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={ctaSectionStyles}>
        <div style={containerStyles}>
          <h2 style={{ ...sectionTitleStyles, color: '#FAFAFA', marginBottom: '1.5rem' }}>
            Prêt à créer votre pièce unique ?
          </h2>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '1rem',
            color: 'rgba(250, 250, 250, 0.7)',
            marginBottom: '2.5rem',
            lineHeight: 1.8
          }}>
            Contactez-nous pour discuter de votre projet et créer ensemble une pièce à votre image.
          </p>
          <WhatsAppButton message="Bonjour Président, je souhaite discuter d'une création sur mesure.">
            Discuter avec le Président
          </WhatsAppButton>
        </div>
      </section>
    </>
  );
}
