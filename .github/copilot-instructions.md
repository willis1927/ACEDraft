# ACE Podcast Nation - React TypeScript App

## Project Overview
A modern, responsive React TypeScript application built with Vite for ACE Podcast Nation's profile page. The app features a mobile-first design with a responsive hamburger navigation menu.

## Key Features
- **Responsive Navigation Bar**: Fixed navbar with logo placeholder, centered navigation links, and social media icons
- **Mobile-First Design**: Hamburger menu on mobile that expands to horizontal navigation on larger screens
- **Content Sections**: Events, Sports, Channels, Live Streaming, About, and Contact sections
- **Reusable Components**: Section and Card components for flexible content management
- **Modern Styling**: CSS Modules for component-scoped styling with responsive breakpoints

## Project Structure
```
src/
├── components/
│   ├── Navbar.tsx              # Main navigation component with hamburger menu
│   ├── Navbar.module.css        # Responsive navbar styles
│   ├── Section.tsx              # Reusable section wrapper component
│   ├── Section.module.css       # Section component styles
│   ├── Card.tsx                 # Content card component
│   ├── Card.module.css          # Card component styles
│   └── index.ts                 # Component exports
├── App.tsx                       # Main app component with all sections
├── App.css                       # Global app styles including grid layouts
├── index.tsx                     # Application entry point
├── index.css                     # Global CSS variables and base styles
└── vite-env.d.ts               # Vite type definitions

public/
└── vite.svg                     # Vite logo

package.json                      # Project dependencies and scripts
vite.config.ts                    # Vite configuration
tsconfig.json                     # TypeScript configuration
```

## Development Setup

### Prerequisites
- Node.js 18+ and npm

### Installation & Running
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Responsive Breakpoints
- **Mobile**: Default (0px and above) - Hamburger menu, single column layout
- **Tablet**: 768px and above - 2-column grid, horizontal navigation links
- **Desktop**: 1024px and above - 3-column grid, full navbar with social icons
- **Large Desktop**: 1200px and above - 4-column grid, optimized spacing

## Customization Guide

### Colors
Edit the CSS variables in `src/index.css`:
- `--primary`: Main accent color (default: #00bfff)
- `--dark-bg`: Dark background (default: #1a1a1a)
- `--text-dark`: Dark text (default: #1a1a1a)

### Navigation Links
Edit the `navLinks` array in `src/components/Navbar.tsx` to add/remove navigation items.

### Social Media Links
Edit the `socialLinks` array in `src/components/Navbar.tsx` to customize social media links. Current icons are placeholder letters (f, t, i, y).

### Sections
Add new sections in `src/App.tsx` using the `Section` and `Card` components.

## Styling Notes
- Uses CSS Modules for component-scoped styling
- Mobile-first responsive design approach
- Smooth transitions and hover effects for better UX
- Customizable grid layouts that adapt to content

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Next Steps
1. Replace placeholder logo with actual ACE Podcast Nation logo
2. Replace placeholder social media icons with actual icons (consider using a library like react-icons)
3. Connect navigation links to actual sections/pages
4. Integrate contact form with backend submission
5. Add real content and images
6. Customize color scheme to match brand guidelines
