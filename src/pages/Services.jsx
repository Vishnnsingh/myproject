import { Link } from 'react-router-dom';
import { Code, Smartphone, Palette, Lightbulb, ArrowRight, CheckCircle, Star, Brain, Sparkles, Cpu, Zap, Rocket } from 'lucide-react';
import { services } from '../data/data';
import styles from './Services.module.css';

const Services = () => {
  const iconMap = {
    Code,
    Smartphone,
    Palette,
    Lightbulb
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
            {[...Array(25)].map((_, i) => (
              <div key={i} className={styles.particle}></div>
            ))}
          </div>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Cpu className={styles.heroBadgeIcon} />
            <span>Our Services</span>
            <Sparkles className={styles.heroBadgeSparkle} />
          </div>
          
          <h1 className={styles.heroTitle}>
            Our <span className={styles.gradientText}>Services</span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            We offer comprehensive AI-powered software development services to help your business thrive in the digital world. 
            From concept to deployment, we're your trusted technology partner with cutting-edge solutions.
          </p>
          
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <Rocket className={styles.heroStatIcon} />
              <span>Fast Delivery</span>
            </div>
            <div className={styles.heroStat}>
              <Zap className={styles.heroStatIcon} />
              <span>AI-Powered</span>
            </div>
            <div className={styles.heroStat}>
              <Star className={styles.heroStatIcon} />
              <span>Quality Assured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.services}>
        <div className={styles.servicesContent}>
          <div className={styles.servicesGrid}>
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={service.id} className={styles.serviceCard}>
                  <div className={styles.serviceHeader}>
                    <div className={styles.serviceIcon}>
                      <Icon className={styles.serviceIconSvg} />
                    </div>
                    <div className={styles.serviceInfo}>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                      <p className={styles.serviceDescription}>{service.description}</p>
                      
                      <div className={styles.featuresSection}>
                        <h4 className={styles.featuresTitle}>Key Features:</h4>
                        <ul className={styles.featuresList}>
                          {service.features.map((feature, index) => (
                            <li key={index} className={styles.featureItem}>
                              <CheckCircle className={styles.featureIcon} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.technologiesSection}>
                        <h4 className={styles.technologiesTitle}>Technologies:</h4>
                        <div className={styles.technologiesList}>
                          {service.technologies.map((tech) => (
                            <span key={tech} className={styles.technologyTag}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link to="/contact" className={styles.serviceLink}>
                        Get Started <ArrowRight className={styles.serviceLinkIcon} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className={styles.processContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Our Development Process
            </h2>
            <p className={styles.sectionSubtitle}>
              We follow a proven methodology that ensures quality, transparency, and successful project delivery.
            </p>
          </div>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={`${styles.processNumber} ${styles.processNumber1}`}>
                <span>1</span>
              </div>
              <h3 className={styles.processTitle}>Discovery</h3>
              <p className={styles.processDescription}>
                We start by understanding your business goals, requirements, and target audience to create a solid foundation.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={`${styles.processNumber} ${styles.processNumber2}`}>
                <span>2</span>
              </div>
              <h3 className={styles.processTitle}>Planning</h3>
              <p className={styles.processDescription}>
                We create a detailed project plan with timelines, milestones, and deliverables to ensure smooth execution.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={`${styles.processNumber} ${styles.processNumber3}`}>
                <span>3</span>
              </div>
              <h3 className={styles.processTitle}>Development</h3>
              <p className={styles.processDescription}>
                Our expert team builds your solution using agile methodologies with regular updates and feedback loops.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={`${styles.processNumber} ${styles.processNumber4}`}>
                <span>4</span>
              </div>
              <h3 className={styles.processTitle}>Launch</h3>
              <p className={styles.processDescription}>
                We deploy your solution and provide ongoing support to ensure optimal performance and user satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className={styles.whyChooseUs}>
        <div className={styles.whyChooseUsContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Why Choose Our Services?
            </h2>
            <p className={styles.sectionSubtitle}>
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          <div className={styles.whyChooseUsGrid}>
            <div className={styles.whyChooseUsCard}>
              <div className={`${styles.whyChooseUsIcon} ${styles.whyChooseUsIconBlue}`}>
                <Star className={`${styles.whyChooseUsIconSvg} ${styles.whyChooseUsIconSvgBlue}`} />
              </div>
              <h3 className={styles.whyChooseUsTitle}>Quality Assurance</h3>
              <p className={styles.whyChooseUsDescription}>
                Every project undergoes rigorous testing and quality checks to ensure it meets the highest standards.
              </p>
            </div>
            <div className={styles.whyChooseUsCard}>
              <div className={`${styles.whyChooseUsIcon} ${styles.whyChooseUsIconGreen}`}>
                <CheckCircle className={`${styles.whyChooseUsIconSvg} ${styles.whyChooseUsIconSvgGreen}`} />
              </div>
              <h3 className={styles.whyChooseUsTitle}>On-Time Delivery</h3>
              <p className={styles.whyChooseUsDescription}>
                We respect deadlines and deliver projects on time without compromising on quality or functionality.
              </p>
            </div>
            <div className={styles.whyChooseUsCard}>
              <div className={`${styles.whyChooseUsIcon} ${styles.whyChooseUsIconPurple}`}>
                <Lightbulb className={`${styles.whyChooseUsIconSvg} ${styles.whyChooseUsIconSvgPurple}`} />
              </div>
              <h3 className={styles.whyChooseUsTitle}>Innovation</h3>
              <p className={styles.whyChooseUsDescription}>
                We stay ahead of technology trends and implement cutting-edge solutions that give you a competitive edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Ready to Start Your Project?
          </h2>
          <p className={styles.ctaSubtitle}>
            Let's discuss your requirements and create a custom solution that meets your business needs.
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}>
              Get Free Consultation
            </Link>
            <Link to="/portfolio" className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}>
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
