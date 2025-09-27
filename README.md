# TechFlow - Software Company Website

A modern, responsive software company website built with React, featuring dynamic routing, beautiful UI components, and comprehensive content management.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by modern software companies
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dynamic Routing**: React Router for seamless navigation between pages
- **Component-Based Architecture**: Reusable components for maintainable code
- **Modern CSS**: Tailwind CSS for utility-first styling with custom components
- **Interactive Elements**: Smooth animations and hover effects
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header with mobile menu
│   └── Footer.jsx      # Footer with links and contact info
├── layouts/            # Layout components
│   └── MainLayout.jsx  # Main layout wrapper
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About us page
│   ├── Services.jsx    # Services overview
│   ├── Portfolio.jsx   # Project portfolio
│   ├── Blog.jsx        # Blog listing
│   ├── Contact.jsx     # Contact form
│   ├── BlogPost.jsx    # Individual blog post
│   └── ProjectDetail.jsx # Individual project detail
├── data/               # Sample data
│   └── data.js         # Projects, blog posts, team data
├── styles/             # Additional styles
├── App.jsx             # Main app component with routing
├── main.jsx            # App entry point
├── index.css           # Tailwind CSS imports and custom styles
└── App.css             # Additional custom styles
```

## 🛠️ Technologies Used

- **React 19** - Modern React with latest features
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and dev server

## 🎨 Design Features

### Color Scheme
- Primary: Blue gradient (#3B82F6 to #9333EA)
- Secondary: Purple gradient
- Neutral: Gray scale for text and backgrounds
- Accent: Green for success states

### Typography
- Font: Inter (Google Fonts)
- Responsive text sizing
- Proper hierarchy with semantic HTML

### Components
- **Header**: Sticky navigation with mobile menu
- **Hero Sections**: Eye-catching gradients and animations
- **Cards**: Consistent shadow and hover effects
- **Buttons**: Gradient backgrounds with hover states
- **Forms**: Clean, accessible form styling

## 📱 Pages Overview

### Home Page
- Hero section with call-to-action
- Services preview
- Featured projects
- Client testimonials
- Statistics showcase

### About Page
- Company mission and vision
- Team member profiles
- Company values
- Why choose us section

### Services Page
- Detailed service descriptions
- Development process
- Technology stack
- Key features for each service

### Portfolio Page
- Project filtering by category
- Project cards with details
- Statistics and impact metrics
- Call-to-action sections

### Blog Page
- Featured blog post
- Blog post grid
- Newsletter signup
- Related articles

### Contact Page
- Contact form with validation
- Company contact information
- FAQ section
- Response time information

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd myproject
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎯 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Header.jsx`

### Modifying Content
- Update `src/data/data.js` for projects, blog posts, and team data
- Modify individual page components for static content

### Styling
- Use Tailwind classes for quick styling
- Add custom styles in `src/App.css`
- Modify `tailwind.config.js` for theme customization

## 📊 Performance Features

- **Code Splitting**: Automatic code splitting with React Router
- **Lazy Loading**: Components loaded on demand
- **Optimized Images**: Placeholder images with proper sizing
- **CSS Optimization**: Tailwind CSS purging for smaller bundle size

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Content Management

The website uses a data-driven approach with content stored in `src/data/data.js`. This makes it easy to:

- Add new projects to the portfolio
- Create new blog posts
- Update team information
- Modify service offerings

## 🌟 Future Enhancements

- [ ] CMS integration (Strapi, Contentful)
- [ ] Blog post editor
- [ ] Contact form backend integration
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Dark mode toggle
- [ ] Multi-language support

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact us at hello@techflow.com

---

Built with ❤️ by TechFlow Team