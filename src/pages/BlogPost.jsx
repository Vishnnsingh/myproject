import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react';
import { blogPosts } from '../data/data';
import styles from './BlogPost.module.css';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundContent}>
          <h1 className={styles.notFoundTitle}>Post Not Found</h1>
          <p className={styles.notFoundText}>The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className={styles.notFoundButton}
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.blogPost}>
      {/* Back Button */}
      <div className={styles.backButtonSection}>
        <div className={styles.backButtonContent}>
          <Link
            to="/blog"
            className={styles.backButton}
          >
            <ArrowLeft className={styles.backButtonIcon} />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className={styles.articleHeader}>
        <div className={styles.articleHeaderContent}>
          <div className={styles.articleHeaderInner}>
            <div className={styles.articleMeta}>
              <span className={styles.articleCategory}>
                {post.category}
              </span>
              <span className={styles.articleReadTime}>{post.readTime}</span>
            </div>
            <h1 className={styles.articleTitle}>
              {post.title}
            </h1>
            <p className={styles.articleExcerpt}>
              {post.excerpt}
            </p>
            <div className={styles.articleDetails}>
              <div className={styles.articleDetail}>
                <User className={styles.articleDetailIcon} />
                <span>{post.author}</span>
              </div>
              <div className={styles.articleDetail}>
                <Calendar className={styles.articleDetailIcon} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className={styles.articleDetail}>
                <Clock className={styles.articleDetailIcon} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className={styles.articleImageSection}>
        <div className={styles.articleImageContent}>
          <div className={styles.articleImage}>
            <div className={styles.articleImageText}>{post.title.charAt(0)}</div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className={styles.articleContent}>
        <div className={styles.articleContentInner}>
          <div className={styles.articleProse}>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className={styles.tagsSection}>
        <div className={styles.tagsContent}>
          <div className={styles.tagsHeader}>
            <Tag className={styles.tagsIcon} />
            <span className={styles.tagsLabel}>Tags:</span>
            <div className={styles.tagsList}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className={styles.authorBio}>
        <div className={styles.authorBioContent}>
          <div className={styles.authorBioInner}>
            <div className={styles.authorAvatar}>
              <span className={styles.authorAvatarText}>{post.author.charAt(0)}</span>
            </div>
            <div className={styles.authorInfo}>
              <h3 className={styles.authorName}>About {post.author}</h3>
              <p className={styles.authorDescription}>
                {post.author} is a passionate developer and writer with expertise in modern web technologies. 
                They love sharing knowledge and helping others grow in their development journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className={styles.relatedPosts}>
        <div className={styles.relatedPostsContent}>
          <h3 className={styles.relatedPostsTitle}>Related Articles</h3>
          <div className={styles.relatedPostsGrid}>
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className={styles.relatedPostCard}
                >
                  <div className={styles.relatedPostImage}>
                    <div className={styles.relatedPostImageText}>{relatedPost.title.charAt(0)}</div>
                  </div>
                  <div className={styles.relatedPostContent}>
                    <h4 className={styles.relatedPostTitle}>
                      {relatedPost.title}
                    </h4>
                    <p className={styles.relatedPostExcerpt}>
                      {relatedPost.excerpt}
                    </p>
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
          <Link
            to="/contact"
            className={styles.ctaButton}
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
