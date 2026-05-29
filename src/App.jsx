import React, { useState } from "react";
import { motion } from "framer-motion";

const profile = {
  name: "Loay Magdy Ibrahim",
  role: "Data Scientist",
  email: "loaymagdy.ds@gmail.com",
  phone: "+20 1152682158",
  location: "Cairo, Egypt",
  linkedin: "https://www.linkedin.com/in/loay-magdy",
  github: "https://github.com/loaymagdy38",
  resume: "/Loay_Magdy_Ibrahim_CV.pdf",
  photo: "/assets/profile-photo.jpg",
  heroPhoto: "/assets/profile-suit.png",
};

const projects = [
  {
    title: "TrustScan — AI Product Fraud Detector",
    category: "Deep Learning | NLP | Computer Vision",
    description:
      "Multi-model AI system for detecting suspicious e-commerce products using text analysis, image quality checks, seller behavior, reviews, pricing signals, and explainable risk reasons.",
    stack: ["Python", "TensorFlow", "NLP", "Computer Vision", "Streamlit", "SHAP"],
    github: "https://github.com/loaymagdy38/AI-Powered-Fraud-Detection-for-E-Commerce",
    icon: "brain",
    cover: "/projects/trustscan-fake.png",
    gallery: [
      "/projects/trustscan-fake.png",
      "/projects/trustscan-fake-reasons.png",
      "/projects/trustscan-trusted.png",
      "/projects/trustscan-trusted-reasons.png",
    ],
  },
  {
    title: "Hybrid Movie Recommendation System",
    category: "BERT | PageRank | HITS | Association Rules",
    description:
      "Hybrid recommendation engine combining BERT semantic similarity, graph-based ranking, FP-Growth association rules, personalized recommendations, and interactive Streamlit analytics.",
    stack: ["Python", "BERT", "PageRank", "HITS", "FP-Growth", "Streamlit", "Plotly"],
    github: "https://github.com/loaymagdy38/Movie-Recommendation-System",
    icon: "chart",
    cover: "/projects/movie-dashboard.png",
    gallery: [
      "/projects/movie-dashboard.png",
      "/projects/movie-bert.png",
      "/projects/movie-personalized.png",
      "/projects/movie-scatter.png",
      "/projects/movie-network.png",
      "/projects/movie-rules.png",
    ],
  },
  {
    title: "Customer Credit Card Clustering Analysis",
    category: "Machine Learning | Clustering",
    description:
      "Segmented credit card customers using K-Means and DBSCAN after preprocessing, outlier treatment, PCA visualization, elbow analysis, and clustering evaluation.",
    stack: ["Python", "Scikit-learn", "KMeans", "DBSCAN", "PCA", "EDA"],
    github: "https://github.com/loaymagdy38/customer-segmentation-kmeans-dbscan",
    icon: "database",
    cover: "/projects/clustering-dbscan.png",
    gallery: [
      "/projects/clustering-boxplot-before.png",
      "/projects/clustering-boxplot-after.png",
      "/projects/clustering-elbow.png",
      "/projects/clustering-kdistance.png",
      "/projects/clustering-dbscan.png",
    ],
  },
  {
    title: "Online Course Engagement Dashboard",
    category: "Power BI | Data Analytics",
    description:
      "Interactive Power BI dashboard for tracking course completion, engagement metrics, device usage, category performance, and learner behavior insights.",
    stack: ["Power BI", "Data Analysis", "KPIs", "Dashboard", "Business Intelligence"],
    github: "https://github.com/loaymagdy38/Online-Course-Engagement-Analysis",
    icon: "dashboard",
    cover: "/projects/course-dashboard.png",
    gallery: ["/projects/course-dashboard.png"],
  },
  {
    title: "Car Type Classification using CNNs",
    category: "Deep Learning | Computer Vision",
    description:
      "Vehicle image classification project using CNNs and transfer learning models including EfficientNet, ResNet, and Inception with a real-time prediction workflow.",
    stack: ["Python", "TensorFlow", "CNN", "Transfer Learning", "EfficientNet", "ResNet"],
    github: "https://github.com/loaymagdy38/Car-Type-Classification-",
    icon: "camera",
    cover: "/projects/car-cover.png",
    gallery: ["/projects/car-cover.png", "/projects/car-code.png"],
  },
];

const otherProjects = [
  ["E-Commerce Sales Dashboard", "https://github.com/loaymagdy38/ecommerce-sales-dashboard"],
  ["Gomoku AI using Minimax & Alpha-Beta Pruning", "https://github.com/loaymagdy38/gomoku-ai-minimax-alphabeta"],
  ["Car Price Prediction Model", "https://github.com/loaymagdy38/car-price-prediction-ml"],
  ["Distributed Data Processing using Hadoop MapReduce", "https://github.com/loaymagdy38/Distributed-Data-Processing-Using-Hadoop-MapReduce"],
];

const skills = [
  "Python", "SQL", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Streamlit",
  "Power BI", "Plotly Dash", "Hadoop MapReduce", "Machine Learning", "Deep Learning",
  "NLP", "Computer Vision", "Recommendation Systems", "Data Mining", "Data Visualization",
  "ETL", "Statistics", "Clustering", "Feature Engineering", "GitHub"
];

const certificates = [
  "Data Scientist in Python — DataCamp",
  "Deep Learning in Python — DataCamp",
  "Artificial Intelligence Training Program — ITI",
  "Getting Started with Deep Learning — NVIDIA",
  "Intro to Deep Learning — Kaggle",
  "Generative AI Tools — Microsoft & Care Egypt",
];

function Icon({ name, size = 22 }) {
  const common = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round"
  };

  const icons = {
    github: (<svg {...common}><path d="M9 19c-4 1.5-4-2-6-2.5"/><path d="M15 22v-3.5a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.8-1.6 6.8-7.3a5.7 5.7 0 0 0-1.5-4 5.3 5.3 0 0 0-.1-4s-1.2-.4-4 1.5a13.8 13.8 0 0 0-7.2 0C5.2-.4 4 0 4 0a5.3 5.3 0 0 0-.1 4 5.7 5.7 0 0 0-1.5 4c0 5.7 3.4 6.9 6.7 7.3a3.5 3.5 0 0 0-1 2.7V22"/></svg>),
    linkedin: (<svg {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>),
    mail: (<svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>),
    phone: (<svg {...common}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/></svg>),
    location: (<svg {...common}><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>),
    sun: (<svg {...common}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>),
    moon: (<svg {...common}><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>),
    download: (<svg {...common}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>),
    sparkles: (<svg {...common}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z"/></svg>),
    brain: (<svg {...common}><path d="M9 3a3 3 0 0 0-3 3v1a4 4 0 0 0 0 8v1a3 3 0 0 0 5 2.2V3.8A3 3 0 0 0 9 3z"/><path d="M15 3a3 3 0 0 1 3 3v1a4 4 0 0 1 0 8v1a3 3 0 0 1-5 2.2V3.8A3 3 0 0 1 15 3z"/></svg>),
    chart: (<svg {...common}><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-7"/></svg>),
    dashboard: (<svg {...common}><rect x="3" y="3" width="7" height="8" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="15" width="7" height="6" rx="1"/></svg>),
    database: (<svg {...common}><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>),
    camera: (<svg {...common}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>),
    award: (<svg {...common}><circle cx="12" cy="8" r="6"/><path d="M8.2 13.2 7 22l5-3 5 3-1.2-8.8"/></svg>),
    external: (<svg {...common}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>),
  };
  return icons[name] || icons.sparkles;
}

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function ProjectGallery({ images, title }) {
  const [active, setActive] = useState(images?.[0]);
  if (!images || images.length === 0) return null;

  return (
    <div className="gallery">
      <img className="gallery-main" src={active} alt={`${title} screenshot`} />
      {images.length > 1 && (
        <div className="gallery-thumbs">
          {images.map((image) => (
            <button
              key={image}
              className={active === image ? "thumb active" : "thumb"}
              onClick={() => setActive(image)}
              aria-label={`Show ${title} screenshot`}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [light, setLight] = useState(false);
  const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className={light ? "app light" : "app"}>
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />

      <nav className="nav">
        <a href="#home" className="logo">Loay<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="theme-btn" onClick={() => setLight(!light)} aria-label="Toggle theme">
          <Icon name={light ? "moon" : "sun"} size={18} />
        </button>
      </nav>

      <section id="home" className="hero">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
          <div className="pill"><Icon name="sparkles" size={16} /> AI & Data Science Portfolio</div>
          <h1>Loay Magdy<span>Ibrahim</span></h1>
          <h3>{profile.role}</h3>
          <p>
            Building intelligent AI systems through Machine Learning, Deep Learning,
            NLP, Computer Vision, Recommendation Systems, and Data Analytics.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="primary-btn"><Icon name="sparkles" size={18} /> View Projects</a>
            <a href={profile.resume} className="ghost-btn" target="_blank" rel="noopener noreferrer" download="Loay_Magdy_Ibrahim_CV.pdf"><Icon name="download" size={18} /> Download CV</a>
            <a href={profile.github} className="ghost-btn"><Icon name="github" size={18} /> GitHub</a>
          </div>
        </motion.div>

        <motion.div className="hero-card" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
          <div className="profile-wrap">
            <img className="profile-img" src={profile.heroPhoto} alt={profile.name} />
          </div>
          <h2>Data Scientist</h2>
          <p>ML • Deep Learning • NLP • Computer Vision • Analytics</p>
        </motion.div>
      </section>

      <section id="about" className="section">
        <div className="glass about-card">
          <div>
            <SectionTitle eyebrow="About" title="Building AI Solutions for Real-World Problems" />
            <p className="about-text">
              Data Scientist with hands-on experience in Machine Learning, Deep Learning,
              NLP, Computer Vision, Recommendation Systems, and Data Analytics. Developed
              end-to-end AI projects including fraud detection systems, customer segmentation
              models, movie recommendation engines, image classification solutions, and
              interactive dashboards using Python, TensorFlow, Scikit-learn, Streamlit, and Power BI.
            </p>
          </div>
          <img className="about-photo" src={profile.photo} alt={profile.name} />
        </div>
      </section>

      <section id="projects" className="section">
        <SectionTitle eyebrow="Projects" title="Featured Work" />
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ delay: index * 0.05 }}
            >
              <div className="project-cover">
                <img src={project.cover} alt={project.title} />
                <div className="project-cover-badge"><Icon name={project.icon} size={22} /></div>
              </div>
              <div className="project-body">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack">
                  {project.stack.map((tech) => <Badge key={tech}>{tech}</Badge>)}
                </div>
                <a href={project.github} className="project-link">
                  View on GitHub <Icon name="external" size={16} />
                </a>
                <ProjectGallery images={project.gallery} title={project.title} />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="glass other-projects">
          <h3>Other Projects</h3>
          <div className="other-grid">
            {otherProjects.map(([title, link]) => (
              <a href={link} key={title}>{title}<Icon name="external" size={15} /></a>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <SectionTitle eyebrow="Skills" title="Technical Stack" />
        <div className="glass skills">
          {skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}
        </div>
      </section>

      <section id="certificates" className="section">
        <SectionTitle eyebrow="Certificates" title="Learning & Certifications" />
        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <div className="certificate-card" key={certificate}>
              <Icon name="award" size={24} />
              <p>{certificate}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="glass contact-card">
          <SectionTitle eyebrow="Contact" title="Let’s connect" />
          <p>Open to Data Science, Machine Learning, AI, and Data Analytics opportunities.</p>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`}><Icon name="mail" size={18} /> Email</a>
            <a href={profile.linkedin}><Icon name="linkedin" size={18} /> LinkedIn</a>
            <a href={profile.github}><Icon name="github" size={18} /> GitHub</a>
            <a href={`tel:${profile.phone}`}><Icon name="phone" size={18} /> Call</a>
          </div>
          <div className="location"><Icon name="location" size={16} />{profile.location}</div>
        </div>
      </section>
    </main>
  );
}
