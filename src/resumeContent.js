export const experience = [
  {
    role: 'Software Engineer',
    company: 'GrowMe.ai',
    dates: 'Jan 2025 – Present',
    icon: 'fas fa-laptop-code',
    highlights: [
      'Built an LLM-powered property search application in TypeScript and Node.js, improving search relevance by 60% across more than 1,000 daily records.',
      'Developed 10+ REST and GraphQL APIs with PostgreSQL, OAuth2, Row Level Security, documentation, and automated tests.',
      'Deployed services on AWS and Kubernetes with Terraform, AWS CDK, ArgoCD, and GitHub Actions.',
    ],
  },
  {
    role: 'Research Assistant · Software Engineer',
    company: 'State University of New York at Buffalo',
    dates: 'Jul 2024 – Dec 2024',
    icon: 'fas fa-microscope',
    highlights: [
      'Developed FastAPI, React, and TypeScript components for the AIM Safe platform, including asynchronous inference pipelines on AWS.',
      'Implemented TLS 1.3, AES-256 encryption, RBAC, audit logging, IAM, and JWT controls for multi-tenant environments.',
    ],
  },
  {
    role: 'Programmer Analyst Trainee',
    company: 'Cognizant Technology Solutions',
    dates: 'Mar 2023 – Jan 2024',
    icon: 'fas fa-code',
    highlights: [
      'Built Java Spring Boot microservices with REST and GraphQL endpoints, OAuth2 and JWT authorization, and RabbitMQ event processing.',
      'Designed PostgreSQL and MongoDB schemas and Python ETL workflows; maintained 90%+ test coverage with JUnit and Mockito.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Vellichor Media',
    dates: 'Feb 2021 – Dec 2022',
    icon: 'fas fa-server',
    highlights: [
      'Maintained Java applications on Tomcat and JBoss, resolving production issues in JDBC connections and server performance.',
      'Automated backups and log archival with Bash and Python, saving 10 hours of manual work each week.',
    ],
  },
];

export const projects = [
  {
    title: 'Project Sentinel',
    category: 'Autonomous self-healing infrastructure',
    icon: 'fas fa-shield-alt',
    description: 'A distributed Go and Python system that streams anomalies over gRPC. A LangGraph agent proposes remediations, while a Go policy engine validates commands before execution.',
    stack: 'Go · Python · gRPC · LangGraph · Docker',
  },
  {
    title: 'SmartMate',
    category: 'AI personal assistant',
    icon: 'fas fa-calendar-check',
    description: 'An NLP-driven assistant using GPT and LangGraph to coordinate multi-step scheduling across Google Calendar and messaging APIs.',
    stack: 'FastAPI · LangGraph · GPT · Google Calendar API',
  },
  {
    title: 'FitFuel',
    category: 'AI diet application',
    icon: 'fas fa-utensils',
    description: 'A DistilGPT-2 meal planner served through FastAPI with a responsive Next.js interface and a Dockerized NGINX deployment.',
    stack: 'DistilGPT-2 · FastAPI · Next.js · Docker',
  },
  {
    title: 'TacoDB',
    category: 'Database storage engine',
    icon: 'fas fa-database',
    description: 'A C++ database engine with query planning, slotted pages, heap tables, an LRU buffer manager, and a B-tree index.',
    stack: 'C++ · CMake · Docker · Linux',
  },
  {
    title: 'Distributed Chat System',
    category: 'Network programming',
    icon: 'fas fa-comments',
    description: 'A TCP-based multi-server chat system with authentication, presence, message broadcasting, and buffering for intermittent connections.',
    stack: 'C++ · TCP sockets · Linux · Bash',
  },
  {
    title: 'Wikipedia Big Data Analytics',
    category: 'Data engineering',
    icon: 'fas fa-chart-line',
    description: 'Python ETL and Spark Streaming analysis of a 128 GB dataset on AWS EMR, with Terraform-managed infrastructure.',
    stack: 'Python · Apache Spark · AWS EMR · Terraform',
  },
];
