import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    icon: '🎙️',
    title: 'Speech Emotion Recognition',
    description:
      'End-to-end emotion classification pipeline using MFCC feature extraction on raw audio data. Bidirectional LSTM with Attention Mechanism deployed via Flask REST API for real-time inference.',
    tech: ['Python', 'TensorFlow', 'LSTM', 'Flask', 'MFCC'],
    featured: true,
    demo: '',
    github: 'https://github.com/shahzaib427',
  },
  {
    icon: '🤖',
    title: 'AI-Powered NLP HR-Assistant Chatbot',
    description:
      'Intent-recognition chatbot with custom tokenization, text preprocessing, and multi-class classification. Node.js/Express backend with JWT-secured REST API integrated with a React.js frontend.',
    tech: ['Python', 'TensorFlow', 'Node.js', 'React', 'JWT','Flask'],
    featured: true,
    demo: 'https://hr-assistant-chatbot.onrender.com',
    github: 'https://github.com/shahzaib427',
  },
  {
    icon: '📊',
    title: 'ML Classification Pipeline',
    description:
      'Reusable end-to-end ML pipelines covering data ingestion, cleaning, feature engineering, hyperparameter tuning (GridSearchCV), and model evaluation. Benchmarked Logistic Regression, Random Forest, and XGBoost.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'XGBoost'],
    featured: false,
    demo: '',
    github: 'https://github.com/shahzaib427',
  },
  {
    icon: '🛒',
    title: 'MERN AI-HRM App',
    description:
      'Full-stack e-commerce platform with product listings, cart, JWT authentication, and MongoDB database. Responsive design with React and Tailwind CSS. — Replace with your real project.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    featured: false,
    demo: '',
    github: 'https://github.com/shahzaib427',
  },
  {
    icon: '📝',
    title: 'AI-interview-master',
    description:
      'RESTful task management API with user authentication, CRUD operations, and filtering. Built with Express.js and MongoDB. Documented with Postman. — Replace with your real project.',
    tech: ['Node.js', 'Express', 'MongoDB', 'REST API', 'Postman'],
    featured: false,
    demo: 'https://ai-interview-master-blush.vercel.app/',
    github: 'https://github.com/shahzaib427',
  },
    {
    icon: '📝',
    title: 'AI-Wellness-Coach',
    description:
      'RESTful task management API with user authentication, CRUD operations, and filtering. Built with Express.js and MongoDB. Documented with Postman. — Replace with your real project.',
    tech: ['Node.js', 'Flask', 'REST API', 'Postman'],
    featured: false,
    demo: '',
    github: 'https://github.com/shahzaib427',
  },
  {
    icon: '🧠',
    title: 'AI PDF-Reader',
    description:
      'NLP-based sentiment classifier for product reviews. Fine-tuned transformer model with a React frontend for real-time text analysis. — Replace with your real project.',
    tech: ['Python', 'Hugging Face', 'React', 'Flask', 'NLP'],
    featured: false,
    demo: 'https://pdf-reader-ai-a6he.vercel.app/',
    github: 'https://github.com/shahzaib427',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="text-accent font-mono text-sm mb-3 tracking-widest uppercase">02 — Projects</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text leading-tight">
              Things I've
              <br />
              <span className="text-gradient">built & shipped</span>
            </h2>
          </div>
          <a
            href="https://github.com/shahzaib427"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto text-sm text-dim hover:text-accent transition-colors font-body border border-border hover:border-accent/40 px-4 py-2 rounded-lg"
          >
            All on GitHub ↗
          </a>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
