# Le Président Djangoun - Site Vitrine Mode Luxe

## Overview
Site vitrine élégant et haut de gamme pour Le Président Djangoun, créateur de mode béninois spécialisé dans les créations en wax africain moderne (Homme & Femme).

## Tech Stack
- **Framework**: React 19 avec TypeScript
- **Build Tool**: Vite 7
- **Routing**: React Router DOM
- **Styling**: CSS Modules / CSS moderne (Flexbox + Grid)
- **Typography**: Google Fonts (Playfair Display + Montserrat)

## Project Structure
```
src/
├── assets/images/         # Images assets
├── components/            # Composants réutilisables
│   ├── Navbar.tsx         # Navigation principale
│   ├── Footer.tsx         # Pied de page
│   ├── ProductCard.tsx    # Carte produit
│   ├── WhatsAppButton.tsx # Bouton WhatsApp
│   └── ScrollToTop.tsx    # Scroll automatique
├── pages/                 # Pages de l'application
│   ├── Home.tsx           # Page d'accueil
│   ├── Collections.tsx    # Collections produits
│   ├── ProductDetail.tsx  # Détail produit
│   ├── About.tsx          # À propos
│   ├── Contact.tsx        # Contact
│   └── NotFound.tsx       # Page 404
├── data/
│   └── products.ts        # Données produits
├── router/
│   └── index.tsx          # Configuration routes
├── styles/
│   ├── globals.css        # Styles globaux
│   └── variables.css      # Variables CSS
├── App.tsx                # Composant racine
└── main.tsx               # Point d'entrée
```

## Routes
- `/` - Accueil
- `/collections` - Collections
- `/produit/:slug` - Détail produit
- `/a-propos` - À propos
- `/contact` - Contact

## Color Palette
- Or: #B8860B
- Marron wax: #8B4513
- Noir profond: #0A0A0A
- Blanc cassé: #FAFAFA

## Development
```bash
npm run dev
```
Server runs on port 5000.

## Build
```bash
npm run build
```
Output in `dist` directory.

## Deployment
Configured as static site deployment using the `dist` directory.
