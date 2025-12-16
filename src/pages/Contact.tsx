import { useState } from 'react';
import type { CSSProperties, FormEvent } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Bonjour Président,\n\nJe suis ${formData.name}.\n\n${formData.message}`
    );
    window.open(`https://wa.me/22990000000?text=${whatsappMessage}`, '_blank');
  };

  const headerStyles: CSSProperties = {
    paddingTop: '10rem',
    paddingBottom: '4rem',
    textAlign: 'center',
    backgroundColor: '#f8f7f5'
  };

  const titleStyles: CSSProperties = {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 400,
    color: '#0A0A0A',
    marginBottom: '1rem'
  };

  const subtitleStyles: CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 400,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: '#B8860B'
  };

  const sectionStyles: CSSProperties = {
    padding: '6rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const gridStyles: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
    gap: '4rem'
  };

  const infoSectionStyles: CSSProperties = {
    padding: '2rem 0'
  };

  const infoTitleStyles: CSSProperties = {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.5rem',
    fontWeight: 500,
    color: '#0A0A0A',
    marginBottom: '2rem'
  };

  const infoItemStyles: CSSProperties = {
    marginBottom: '2rem'
  };

  const infoLabelStyles: CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: '#B8860B',
    marginBottom: '0.5rem'
  };

  const infoValueStyles: CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '1rem',
    color: '#333',
    lineHeight: 1.6
  };

  const linkStyles: CSSProperties = {
    color: '#0A0A0A',
    textDecoration: 'none',
    transition: 'color 0.3s ease'
  };

  const formStyles: CSSProperties = {
    backgroundColor: '#fff',
    padding: '3rem',
    boxShadow: '0 2px 30px rgba(0, 0, 0, 0.05)'
  };

  const formTitleStyles: CSSProperties = {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.5rem',
    fontWeight: 500,
    color: '#0A0A0A',
    marginBottom: '2rem'
  };

  const inputGroupStyles: CSSProperties = {
    marginBottom: '1.5rem'
  };

  const labelStyles: CSSProperties = {
    display: 'block',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#333',
    marginBottom: '0.5rem'
  };

  const inputStyles: CSSProperties = {
    width: '100%',
    padding: '1rem',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '1rem',
    border: '1px solid #ddd',
    backgroundColor: '#fafafa',
    transition: 'border-color 0.3s ease',
    outline: 'none'
  };

  const textareaStyles: CSSProperties = {
    ...inputStyles,
    minHeight: '150px',
    resize: 'vertical'
  };

  const submitButtonStyles: CSSProperties = {
    width: '100%',
    padding: '1rem 2rem',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    backgroundColor: '#25D366',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem'
  };

  return (
    <>
      <header style={headerStyles}>
        <p style={subtitleStyles}>Prenez Contact</p>
        <h1 style={titleStyles}>Contact</h1>
      </header>

      <section style={sectionStyles}>
        <div style={gridStyles}>
          <div style={infoSectionStyles}>
            <h2 style={infoTitleStyles}>Restons en contact</h2>
            
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '1rem',
              lineHeight: 2,
              color: '#555',
              marginBottom: '3rem'
            }}>
              Pour toute question, demande de devis ou projet de création sur mesure, 
              n'hésitez pas à nous contacter. Nous serons ravis de vous accompagner 
              dans votre projet.
            </p>

            <div style={infoItemStyles}>
              <p style={infoLabelStyles}>WhatsApp</p>
              <a 
                href="https://wa.me/22990000000" 
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyles}
              >
                <p style={infoValueStyles}>+229 90 00 00 00</p>
              </a>
            </div>

            <div style={infoItemStyles}>
              <p style={infoLabelStyles}>Email</p>
              <a href="mailto:contact@presidentdjangoun.com" style={linkStyles}>
                <p style={infoValueStyles}>contact@presidentdjangoun.com</p>
              </a>
            </div>

            <div style={infoItemStyles}>
              <p style={infoLabelStyles}>Instagram</p>
              <a 
                href="https://instagram.com/presidentdjangoun" 
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyles}
              >
                <p style={infoValueStyles}>@presidentdjangoun</p>
              </a>
            </div>

            <div style={infoItemStyles}>
              <p style={infoLabelStyles}>Atelier</p>
              <p style={infoValueStyles}>
                Quartier Haie Vive<br />
                Cotonou, Bénin
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <WhatsAppButton message="Bonjour Président, je vous contacte depuis votre site web.">
                Contacter sur WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          <div>
            <form style={formStyles} onSubmit={handleSubmit}>
              <h2 style={formTitleStyles}>Envoyez-nous un message</h2>
              
              <div style={inputGroupStyles}>
                <label style={labelStyles} htmlFor="name">Votre nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  style={inputStyles}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Entrez votre nom"
                />
              </div>

              <div style={inputGroupStyles}>
                <label style={labelStyles} htmlFor="message">Votre message</label>
                <textarea
                  id="message"
                  name="message"
                  style={textareaStyles}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>

              <button type="submit" style={submitButtonStyles}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Envoyer via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
