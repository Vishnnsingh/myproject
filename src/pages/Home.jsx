import { Link } from 'react-router-dom';
import { ArrowRight, Code, Zap, Users, Star, CheckCircle, Play, Cpu, Brain, Sparkles, Rocket } from 'lucide-react';
import { projects, testimonials, stats } from '../data/data';
import styles from './Home.module.css';

const Home = () => {
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
            {[...Array(50)].map((_, i) => (
              <div key={i} className={styles.particle}></div>
            ))}
          </div>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Brain className={styles.heroBadgeIcon} />
            <span>AI-Powered Solutions</span>
            <Sparkles className={styles.heroBadgeSparkle} />
          </div>
          
          <h1 className={styles.heroTitle}>
            Building the Future of
            <span className={styles.gradientText}>
              {' '}Digital Innovation
            </span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            We create cutting-edge software solutions powered by AI and machine learning that transform businesses and deliver exceptional user experiences. 
            From intelligent web applications to smart mobile apps, we bring your ideas to life with the power of technology.
          </p>
          
          <div className={styles.heroButtons}>
            <Link to="/contact" className={`${styles.heroButton} ${styles.heroButtonPrimary}`}>
              <Rocket className={styles.heroButtonIcon} />
              Start Your Project
              <ArrowRight className={styles.heroButtonIcon} />
            </Link>
            <button className={`${styles.heroButton} ${styles.heroButtonSecondary}`}>
              <Play className={styles.heroButtonIcon} />
              Watch Demo
            </button>
          </div>
          
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <Cpu className={styles.heroStatIcon} />
              <span>AI-Powered</span>
            </div>
            <div className={styles.heroStat}>
              <Zap className={styles.heroStatIcon} />
              <span>Lightning Fast</span>
            </div>
            <div className={styles.heroStat}>
              <Users className={styles.heroStatIcon} />
              <span>User-Centric</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statsContent}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statValue}>
                  {stat.value}
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className={styles.servicesPreview}>
        <div className={styles.servicesContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Our Services
            </h2>
            <p className={styles.sectionSubtitle}>
              We offer comprehensive software development services to help your business thrive in the digital world.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={`${styles.serviceIcon} ${styles.serviceIconBlue}`}>
                <Code className={`${styles.serviceIconSvg} ${styles.serviceIconSvgBlue}`} />
              </div>
              <h3 className={styles.serviceTitle}>Web Development</h3>
              <p className={styles.serviceDescription}>
                Custom web applications built with modern technologies and best practices for optimal performance.
              </p>
              <Link to="/services" className={styles.serviceLink}>
                Learn More <ArrowRight className={styles.serviceLinkIcon} />
              </Link>
            </div>
            <div className={styles.serviceCard}>
              <div className={`${styles.serviceIcon} ${styles.serviceIconPurple}`}>
                <Zap className={`${styles.serviceIconSvg} ${styles.serviceIconSvgPurple}`} />
              </div>
              <h3 className={styles.serviceTitle}>Mobile Apps</h3>
              <p className={styles.serviceDescription}>
                Native and cross-platform mobile applications that deliver exceptional user experiences.
              </p>
              <Link to="/services" className={styles.serviceLink}>
                Learn More <ArrowRight className={styles.serviceLinkIcon} />
              </Link>
            </div>
            <div className={styles.serviceCard}>
              <div className={`${styles.serviceIcon} ${styles.serviceIconGreen}`}>
                <Users className={`${styles.serviceIconSvg} ${styles.serviceIconSvgGreen}`} />
              </div>
              <h3 className={styles.serviceTitle}>UI/UX Design</h3>
              <p className={styles.serviceDescription}>
                Beautiful, intuitive designs that engage users and drive business results.
              </p>
              <Link to="/services" className={styles.serviceLink}>
                Learn More <ArrowRight className={styles.serviceLinkIcon} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles.featuredProjects}>
        <div className={styles.servicesContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Featured Projects
            </h2>
            <p className={styles.sectionSubtitle}>
              Explore some of our recent work and see how we've helped businesses achieve their goals.
            </p>
          </div>
          <div className={styles.projectsGrid}>
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <div className={styles.projectImageText}>{project.name.charAt(0)}</div>
                </div>
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.name}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectTechnologies}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className={styles.technologyTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/portfolio/${project.id}`}
                    className={styles.projectLink}
                  >
                    View Project <ArrowRight className={styles.projectLinkIcon} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.viewAllButton}>
            <Link to="/portfolio" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className={styles.servicesContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              What Our Clients Say
            </h2>
            <p className={styles.sectionSubtitle}>
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={styles.star} />
                  ))}
                </div>
                <p className={styles.testimonialContent}>"{testimonial.content}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{testimonial.name}</div>
                    <div className={styles.authorPosition}>{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
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
            Let's work together to bring your ideas to life. Get in touch with us today for a free consultation.
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}>
              Get Started Today
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

export default Home;
