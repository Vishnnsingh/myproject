import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Brain, Sparkles, Cpu, Zap, Star, Rocket } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={styles.hero}>
        {/* Animated Background Elements */}
        <div className={styles.heroBackground}>
          <div className={styles.floatingOrbs}>
            <div className={`${styles.orb} ${styles.orb1}`}></div>
            <div className={`${styles.orb} ${styles.orb2}`}></div>
            <div className={`${styles.orb} ${styles.orb3}`}></div>
            <div className={`${styles.orb} ${styles.orb4}`}></div>
          </div>
          <div className={styles.neuralNetwork}>
            <div className={styles.neuralNode}></div>
            <div className={styles.neuralNode}></div>
            <div className={styles.neuralNode}></div>
            <div className={styles.neuralNode}></div>
            <div className={styles.neuralNode}></div>
            <div className={styles.neuralNode}></div>
          </div>
          <div className={styles.particleField}>
            {[...Array(45)].map((_, i) => (
              <div key={i} className={styles.particle}></div>
            ))}
          </div>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Rocket className={styles.heroBadgeIcon} />
            <span>Let's Connect</span>
            <Sparkles className={styles.heroBadgeSparkle} />
          </div>
          
          <h1 className={styles.heroTitle}>
            Get In <span className={styles.gradientText}>Touch</span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            Ready to start your next AI-powered project? We'd love to hear from you. Send us a message and we'll respond as soon as possible with cutting-edge solutions.
          </p>
          
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <Cpu className={styles.heroStatIcon} />
              <span>AI Solutions</span>
            </div>
            <div className={styles.heroStat}>
              <Zap className={styles.heroStatIcon} />
              <span>Fast Response</span>
            </div>
            <div className={styles.heroStat}>
              <Star className={styles.heroStatIcon} />
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className={styles.contact}>
        <div className={styles.contactContent}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h2 className={styles.contactFormTitle}>Send us a message</h2>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-600">Thank you for your message. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.formLabel}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="company" className={styles.formLabel}>
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder="Your company name"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.formLabel}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="service" className={styles.formLabel}>
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={styles.formInput}
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-development">Mobile Development</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="consulting">Technology Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="budget" className={styles.formLabel}>
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={styles.formInput}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">Over $100,000</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.formTextarea}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <button type="submit" className={styles.formButton}>
                    Send Message <Send className={styles.formButtonIcon} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <h2 className={styles.contactInfoTitle}>Contact Information</h2>
              <p className={styles.contactInfoDescription}>
                Get in touch with us through any of the following methods. We're here to help with your project needs.
              </p>
              <div className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                  <div className={styles.contactMethodIcon}>
                    <Mail className={styles.contactMethodIconSvg} />
                  </div>
                  <div className={styles.contactMethodInfo}>
                    <h3 className={styles.contactMethodTitle}>Email</h3>
                    <p className={styles.contactMethodValue}>hello@techflow.com</p>
                    <p className={styles.contactMethodValue}>support@techflow.com</p>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.contactMethodIcon}>
                    <Phone className={styles.contactMethodIconSvg} />
                  </div>
                  <div className={styles.contactMethodInfo}>
                    <h3 className={styles.contactMethodTitle}>Phone</h3>
                    <p className={styles.contactMethodValue}>+1 (555) 123-4567</p>
                    <p className={styles.contactMethodValue}>Mon-Fri 9AM-6PM PST</p>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.contactMethodIcon}>
                    <MapPin className={styles.contactMethodIconSvg} />
                  </div>
                  <div className={styles.contactMethodInfo}>
                    <h3 className={styles.contactMethodTitle}>Office</h3>
                    <p className={styles.contactMethodValue}>
                      123 Innovation Street<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.faqContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Frequently Asked Questions
            </h2>
            <p className={styles.sectionSubtitle}>
              Quick answers to common questions about our services and process.
            </p>
          </div>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                How long does a typical project take?
              </h3>
              <p className={styles.faqAnswer}>
                Project timelines vary depending on complexity and scope. Simple websites typically take 4-8 weeks, 
                while complex applications can take 3-6 months. We provide detailed timelines during the consultation phase.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Do you provide ongoing support after launch?
              </h3>
              <p className={styles.faqAnswer}>
                Yes! We offer comprehensive maintenance and support packages to ensure your application continues 
                to perform optimally. This includes bug fixes, updates, and feature enhancements.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                What technologies do you work with?
              </h3>
              <p className={styles.faqAnswer}>
                We work with a wide range of modern technologies including React, Vue.js, Node.js, Python, 
                React Native, Flutter, and cloud platforms like AWS and Google Cloud.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
