import { Link } from 'react-router-dom';
import { Users, Target, Award, Heart, ArrowRight, CheckCircle, Brain, Sparkles, Cpu, Zap } from 'lucide-react';
import { team, stats } from '../data/data';
import styles from './About.module.css';

const About = () => {
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
            {[...Array(30)].map((_, i) => (
              <div key={i} className={styles.particle}></div>
            ))}
          </div>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Brain className={styles.heroBadgeIcon} />
            <span>About Our Team</span>
            <Sparkles className={styles.heroBadgeSparkle} />
          </div>
          
          <h1 className={styles.heroTitle}>
            About <span className={styles.gradientText}>TechFlow</span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            We are a passionate team of developers, designers, and innovators dedicated to creating exceptional AI-powered software solutions that transform businesses and delight users with cutting-edge technology.
          </p>
          
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <Cpu className={styles.heroStatIcon} />
              <span>AI-Powered</span>
            </div>
            <div className={styles.heroStat}>
              <Zap className={styles.heroStatIcon} />
              <span>Innovation</span>
            </div>
            <div className={styles.heroStat}>
              <Users className={styles.heroStatIcon} />
              <span>Expert Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionVision}>
        <div className={styles.missionVisionContent}>
          <div className={styles.missionVisionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <Target className={styles.missionIconSvg} />
              </div>
              <h2 className={styles.missionTitle}>Our Mission</h2>
              <p className={styles.missionDescription}>
                To empower businesses with innovative software solutions that drive growth, enhance productivity, and create meaningful connections with their customers.
              </p>
              <p className={styles.missionText}>
                We believe technology should be accessible, intuitive, and transformative. Every project we undertake is an opportunity to push boundaries and create something extraordinary.
              </p>
            </div>
            <div className={styles.visionCard}>
              <div className={styles.visionIcon}>
                <Award className={styles.visionIconSvg} />
              </div>
              <h2 className={styles.visionTitle}>Our Vision</h2>
              <p className={styles.visionDescription}>
                To be the leading software development company that sets the standard for innovation, quality, and client satisfaction in the digital world.
              </p>
              <p className={styles.visionText}>
                We envision a future where every business has access to cutting-edge technology that helps them thrive in an increasingly digital marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className={styles.valuesContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Our Values
            </h2>
            <p className={styles.sectionSubtitle}>
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={`${styles.valueIcon} ${styles.valueIconBlue}`}>
                <Users className={`${styles.valueIconSvg} ${styles.valueIconSvgBlue}`} />
              </div>
              <h3 className={styles.valueTitle}>Collaboration</h3>
              <p className={styles.valueDescription}>
                We work closely with our clients as partners, ensuring their vision becomes reality through open communication and shared goals.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={`${styles.valueIcon} ${styles.valueIconGreen}`}>
                <Award className={`${styles.valueIconSvg} ${styles.valueIconSvgGreen}`} />
              </div>
              <h3 className={styles.valueTitle}>Excellence</h3>
              <p className={styles.valueDescription}>
                We strive for excellence in every project, delivering high-quality solutions that exceed expectations and stand the test of time.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={`${styles.valueIcon} ${styles.valueIconPurple}`}>
                <Heart className={`${styles.valueIconSvg} ${styles.valueIconSvgPurple}`} />
              </div>
              <h3 className={styles.valueTitle}>Passion</h3>
              <p className={styles.valueDescription}>
                We are passionate about technology and its potential to solve problems, create opportunities, and make a positive impact.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={`${styles.valueIcon} ${styles.valueIconOrange}`}>
                <Target className={`${styles.valueIconSvg} ${styles.valueIconSvgOrange}`} />
              </div>
              <h3 className={styles.valueTitle}>Innovation</h3>
              <p className={styles.valueDescription}>
                We embrace new technologies and methodologies, constantly learning and adapting to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className={styles.statsContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Our Impact
            </h2>
            <p className={styles.sectionSubtitle}>
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>
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

      {/* Team Section */}
      <section className={styles.team} id="team">
        <div className={styles.teamContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Meet Our Team
            </h2>
            <p className={styles.sectionSubtitle}>
              The talented individuals behind TechFlow's success. We're a diverse team united by our passion for technology and innovation.
            </p>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.id} className={styles.teamCard}>
                <div className={styles.teamImage}>
                  <div className={styles.teamImageText}>{member.name.charAt(0)}</div>
                </div>
                <div className={styles.teamContent}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamPosition}>{member.position}</p>
                  <p className={styles.teamBio}>{member.bio}</p>
                  <div className={styles.teamSocial}>
                    <a href={member.social.linkedin} className={styles.socialLink}>
                      <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href={member.social.twitter} className={styles.socialLink}>
                      <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href={member.social.github} className={styles.socialLink}>
                      <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyChooseUs}>
        <div className={styles.whyChooseUsContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Why Choose TechFlow?
            </h2>
            <p className={styles.sectionSubtitle}>
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          <div className={styles.whyChooseUsGrid}>
            <div className={styles.whyChooseUsCard}>
              <div className={`${styles.whyChooseUsIcon} ${styles.whyChooseUsIconBlue}`}>
                <CheckCircle className={`${styles.whyChooseUsIconSvg} ${styles.whyChooseUsIconSvgBlue}`} />
              </div>
              <h3 className={styles.whyChooseUsTitle}>Proven Track Record</h3>
              <p className={styles.whyChooseUsDescription}>
                Over 50 successful projects delivered to satisfied clients across various industries.
              </p>
            </div>
            <div className={styles.whyChooseUsCard}>
              <div className={`${styles.whyChooseUsIcon} ${styles.whyChooseUsIconGreen}`}>
                <Award className={`${styles.whyChooseUsIconSvg} ${styles.whyChooseUsIconSvgGreen}`} />
              </div>
              <h3 className={styles.whyChooseUsTitle}>Expert Team</h3>
              <p className={styles.whyChooseUsDescription}>
                Our team consists of experienced developers, designers, and strategists with diverse expertise.
              </p>
            </div>
            <div className={styles.whyChooseUsCard}>
              <div className={`${styles.whyChooseUsIcon} ${styles.whyChooseUsIconPurple}`}>
                <Target className={`${styles.whyChooseUsIconSvg} ${styles.whyChooseUsIconSvgPurple}`} />
              </div>
              <h3 className={styles.whyChooseUsTitle}>Client-Focused</h3>
              <p className={styles.whyChooseUsDescription}>
                We prioritize your success and work closely with you throughout the entire development process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Ready to Work With Us?
          </h2>
          <p className={styles.ctaSubtitle}>
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get In Touch <ArrowRight className={styles.ctaButtonIcon} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
