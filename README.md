# ACE Podcast Nation - Profile Page

A modern, responsive React TypeScript application for ACE Podcast Nation's profile page, built with Vite.

## Features

- ✨ **Responsive Design**: Mobile-first approach with adaptive layouts for all screen sizes
- 📱 **Hamburger Menu**: Smart navigation that adapts to screen size
- 🎨 **Modern UI**: Clean, professional design with smooth animations
- 🔧 **Component-Based**: Reusable components for easy customization
- ⚡ **Fast Development**: Vite for instant HMR and lightning-fast builds
- 📦 **TypeScript**: Full type safety for better code quality

## Sections

The site features seven main sections:

1. **Events** - Upcoming podcasts and events
2. **Sports** - Sports-related content and discussions
3. **Channels** - Different podcast channels
4. **Live Streaming** - Live show information
5. **About** - Information about ACE Podcast Nation
6. **Contact** - Contact form and information
7. **Footer** - Links and copyright information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone or download the repository
cd AceNationWeb

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

## Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## Customization

### Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary: #00bfff;           /* Main accent color */
  --primary-dark: #0099cc;      /* Darker accent */
  --dark-bg: #1a1a1a;           /* Dark background */
  --text-dark: #1a1a1a;         /* Dark text */
  --text-light: #666;           /* Light text */
}
```

### Navigation

Edit the navigation links in `src/components/Navbar.tsx`:

```typescript
const navLinks = [
  { label: 'Events', href: '#events' },
  { label: 'Sports', href: '#sports' },
  // Add more links as needed
]
```

### Social Media

Update social media links in `src/components/Navbar.tsx`:

```typescript
const socialLinks = [
  { icon: 'f', label: 'Facebook', href: 'https://facebook.com/...' },
  // Add more social links
]
```

### Logo

Replace the ACE placeholder logo in `src/components/Navbar.tsx` with your actual logo:

```typescript
<div className={styles.logoPlaceholder}>
  <img src={yourLogo} alt="ACE Podcast Nation" />
</div>
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Navbar.module.css   # Navbar styles
│   ├── Section.tsx         # Section wrapper
│   ├── Section.module.css  # Section styles
│   ├── Card.tsx            # Card component
│   ├── Card.module.css     # Card styles
│   └── index.ts            # Component exports
├── App.tsx                 # Main app component
├── App.css                 # Global styles
├── index.tsx               # Entry point
└── index.css               # Global CSS variables
```

## Responsive Breakpoints

- **Mobile**: 0px - 767px (Hamburger menu, 1 column)
- **Tablet**: 768px - 1023px (Expanded menu, 2 columns)
- **Desktop**: 1024px - 1199px (Full layout, 3 columns)
- **Large Desktop**: 1200px+ (Optimized layout, 4 columns)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Technologies Used

- **React 19.2** - UI library
- **TypeScript 5.9** - Type safety
- **Vite 8** - Build tool
- **CSS Modules** - Component styling
- **ESLint** - Code quality

## Next Steps

1. Replace placeholder logo with actual branding
2. Update social media icons (consider using react-icons library)
3. Fill in real content for each section
4. Add real images and media
5. Integrate contact form backend
6. Deploy to your hosting platform

## License

© 2024 ACE Podcast Nation. All rights reserved.
