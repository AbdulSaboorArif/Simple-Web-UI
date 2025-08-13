# AutoFlow Website

A modern, responsive website for AutoFlow - an open-source automation platform, built with Next.js and Tailwind CSS.

## Features

- 🎨 **Dark Theme Design** - Based on the Figma design with cosmic/starry background
- ⚡ **Next.js 14** - Built with the latest Next.js features and App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid development
- 📱 **Responsive Design** - Mobile-first approach with responsive breakpoints
- ✨ **Interactive Elements** - Hover effects, animations, and smooth transitions
- 🌟 **Custom Animations** - Glowing effects and star animations

## Design Inspiration

This website is based on the [AutoFlow Figma design](https://www.figma.com/design/OW81zolP9Bjc05A2weCQ8B/AutoFlow?node-id=0-1&p=f&t=jYPqbFICP18OBC0H-0) featuring:
- Dark cosmic theme with starry background
- Purple and blue glowing elements
- Modern typography with script font for branding
- Clean, minimalist interface

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd autoflow-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page component
├── components/
│   ├── Header.tsx           # Navigation header component
│   └── Hero.tsx             # Hero section component
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- `autoflow-purple`: Primary brand color
- `autoflow-dark`: Dark background color
- `autoflow-blue`: Accent blue color

### Fonts
The Dancing Script font is imported from Google Fonts for the AutoFlow branding text.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

