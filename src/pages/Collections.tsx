import { useState } from 'react';
import type { CSSProperties } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

type CategoryFilter = 'Tous' | 'Homme' | 'Femme' | 'Mixte';

export default function Collections() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('Tous');

  const filteredProducts = activeFilter === 'Tous' 
    ? products 
    : products.filter(p => p.category === activeFilter);

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
    fontSize: '1rem',
    fontWeight: 300,
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.8
  };

  const sectionStyles: CSSProperties = {
    padding: '4rem 2rem',
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const filterContainerStyles: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '4rem',
    flexWrap: 'wrap'
  };

  const filterButtonStyles = (isActive: boolean): CSSProperties => ({
    padding: '0.75rem 2rem',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    border: '1px solid',
    borderColor: isActive ? '#B8860B' : '#0A0A0A',
    backgroundColor: isActive ? '#B8860B' : 'transparent',
    color: isActive ? '#FAFAFA' : '#0A0A0A',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  });

  const gridStyles: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem'
  };

  const filters: CategoryFilter[] = ['Tous', 'Homme', 'Femme', 'Mixte'];

  return (
    <>
      <header style={headerStyles}>
        <h1 style={titleStyles}>Collections</h1>
        <p style={subtitleStyles}>
          Explorez l'univers du Président Djangoun. Des pièces uniques alliant 
          tradition africaine et élégance contemporaine.
        </p>
      </header>

      <section style={sectionStyles}>
        <div style={filterContainerStyles}>
          {filters.map((filter) => (
            <button
              key={filter}
              style={filterButtonStyles(activeFilter === filter)}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div style={gridStyles}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p style={{ textAlign: 'center', color: '#666', padding: '4rem 0' }}>
            Aucun produit trouvé dans cette catégorie.
          </p>
        )}
      </section>
    </>
  );
}
