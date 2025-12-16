export interface Product {
  id: number;
  slug: string;
  name: string;
  category: 'Homme' | 'Femme';
  price: number;
  priceFormatted: string;
  description: string;
  details: string[];
  sizes: string[];
  images: string[];
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'ensemble-royal-wax',
    name: 'Ensemble Royal Wax',
    category: 'Homme',
    price: 85000,
    priceFormatted: '85 000 FCFA',
    description: 'Un ensemble deux pièces confectionné dans un wax premium aux motifs géométriques traditionnels. Coupe moderne et ajustée, parfait pour les occasions spéciales.',
    details: [
      'Wax 100% coton premium',
      'Doublure intérieure en soie',
      'Boutons en nacre véritable',
      'Couture artisanale main'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://i.ibb.co/CpTJNWh2/MG-1142.jpg',
      'https://i.ibb.co/GQZcN24f/MG-1147.jpg',
      'https://i.ibb.co/MxdyhC6y/MG-1160.jpg'
    ],
    featured: true
  },
  {
    id: 2,
    slug: 'robe-elegance-africaine',
    name: 'Robe Élégance Africaine',
    category: 'Femme',
    price: 75000,
    priceFormatted: '75 000 FCFA',
    description: 'Robe longue fluide en wax aux tons chauds. Design épuré mettant en valeur les motifs traditionnels dans une silhouette contemporaine.',
    details: [
      'Wax authentique tissé main',
      'Coupe évasée flatteuse',
      'Fermeture invisible',
      'Finitions haute couture'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://i.ibb.co/rr2VS6v/MG-8500.jpg',
      'https://i.ibb.co/4ZS7nKDf/MG-8513.jpg',
      'https://i.ibb.co/1YcrkpyH/MG-8514.jpg'
    ],
    featured: true
  },
  {
    id: 3,
    slug: 'chemise-president',
    name: 'Chemise Le Président',
    category: 'Homme',
    price: 45000,
    priceFormatted: '45 000 FCFA',
    description: 'Chemise signature de la maison, alliant le savoir-faire béninois aux standards européens. Wax exclusif aux motifs subtils.',
    details: [
      'Col français moderne',
      'Wax léger premium',
      'Coupe slim contemporaine',
      'Poignets mousquetaires'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://i.ibb.co/RpQGR6vj/MG-8522.jpg',
      'https://i.ibb.co/gF9NVVFK/MG-8530.jpg',
      'https://i.ibb.co/vxQVx2nM/MG-8618-2.jpg'
    ],
    featured: true
  },
  {
    id: 4,
    slug: 'ensemble-bogolan-femme',
    name: 'Ensemble Bogolan Moderne',
    category: 'Femme',
    price: 95000,
    priceFormatted: '95 000 FCFA',
    description: 'Ensemble deux pièces inspiré du bogolan malien, réinterprété dans une vision contemporaine. Pièce unique et audacieuse.',
    details: [
      'Bogolan authentique',
      'Techniques ancestrales',
      'Design exclusif Djangoun',
      'Pièce numérotée'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://i.ibb.co/7dNN8ZWf/MG-8632-1.jpg',
      'https://i.ibb.co/v40cVzRK/MG-9360.jpg',
      'https://i.ibb.co/4w4ZLFJ2/IMG-0021.jpg'
    ],
    featured: true
  },
  {
    id: 5,
    slug: 'veste-heritage',
    name: 'Veste Héritage',
    category: 'Homme',
    price: 120000,
    priceFormatted: '120 000 FCFA',
    description: 'Veste d\'exception, fusion parfaite entre tailleur européen et textiles africains. Une pièce d\'investissement.',
    details: [
      'Coupe structurée',
      'Wax et lin mélangés',
      'Doublure signature',
      'Fabrication sur mesure possible'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://i.ibb.co/PGBc8Tzv/IMG-0026.jpg',
      'https://i.ibb.co/N22nVNff/IMG-0028.jpg',
      'https://i.ibb.co/CpTJNWh2/MG-1142.jpg'
    ],
    featured: true
  },
  {
    id: 6,
    slug: 'robe-cocktail-or',
    name: 'Robe Cocktail Dorée',
    category: 'Femme',
    price: 65000,
    priceFormatted: '65 000 FCFA',
    description: 'Robe cocktail aux reflets dorés, parfaite pour les soirées élégantes. Alliance subtile de tradition et modernité.',
    details: [
      'Wax aux fils dorés',
      'Coupe ajustée',
      'Longueur midi',
      'Dos ouvert raffiné'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://i.ibb.co/GQZcN24f/MG-1147.jpg',
      'https://i.ibb.co/MxdyhC6y/MG-1160.jpg',
      'https://i.ibb.co/rr2VS6v/MG-8500.jpg'
    ],
    featured: true
  },
  {
    id: 7,
    slug: 'costume-ambassadeur',
    name: 'Costume Ambassadeur',
    category: 'Homme',
    price: 150000,
    priceFormatted: '150 000 FCFA',
    description: 'Le costume trois pièces ultime. Wax discret intégré aux détails, pour l\'homme qui incarne l\'excellence africaine.',
    details: [
      'Laine mérinos italienne',
      'Détails wax signature',
      'Gilet assorti',
      'Sur mesure disponible'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://i.ibb.co/4ZS7nKDf/MG-8513.jpg',
      'https://i.ibb.co/1YcrkpyH/MG-8514.jpg',
      'https://i.ibb.co/RpQGR6vj/MG-8522.jpg'
    ],
    featured: false
  },
  {
    id: 8,
    slug: 'tunique-sahel',
    name: 'Tunique Sahel',
    category: 'Homme',
    price: 55000,
    priceFormatted: '55 000 FCFA',
    description: 'Tunique ample et élégante inspirée des tenues sahéliennes. Confort absolu et allure distinguée.',
    details: [
      'Coton égyptien',
      'Broderies artisanales',
      'Coupe ample',
      'Poches dissimulées'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://i.ibb.co/gF9NVVFK/MG-8530.jpg',
      'https://i.ibb.co/vxQVx2nM/MG-8618-2.jpg',
      'https://i.ibb.co/7dNN8ZWf/MG-8632-1.jpg'
    ],
    featured: false
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const testimonials = [
  {
    id: 1,
    name: 'Aminata Diallo',
    role: 'Directrice Artistique, Paris',
    text: 'Le Président Djangoun a créé ma tenue pour les Fashion Awards. Une pièce magistrale qui a fait sensation sur le tapis rouge.',
    image: 'https://i.ibb.co/rr2VS6v/MG-8500.jpg'
  },
  {
    id: 2,
    name: 'Kofi Mensah',
    role: 'Entrepreneur, Accra',
    text: 'Chaque costume du Président raconte une histoire. Je ne porte plus que ses créations pour mes réunions internationales.',
    image: 'https://i.ibb.co/CpTJNWh2/MG-1142.jpg'
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    role: 'Journaliste Mode, Vogue Afrique',
    text: 'Djangoun représente l\'avenir de la mode africaine : sophistiquée, consciente de ses racines, résolument moderne.',
    image: 'https://i.ibb.co/4ZS7nKDf/MG-8513.jpg'
  }
];
