import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Calendar, User, Tag, Brain, Sparkles, Cpu, Zap, Star, Rocket } from 'lucide-react';
import { projects } from '../data/data';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const categories = ['All', 'Web Development', 'Mobile Development', 'AI/ML', 'IoT'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            {[...Array(35)].map((_, i) => (
              <div key={i} className={styles.particle}></div>
            ))}
          </div>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Star className={styles.heroBadgeIcon} />
            <span>Our Portfolio</span>
            <Sparkles className={styles.heroBadgeSparkle} />
          </div>
          
          <h1 className={styles.heroTitle}>
            Our <span className={styles.gradientText}>Portfolio</span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            Explore our recent AI-powered projects and see how we've helped businesses achieve their goals through innovative software solutions and cutting-edge technology.
          </p>
          
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <Rocket className={styles.heroStatIcon} />
              <span>50+ Projects</span>
            </div>
            <div className={styles.heroStat}>
              <Zap className={styles.heroStatIcon} />
              <span>AI-Powered</span>
            </div>
            <div className={styles.heroStat}>
              <Cpu className={styles.heroStatIcon} />
              <span>Innovation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className={styles.filter}>
        <div className={styles.filterContent}>
          <div className={styles.filterButtons}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${styles.filterButton} ${
                  selectedCategory === category ? styles.active : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={styles.projects}>
        <div className={styles.projectsContent}>
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <div className={styles.projectImageText}>{project.name.charAt(0)}</div>
                </div>
                <div className={styles.projectContent}>
                  <div className={styles.projectCategory}>
                    {project.category}
                  </div>
                  <h3 className={styles.projectTitle}>{project.name}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  
                  <div className={styles.projectMeta}>
                    <div className={styles.metaItem}>
                      <User className={styles.metaIcon} />
                      <span>{project.client}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Calendar className={styles.metaIcon} />
                      <span>{project.year}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Tag className={styles.metaIcon} />
                      <span>{project.technologies.length} Technologies</span>
                    </div>
                  </div>
                  
                  <div className={styles.projectTechnologies}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className={styles.technologyTag}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={styles.technologyTag}>
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className={styles.projectActions}>
                    <Link
                      to={`/portfolio/${project.id}`}
                      className={`${styles.projectButton} ${styles.projectButtonPrimary}`}
                    >
                      View Project <ArrowRight className={styles.projectButtonIcon} />
                    </Link>
                    <a
                      href={project.liveUrl}
                      className={`${styles.projectButton} ${styles.projectButtonSecondary}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className={styles.projectButtonIcon} />
                      Live Site
                    </a>
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
            Let's work together to create something amazing. Get in touch with us today for a free consultation.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Start Your Project <ArrowRight className={styles.ctaButtonIcon} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
