import { CSSProperties } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

export default function About() {
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
    gap: '4rem',
    alignItems: 'center',
    marginBottom: '6rem'
  };

  const imageStyles: CSSProperties = {
    width: '100%',
    aspectRatio: '4/5',
    objectFit: 'cover'
  };

  const contentStyles: CSSProperties = {
    padding: '2rem 0'
  };

  const paragraphStyles: CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '1rem',
    lineHeight: 2,
    color: '#555',
    marginBottom: '1.5rem'
  };

  const quoteStyles: CSSProperties = {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontStyle: 'italic',
    color: '#B8860B',
    textAlign: 'center',
    lineHeight: 1.6,
    padding: '4rem 2rem',
    backgroundColor: '#f8f7f5',
    margin: '4rem 0'
  };

  const valuesGridStyles: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginTop: '4rem'
  };

  const valueCardStyles: CSSProperties = {
    padding: '2.5rem',
    backgroundColor: '#fff',
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.05)',
    textAlign: 'center'
  };

  const valueTitleStyles: CSSProperties = {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.25rem',
    fontWeight: 500,
    color: '#0A0A0A',
    marginBottom: '1rem'
  };

  const valueTextStyles: CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.9rem',
    lineHeight: 1.8,
    color: '#666'
  };

  const ctaSectionStyles: CSSProperties = {
    padding: '6rem 2rem',
    backgroundColor: '#0A0A0A',
    textAlign: 'center'
  };

  return (
    <>
      <header style={headerStyles}>
        <p style={subtitleStyles}>Notre Histoire</p>
        <h1 style={titleStyles}>À Propos</h1>
      </header>

      <section style={sectionStyles}>
        <div style={gridStyles}>
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
            alt="Le Président Djangoun"
            style={imageStyles}
          />
          <div style={contentStyles}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2rem',
              fontWeight: 400,
              color: '#0A0A0A',
              marginBottom: '2rem'
            }}>
              Le Président Djangoun
            </h2>
            <p style={paragraphStyles}>
              Né à Cotonou, au cœur du Bénin, Le Président Djangoun a grandi entouré 
              des couleurs vibrantes et des motifs audacieux du wax africain. Dès son 
              plus jeune âge, il a été fasciné par le pouvoir transformateur du vêtement.
            </p>
            <p style={paragraphStyles}>
              Après une formation rigoureuse auprès des maîtres tailleurs béninois et 
              un passage remarqué dans les ateliers parisiens, il fonde sa maison de 
              couture en 2010. Sa mission : réconcilier l'élégance européenne avec 
              l'âme africaine.
            </p>
            <p style={paragraphStyles}>
              Aujourd'hui, ses créations habillent hommes et femmes d'affaires, 
              artistes et dignitaires à travers le monde. Chaque pièce est une 
              déclaration : l'Afrique est source d'excellence.
            </p>
          </div>
        </div>

        <blockquote style={quoteStyles}>
          « Mon travail est un pont entre les mondes. Je ne crée pas seulement des 
          vêtements, je tisse des histoires qui traversent les frontières. »
        </blockquote>

        <div style={gridStyles}>
          <div style={contentStyles}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2rem',
              fontWeight: 400,
              color: '#0A0A0A',
              marginBottom: '2rem'
            }}>
              Une Vision Unique
            </h2>
            <p style={paragraphStyles}>
              Le Président Djangoun croit en une mode qui raconte. Ses collections 
              puisent dans le patrimoine textile ouest-africain tout en embrassant 
              les codes de la haute couture internationale.
            </p>
            <p style={paragraphStyles}>
              Du choix méticuleux des wax authentiques à la coupe précise de chaque 
              vêtement, rien n'est laissé au hasard. Chaque création est pensée pour 
              sublimer celui ou celle qui la porte.
            </p>
            <p style={paragraphStyles}>
              Ses ateliers à Cotonou emploient une trentaine d'artisans qualifiés, 
              perpétuant des techniques ancestrales tout en les enrichissant de 
              techniques modernes.
            </p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
            alt="Atelier du Président Djangoun"
            style={imageStyles}
          />
        </div>

        <div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2rem',
            fontWeight: 400,
            color: '#0A0A0A',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            Nos Valeurs
          </h2>
          <p style={{
            ...subtitleStyles,
            display: 'block',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            Ce qui nous guide
          </p>

          <div style={valuesGridStyles}>
            <div style={valueCardStyles}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>◆</div>
              <h3 style={valueTitleStyles}>Excellence</h3>
              <p style={valueTextStyles}>
                Chaque détail compte. De la sélection des tissus aux finitions, 
                nous visons la perfection.
              </p>
            </div>
            <div style={valueCardStyles}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>◆</div>
              <h3 style={valueTitleStyles}>Authenticité</h3>
              <p style={valueTextStyles}>
                Nos créations célèbrent l'héritage africain tout en l'inscrivant 
                dans la modernité.
              </p>
            </div>
            <div style={valueCardStyles}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>◆</div>
              <h3 style={valueTitleStyles}>Savoir-faire</h3>
              <p style={valueTextStyles}>
                Nous perpétuons les techniques artisanales béninoises, transmises 
                de génération en génération.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={ctaSectionStyles}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 400,
          color: '#FAFAFA',
          marginBottom: '1.5rem'
        }}>
          Créons ensemble votre histoire
        </h2>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '1rem',
          color: 'rgba(250, 250, 250, 0.7)',
          marginBottom: '2.5rem',
          lineHeight: 1.8,
          maxWidth: '600px',
          margin: '0 auto 2.5rem'
        }}>
          Contactez Le Président Djangoun pour discuter de votre projet de création sur mesure.
        </p>
        <WhatsAppButton message="Bonjour Président, je souhaite discuter d'un projet de création.">
          Contacter le Président
        </WhatsAppButton>
      </section>
    </>
  );
}
