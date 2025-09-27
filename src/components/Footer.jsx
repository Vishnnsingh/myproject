import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Web Development', href: '/services#web' },
      { name: 'Mobile Apps', href: '/services#mobile' },
      { name: 'UI/UX Design', href: '/services#design' },
      { name: 'Consulting', href: '/services#consulting' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/portfolio' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Support', href: '/support' },
    ],
  };

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Facebook', href: '#', icon: Facebook },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.companyInfo}>
            <Link to="/" className={styles.footerLogo}>
              <div className={styles.footerLogoIcon}>
                <Code className={styles.socialIcon} />
              </div>
              <span className={styles.footerLogoText}>TechFlow</span>
            </Link>
            <p className={styles.companyDescription}>
              We build innovative software solutions that transform businesses and create exceptional digital experiences.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={styles.socialLink}
                    aria-label={social.name}
                  >
                    <Icon className={styles.socialIcon} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Company</h3>
            <ul className={styles.footerLinks}>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className={styles.footerLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Services</h3>
            <ul className={styles.footerLinks}>
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className={styles.footerLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Resources</h3>
            <ul className={styles.footerLinks}>
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className={styles.footerLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <Mail className={styles.contactIcon} />
              <span className={styles.contactText}>hello@techflow.com</span>
            </div>
            <div className={styles.contactItem}>
              <Phone className={styles.contactIcon} />
              <span className={styles.contactText}>+1 (555) 123-4567</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin className={styles.contactIcon} />
              <span className={styles.contactText}>San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p className={styles.copyrightText}>
            © {currentYear} TechFlow. All rights reserved. Built with ❤️ for innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
