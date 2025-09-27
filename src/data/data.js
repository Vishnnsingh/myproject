// Sample data for the website
export const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "A modern e-commerce platform with advanced features like real-time inventory, payment processing, and analytics dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    image: "/api/placeholder/400/300",
    category: "Web Development",
    client: "TechStore Inc.",
    year: "2024",
    status: "Completed",
    features: [
      "Real-time inventory management",
      "Secure payment processing",
      "Advanced analytics dashboard",
      "Mobile-responsive design",
      "Admin panel with full control"
    ]
  },
  {
    id: 2,
    name: "Healthcare Mobile App",
    description: "A comprehensive healthcare mobile application for patient management, appointment scheduling, and telemedicine.",
    technologies: ["React Native", "Firebase", "Node.js", "PostgreSQL"],
    image: "/api/placeholder/400/300",
    category: "Mobile Development",
    client: "HealthCare Plus",
    year: "2024",
    status: "In Progress",
    features: [
      "Patient profile management",
      "Appointment scheduling",
      "Telemedicine video calls",
      "Prescription management",
      "Health records tracking"
    ]
  },
  {
    id: 3,
    name: "SaaS Dashboard",
    description: "A comprehensive SaaS dashboard for project management with team collaboration features and real-time updates.",
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Redis"],
    image: "/api/placeholder/400/300",
    category: "Web Development",
    client: "ProjectFlow",
    year: "2023",
    status: "Completed",
    features: [
      "Project management tools",
      "Team collaboration features",
      "Real-time notifications",
      "Advanced reporting",
      "Third-party integrations"
    ]
  },
  {
    id: 4,
    name: "AI-Powered Analytics",
    description: "An AI-powered analytics platform that provides insights and predictions for business intelligence.",
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "Docker"],
    image: "/api/placeholder/400/300",
    category: "AI/ML",
    client: "DataInsights Corp",
    year: "2024",
    status: "Completed",
    features: [
      "Machine learning predictions",
      "Real-time data processing",
      "Interactive visualizations",
      "Custom report generation",
      "API integrations"
    ]
  },
  {
    id: 5,
    name: "Fintech Mobile App",
    description: "A secure fintech mobile application for digital banking with advanced security features.",
    technologies: ["Flutter", "Node.js", "MongoDB", "Blockchain"],
    image: "/api/placeholder/400/300",
    category: "Mobile Development",
    client: "SecureBank",
    year: "2023",
    status: "Completed",
    features: [
      "Secure authentication",
      "Digital wallet",
      "Transaction history",
      "Investment tracking",
      "Biometric security"
    ]
  },
  {
    id: 6,
    name: "IoT Monitoring System",
    description: "An IoT monitoring system for industrial equipment with real-time alerts and predictive maintenance.",
    technologies: ["React", "Node.js", "MQTT", "InfluxDB", "Grafana"],
    image: "/api/placeholder/400/300",
    category: "IoT",
    client: "IndustrialTech",
    year: "2024",
    status: "In Progress",
    features: [
      "Real-time monitoring",
      "Predictive maintenance",
      "Alert system",
      "Data visualization",
      "Mobile notifications"
    ]
  }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStore Inc.",
    content: "TechFlow delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise made all the difference."
  },
  {
    name: "Michael Chen",
    position: "CTO, HealthCare Plus",
    content: "Working with TechFlow has been a game-changer for our healthcare app. They understood our complex requirements and delivered a solution that our users love."
  },
  {
    name: "Emily Rodriguez",
    position: "Founder, ProjectFlow",
    content: "The SaaS dashboard TechFlow built for us has revolutionized how we manage projects. The user experience is intuitive and the performance is outstanding."
  },
  {
    name: "David Kim",
    position: "Head of Product, DataInsights Corp",
    content: "TechFlow's AI-powered analytics platform has given us insights we never had before. Their machine learning expertise is truly impressive."
  },
  {
    name: "Lisa Thompson",
    position: "VP Engineering, SecureBank",
    content: "Security was our top priority, and TechFlow delivered a fintech app that meets the highest security standards while providing an excellent user experience."
  },
  {
    name: "Robert Wilson",
    position: "Operations Director, IndustrialTech",
    content: "The IoT monitoring system has helped us prevent equipment failures and reduce downtime significantly. TechFlow's expertise in IoT is unmatched."
  }
];

export const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "25+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" }
];

export const services = [
  {
    id: "web",
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices for optimal performance and scalability.",
    icon: "Code",
    features: [
      "Responsive web design",
      "Progressive Web Apps (PWA)",
      "E-commerce solutions",
      "Content Management Systems",
      "API development and integration",
      "Performance optimization"
    ],
    technologies: ["React", "Vue.js", "Angular", "Node.js", "Python", "PHP"]
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    icon: "Smartphone",
    features: [
      "iOS and Android development",
      "Cross-platform solutions",
      "UI/UX design",
      "App store optimization",
      "Push notifications",
      "Offline functionality"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"]
  },
  {
    id: "design",
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that engage users and drive business results through exceptional user experiences.",
    icon: "Palette",
    features: [
      "User research and analysis",
      "Wireframing and prototyping",
      "Visual design",
      "Usability testing",
      "Design systems",
      "Brand identity"
    ],
    technologies: ["Figma", "Sketch", "Adobe XD", "InVision", "Principle"]
  },
  {
    id: "consulting",
    title: "Technology Consulting",
    description: "Strategic technology consulting to help you make informed decisions and optimize your digital transformation.",
    icon: "Lightbulb",
    features: [
      "Technology strategy",
      "Architecture planning",
      "Digital transformation",
      "Process optimization",
      "Team training",
      "Code reviews"
    ],
    technologies: ["Cloud Architecture", "DevOps", "Microservices", "Security"]
  }
];

export const blogPosts = [
  {
    id: 1,
    slug: "building-scalable-web-applications",
    title: "Building Scalable Web Applications: Best Practices and Patterns",
    excerpt: "Learn the essential patterns and practices for building web applications that can handle growth and scale effectively.",
    content: `
      <h2>Introduction</h2>
      <p>Building scalable web applications is crucial for modern businesses. As your user base grows, your application needs to handle increased load while maintaining performance and reliability.</p>
      
      <h2>Key Principles</h2>
      <h3>1. Microservices Architecture</h3>
      <p>Breaking down your application into smaller, independent services allows for better scalability and maintainability.</p>
      
      <h3>2. Database Optimization</h3>
      <p>Proper database design, indexing, and query optimization are essential for handling large amounts of data efficiently.</p>
      
      <h3>3. Caching Strategies</h3>
      <p>Implementing effective caching at multiple levels can significantly improve performance and reduce server load.</p>
      
      <h3>4. Load Balancing</h3>
      <p>Distributing traffic across multiple servers ensures high availability and better performance.</p>
      
      <h2>Conclusion</h2>
      <p>Scalability is not just about handling more users; it's about building a system that can grow with your business while maintaining performance and reliability.</p>
    `,
    author: "John Smith",
    date: "2024-01-15",
    category: "Web Development",
    tags: ["Scalability", "Architecture", "Performance"],
    readTime: "5 min read",
    image: "/api/placeholder/800/400"
  },
  {
    id: 2,
    slug: "mobile-app-design-trends-2024",
    title: "Mobile App Design Trends to Watch in 2024",
    excerpt: "Explore the latest mobile app design trends that will shape user experiences in 2024 and beyond.",
    content: `
      <h2>Introduction</h2>
      <p>Mobile app design continues to evolve rapidly, with new trends emerging each year. Staying ahead of these trends is crucial for creating engaging user experiences.</p>
      
      <h2>Top Trends for 2024</h2>
      <h3>1. Dark Mode Design</h3>
      <p>Dark mode has become a standard feature that users expect, providing better battery life and reduced eye strain.</p>
      
      <h3>2. Micro-interactions</h3>
      <p>Subtle animations and micro-interactions enhance user engagement and provide feedback for user actions.</p>
      
      <h3>3. Voice User Interface</h3>
      <p>Voice commands and interactions are becoming more prevalent, especially for accessibility and hands-free usage.</p>
      
      <h3>4. Augmented Reality Integration</h3>
      <p>AR features are being integrated into more apps, providing immersive experiences for users.</p>
      
      <h2>Conclusion</h2>
      <p>These trends reflect the industry's focus on user experience, accessibility, and innovative technology integration.</p>
    `,
    author: "Sarah Johnson",
    date: "2024-01-10",
    category: "Design",
    tags: ["Mobile", "Design", "UX", "Trends"],
    readTime: "4 min read",
    image: "/api/placeholder/800/400"
  },
  {
    id: 3,
    slug: "ai-integration-software-development",
    title: "Integrating AI into Software Development: A Practical Guide",
    excerpt: "Learn how to effectively integrate artificial intelligence into your software development process and applications.",
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence is transforming software development, offering new possibilities for automation, personalization, and intelligent decision-making.</p>
      
      <h2>AI Integration Strategies</h2>
      <h3>1. Automated Testing</h3>
      <p>AI can help generate test cases and identify potential issues before they reach production.</p>
      
      <h3>2. Code Generation</h3>
      <p>AI-powered tools can assist developers in writing code more efficiently and with fewer errors.</p>
      
      <h3>3. User Behavior Analysis</h3>
      <p>AI can analyze user behavior patterns to provide personalized experiences and recommendations.</p>
      
      <h3>4. Predictive Analytics</h3>
      <p>Implementing AI for predictive analytics can help businesses make data-driven decisions.</p>
      
      <h2>Best Practices</h2>
      <p>When integrating AI, it's important to start small, focus on specific use cases, and ensure proper data privacy and security measures.</p>
      
      <h2>Conclusion</h2>
      <p>AI integration requires careful planning and consideration, but the benefits can be significant for both development efficiency and user experience.</p>
    `,
    author: "Michael Chen",
    date: "2024-01-05",
    category: "AI/ML",
    tags: ["AI", "Machine Learning", "Development", "Automation"],
    readTime: "6 min read",
    image: "/api/placeholder/800/400"
  }
];

export const team = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO & Founder",
    bio: "John has over 10 years of experience in software development and has led teams at major tech companies.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CTO",
    bio: "Sarah is a technology visionary with expertise in cloud architecture and scalable systems design.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Lead Developer",
    bio: "Michael specializes in full-stack development and has a passion for creating innovative solutions.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "UI/UX Designer",
    bio: "Emily creates beautiful and intuitive user experiences that delight users and drive business results.",
    image: "/api/placeholder/300/300",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#"
    }
  }
];
