

# Cobertura Duplex Costa Esmeralda — Premium Landing Page

## Overview
A sophisticated, single-page real estate landing page for a luxury duplex penthouse in Florianópolis (Agronômica neighborhood). Optimized for mobile/WhatsApp sharing with elegant animations, large photography, and a premium feel.

## Design System
- **Colors**: White (#FFFFFF), off-white (#F9F7F4), warm beige (#C9B99A), charcoal (#1A1A1A), deep navy (#1B2A4A)
- **Typography**: Serif headings (Playfair Display), clean sans-serif body (Inter)
- **Style**: Generous whitespace, subtle fade-in animations on scroll, smooth section transitions
- **Mobile-first**: Full responsive design optimized for WhatsApp link opening

## Page Sections

### 1. Hero Section
- Full-screen background with the sea/skyline image from the presentation
- Overlay with headline "Cobertura Duplex Exclusiva" and subheadline about sophisticated penthouse living
- Location badge: "Agronômica, Florianópolis"
- Quick highlights row: Cobertura Duplex · Vista Privilegiada · 3 Suítes* · Espaços Amplos · Área Social no Ático
- CTA button: "Falar com Corretor"

### 2. Property Overview
- Elegant two-column layout (text + interior photo)
- Refined narrative about Costa Esmeralda: exclusivity, 208m² duplex, 282m² total area, architecture, comfort
- Key stats displayed prominently: 208m² privativa, 282m² total, 16 unidades, 2 por andar

### 3. Main Features Grid
- 6-item icon grid with elegant icons: Cobertura Duplex, Ambientes Amplos, Área Social no Ático, Vista Aberta, Suítes Confortáveis, Layout Funcional
- Footnote: "*O living no ático é reversível para uma terceira suíte."

### 4. Photo Gallery
- Masonry-style grid using actual property images from the presentation (living room, staircase, terrace, kitchen, balcony views)
- Lightbox/modal zoom on click
- All images extracted from the PPTX and copied into the project

### 5. Floorplan Section
- Title: "Planta e Distribuição dos Ambientes"
- Side-by-side display of both floor plans (Pavimento 1 & Pavimento 2/Ático)
- Labels explaining each floor's purpose
- Click-to-zoom modal

### 6. Lifestyle Section
- Aspirational copy about living in the penthouse: rooftop entertaining, natural light, privacy, Jacuzzi, sea views
- Highlight the dual-floor separation (private life below, celebration above)
- Location perks: 100m from Beira-mar Norte, near Beiramar Shopping, premium neighborhood

### 7. Market Context
- Elegant card section positioning the property as a consistent opportunity
- Language: "Uma oportunidade consistente dentro do mercado atual"
- Highlights: scarcity (16 units), prime location, high-end finishes (Formaplas, Spicy appliances)
- No mention of price reductions

### 8. Contact Section
- Dark background, elegant styling
- Title: "Agende uma Visita"
- Persuasive line: "Entre em contato para conhecer esta cobertura pessoalmente."
- WhatsApp button (opens wa.me link) + Contact button
- Placeholder fields for broker name, phone, email

## Technical Details
- All images from the PPTX copied to `src/assets/property/`
- Scroll-triggered fade-in animations using CSS/Intersection Observer
- Google Fonts: Playfair Display + Inter
- Single-page React component, no backend needed

