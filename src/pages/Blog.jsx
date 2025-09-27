import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight, Tag, Brain, Sparkles, Cpu, Zap, Star, Rocket } from 'lucide-react';
import { blogPosts } from '../data/data';
import styles from './Blog.module.css';

const Blog = () => {
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
            {[...Array(40)].map((_, i) => (
              <div key={i} className={styles.particle}></div>
            ))}
          </div>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Brain className={styles.heroBadgeIcon} />
            <span>Tech Insights</span>
            <Sparkles className={styles.heroBadgeSparkle} />
          </div>
          
          <h1 className={styles.heroTitle}>
            Our <span className={styles.gradientText}>Blog</span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            Stay updated with the latest trends in AI-powered software development, technology insights, and industry best practices from our expert team.
          </p>
          
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <Cpu className={styles.heroStatIcon} />
              <span>AI Insights</span>
            </div>
            <div className={styles.heroStat}>
              <Zap className={styles.heroStatIcon} />
              <span>Tech Trends</span>
            </div>
            <div className={styles.heroStat}>
              <Star className={styles.heroStatIcon} />
              <span>Expert Tips</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className={styles.featuredPost}>
        <div className={styles.featuredPostContent}>
          <div className={styles.featuredPostCard}>
            <div className={styles.featuredPostImage}>
              <div className={styles.featuredPostImageText}>{blogPosts[0].title.charAt(0)}</div>
            </div>
            <div className={styles.featuredPostContent}>
              <div className={styles.featuredPostCategory}>
                {blogPosts[0].category}
              </div>
              <h2 className={styles.featuredPostTitle}>
                {blogPosts[0].title}
              </h2>
              <p className={styles.featuredPostExcerpt}>
                {blogPosts[0].excerpt}
              </p>
              <div className={styles.featuredPostMeta}>
                <div className={styles.featuredPostAuthor}>
                  <User className="h-4 w-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className={styles.featuredPostDate}>
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                </div>
              </div>
              <Link
                to={`/blog/${blogPosts[0].slug}`}
                className={styles.featuredPostLink}
              >
                Read More <ArrowRight className={styles.featuredPostLinkIcon} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className={styles.blogPosts}>
        <div className={styles.blogPostsContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Latest Articles
            </h2>
            <p className={styles.sectionSubtitle}>
              Discover insights, tutorials, and industry trends from our team of experts.
            </p>
          </div>
          <div className={styles.blogPostsGrid}>
            {blogPosts.map((post) => (
              <article key={post.id} className={styles.blogPostCard}>
                <div className={styles.blogPostImage}>
                  <div className={styles.blogPostImageText}>{post.title.charAt(0)}</div>
                </div>
                <div className={styles.blogPostContent}>
                  <div className={styles.blogPostCategory}>
                    {post.category}
                  </div>
                  <h3 className={styles.blogPostTitle}>
                    {post.title}
                  </h3>
                  <p className={styles.blogPostExcerpt}>
                    {post.excerpt}
                  </p>
                  <div className={styles.blogPostMeta}>
                    <div className={styles.blogPostAuthor}>
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className={styles.blogPostDate}>
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className={styles.blogPostLink}
                  >
                    Read More <ArrowRight className={styles.blogPostLinkIcon} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h2 className={styles.newsletterTitle}>
            Stay Updated
          </h2>
          <p className={styles.newsletterSubtitle}>
            Subscribe to our newsletter and never miss the latest insights, tutorials, and industry updates.
          </p>
          <div className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.newsletterInput}
            />
            <button className={styles.newsletterButton}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Have a Project in Mind?
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

export default Blog;
