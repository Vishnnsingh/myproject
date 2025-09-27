import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, Zap, Users, Briefcase, MessageSquare, Home, Brain, Sparkles, Rocket } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Zap },
    { name: 'Portfolio', href: '/portfolio', icon: Briefcase },
    { name: 'Blog', href: '/blog', icon: MessageSquare },
    { name: 'Contact', href: '/contact', icon: MessageSquare },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      {/* Animated Background */}
      <div className={styles.headerBackground}>
        <div className={styles.headerParticles}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={styles.particle}></div>
          ))}
        </div>
        <div className={styles.headerGlow}></div>
      </div>
      
      <div className={styles.headerContent}>
        {/* Enhanced Logo */}
        <Link to="/" className={styles.logo}>
          <div className={styles.logoContainer}>
            <div className={styles.logoIcon}>
              <Brain className={styles.logoIconSvg} />
              <div className={styles.logoGlow}></div>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>TechFlow</span>
              <span className={styles.logoSub}>AI</span>
            </div>
            <Sparkles className={styles.logoSparkle} />
          </div>
        </Link>

        {/* Enhanced Desktop Navigation */}
        <nav className={styles.nav}>
          {navigation.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.navLinkContent}>
                  <Icon className={styles.navIcon} />
                  <span className={styles.navText}>{item.name}</span>
                  <div className={styles.navHover}></div>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Enhanced CTA Button */}
        <Link to="/contact" className={styles.ctaButton}>
          <Rocket className={styles.ctaIcon} />
          <span>Get Started</span>
          <div className={styles.ctaGlow}></div>
        </Link>

        {/* Enhanced Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`${styles.mobileMenuButton} ${isMenuOpen ? styles.active : ''}`}
        >
          <div className={styles.mobileMenuIcon}>
            {isMenuOpen ? (
              <X className={styles.navIcon} />
            ) : (
              <Menu className={styles.navIcon} />
            )}
          </div>
          <div className={styles.mobileMenuGlow}></div>
        </button>
      </div>

      {/* Enhanced Mobile Navigation */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuBackground}></div>
          <div className={styles.mobileMenuContent}>
            {navigation.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${styles.mobileNavLink} ${isActive(item.href) ? styles.active : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.mobileNavLinkContent}>
                    <Icon className={styles.mobileNavIcon} />
                    <span className={styles.mobileNavText}>{item.name}</span>
                    <div className={styles.mobileNavHover}></div>
                  </div>
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={styles.mobileCtaButton}
            >
              <Rocket className={styles.mobileCtaIcon} />
              <span>Get Started</span>
              <div className={styles.mobileCtaGlow}></div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
