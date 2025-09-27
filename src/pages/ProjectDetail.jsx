import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag, CheckCircle, ArrowRight } from 'lucide-react';
import { projects } from '../data/data';
import styles from './ProjectDetail.module.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundContent}>
          <h1 className={styles.notFoundTitle}>Project Not Found</h1>
          <p className={styles.notFoundText}>The project you're looking for doesn't exist.</p>
          <Link
            to="/portfolio"
            className={styles.notFoundButton}
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.projectDetail}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroGrid}>
            <div className={styles.heroInfo}>
              <div className={styles.projectCategory}>
                {project.category}
              </div>
              <h1 className={styles.projectTitle}>
                {project.name}
              </h1>
              <p className={styles.projectDescription}>
                {project.longDescription}
              </p>
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
              <div className={styles.projectActions}>
                <a
                  href={project.liveUrl}
                  className={`${styles.projectButton} ${styles.projectButtonPrimary}`}
                >
                  View Live Site <ExternalLink className={styles.projectButtonIcon} />
                </a>
                <a
                  href={project.githubUrl}
                  className={`${styles.projectButton} ${styles.projectButtonSecondary}`}
                >
                  <Github className={styles.projectButtonIcon} />
                  View Code
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.heroImageContainer}>
                <div className={styles.heroImageText}>{project.name.charAt(0)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className={styles.projectDetails}>
        <div className={styles.projectDetailsContent}>
          <div className={styles.detailsGrid}>
            <div className={styles.detailsMain}>
              <div className={styles.detailsSection}>
                <h2 className={styles.detailsSectionTitle}>Project Overview</h2>
                <div className={styles.detailsSectionContent}>
                  <p>
                    This project represents a significant milestone in our client's digital transformation journey. 
                    We worked closely with {project.client} to understand their unique requirements and deliver a 
                    solution that not only meets their current needs but also scales with their future growth.
                  </p>
                  <p>
                    The project involved extensive research, planning, and execution to ensure that every aspect 
                    of the solution was optimized for performance, usability, and maintainability. Our team 
                    leveraged cutting-edge technologies and best practices to deliver exceptional results.
                  </p>
                </div>
              </div>
              <div className={styles.technologiesSection}>
                <h3 className={styles.technologiesTitle}>Technologies Used</h3>
                <div className={styles.technologiesList}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.technologyTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.detailsSidebar}>
              <div className={styles.sidebar}>
                <div className={styles.sidebarSection}>
                  <h3 className={styles.sidebarTitle}>Project Details</h3>
                  <div className={styles.sidebarItem}>
                    <span className={styles.sidebarLabel}>Client:</span>
                    <span className={styles.sidebarValue}>{project.client}</span>
                  </div>
                  <div className={styles.sidebarItem}>
                    <span className={styles.sidebarLabel}>Category:</span>
                    <span className={styles.sidebarValue}>{project.category}</span>
                  </div>
                  <div className={styles.sidebarItem}>
                    <span className={styles.sidebarLabel}>Year:</span>
                    <span className={styles.sidebarValue}>{project.year}</span>
                  </div>
                  <div className={styles.sidebarItem}>
                    <span className={styles.sidebarLabel}>Status:</span>
                    <span className={styles.sidebarValue}>{project.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className={styles.keyFeatures}>
        <div className={styles.keyFeaturesContent}>
          <h2 className={styles.keyFeaturesTitle}>Key Features</h2>
          <div className={styles.keyFeaturesGrid}>
            {project.features.map((feature, index) => (
              <div key={index} className={styles.keyFeatureItem}>
                <CheckCircle className={styles.keyFeatureIcon} />
                <span className={styles.keyFeatureText}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className={styles.technologiesUsed}>
        <div className={styles.technologiesUsedContent}>
          <h2 className={styles.technologiesUsedTitle}>Technologies Used</h2>
          <div className={styles.technologiesUsedList}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.technologyBadge}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.gallery}>
        <div className={styles.galleryContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Project Gallery</h2>
            <p className={styles.sectionSubtitle}>
              Explore the visual journey of this project from concept to completion.
            </p>
          </div>
          <div className={styles.galleryGrid}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={styles.galleryItem}>
                <div className={styles.galleryImage}>
                  Screenshot {i}
                </div>
                <div className={styles.galleryContent}>
                  <h3 className={styles.galleryTitle}>Project Screenshot {i}</h3>
                  <p className={styles.galleryDescription}>
                    A detailed view of the project's key features and functionality.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className={styles.relatedProjects}>
        <div className={styles.relatedProjectsContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Related Projects</h2>
            <p className={styles.sectionSubtitle}>
              Explore more projects in the same category to see our diverse portfolio.
            </p>
          </div>
          <div className={styles.relatedProjectsGrid}>
            {projects
              .filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/portfolio/${relatedProject.id}`}
                  className={styles.relatedProjectCard}
                >
                  <div className={styles.relatedProjectImage}>
                    {relatedProject.name.charAt(0)}
                  </div>
                  <div className={styles.relatedProjectContent}>
                    <div className={styles.relatedProjectCategory}>
                      {relatedProject.category}
                    </div>
                    <h3 className={styles.relatedProjectTitle}>{relatedProject.name}</h3>
                    <p className={styles.relatedProjectDescription}>{relatedProject.description}</p>
                    <div className={styles.relatedProjectLink}>
                      View Project <ArrowRight className={styles.relatedProjectLinkIcon} />
                    </div>
                  </div>
                </Link>
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
            Let's discuss how we can help bring your ideas to life with our expertise and passion for innovation.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get In Touch <ArrowRight className={styles.ctaButtonIcon} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
