# Modern Portfolio Website

A clean, stylistic portfolio website built with Next.js, featuring smooth animations, dark mode design, and mobile-first responsive layout.

## ✨ Features

- **Modern Design**: Clean and stylistic interface with dark mode
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Mobile-First**: Fully responsive design optimized for all devices
- **Component Library**: Built with shadcn/ui for consistent styling
- **Performance**: Optimized for fast loading and smooth interactions
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with profile photo placeholder
2. **About Me**: Personal story, values, and achievements
3. **Tech Stack**: Comprehensive showcase of skills and technologies
4. **Projects**: Featured project portfolio with detailed information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone [your-repo-url]
cd nextjs-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Personal Information

Update the following files to customize with your information:

- `src/components/sections/HeroSection.tsx` - Name, title, and bio
- `src/components/sections/AboutSection.tsx` - Personal story and achievements
- `src/components/sections/TechStackSection.tsx` - Skills and technologies
- `src/components/sections/ProjectsSection.tsx` - Portfolio projects
- `src/app/layout.tsx` - Meta information and SEO

### Profile Photo

Replace the placeholder in `HeroSection.tsx`:

```tsx
<AvatarImage src="/path-to-your-photo.jpg" alt="Your Name" />
<AvatarFallback>YI</AvatarFallback> {/* Your initials */}
```

### Color Scheme

Customize colors in `src/app/globals.css` by modifying the CSS variables in the `:root` and `.dark` selectors.

### Navigation

Update navigation items in `src/components/Navigation.tsx`:

```tsx
const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    // Add more sections...
];
```

## 📱 Mobile Responsiveness

The portfolio is built mobile-first with responsive breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components automatically adapt to different screen sizes.

## 🎯 Performance Optimizations

- **Code Splitting**: Automatic with Next.js App Router
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Next.js Font optimization
- **Smooth Scrolling**: CSS and JavaScript scroll behavior
- **Efficient Animations**: Framer Motion with optimized renders

## 📦 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── Navigation.tsx       # Header navigation
│   └── sections/            # Page sections
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── TechStackSection.tsx
│       └── ProjectsSection.tsx
└── lib/
    └── utils.ts             # Utility functions
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- Heroku
- AWS Amplify
- DigitalOcean App Platform

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out or open an issue.
