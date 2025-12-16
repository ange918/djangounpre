export interface Product {
  id: number;
  slug: string;
  name: string;
  category: 'Homme' | 'Femme' | 'Mixte';
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
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80'
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
      'https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=800&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80'
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
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
      'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80'
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
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80'
    ],
    featured: true
  },
  {
    id: 5,
    slug: 'veste-heritage',
    name: 'Veste Héritage',
    category: 'Mixte',
    price: 120000,
    priceFormatted: '120 000 FCFA',
    description: 'Veste unisexe d\'exception, fusion parfaite entre tailleur européen et textiles africains. Une pièce d\'investissement.',
    details: [
      'Coupe structurée',
      'Wax et lin mélangés',
      'Doublure signature',
      'Fabrication sur mesure possible'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80'
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
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&q=80'
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
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80'
    ],
    featured: false
  },
  {
    id: 8,
    slug: 'tunique-sahel',
    name: 'Tunique Sahel',
    category: 'Mixte',
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
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'
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
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80'
  },
  {
    id: 2,
    name: 'Kofi Mensah',
    role: 'Entrepreneur, Accra',
    text: 'Chaque costume du Président raconte une histoire. Je ne porte plus que ses créations pour mes réunions internationales.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80'
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    role: 'Journaliste Mode, Vogue Afrique',
    text: 'Djangoun représente l\'avenir de la mode africaine : sophistiquée, consciente de ses racines, résolument moderne.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80'
  }
];
