export const profile = {
  name: 'Mohammed Faiz Nawaz',
  email: 'mohammedfaiznawaz26@gmail.com',
  github: 'https://github.com/Mdfaiznawaz786',
  linkedin: 'https://www.linkedin.com/in/mohammed-faiz-nawaz-0b139b22b/',
};

export const experience = [
  {
    role: 'Software Engineer',
    organization: 'GrowMe.ai',
    location: 'Buffalo, NY',
    period: 'Jan 2025 — Present',
    highlights: [
      'Built an LLM-powered property search application in TypeScript and Node.js, improving search relevance by 60% across more than 1,000 daily records.',
      'Developed 10+ REST and GraphQL APIs with PostgreSQL, OAuth2, Row Level Security, documentation, and automated tests.',
      'Deployed services on AWS and Kubernetes with Terraform, AWS CDK, ArgoCD, and GitHub Actions; added Prometheus, Grafana, and Datadog observability.',
    ],
  },
  {
    role: 'Research Assistant · Software Engineer',
    organization: 'State University of New York at Buffalo',
    location: 'Buffalo, NY',
    period: 'Jul 2024 — Dec 2024',
    highlights: [
      'Developed FastAPI, React, and TypeScript components for the AIM Safe platform, including asynchronous inference pipelines on AWS.',
      'Implemented TLS 1.3, AES-256 encryption, RBAC, audit logging, IAM, and JWT controls for multi-tenant environments.',
    ],
  },
  {
    role: 'Programmer Analyst Trainee',
    organization: 'Cognizant Technology Solutions',
    location: 'India',
    period: 'Mar 2023 — Jan 2024',
    highlights: [
      'Built Java Spring Boot microservices with REST and GraphQL endpoints, OAuth2 and JWT authorization, and RabbitMQ event processing.',
      'Designed PostgreSQL and MongoDB schemas and Python ETL workflows; maintained 90%+ test coverage with JUnit and Mockito.',
    ],
  },
  {
    role: 'Software Developer',
    organization: 'Vellichor Media',
    location: 'India',
    period: 'Feb 2021 — Dec 2022',
    highlights: [
      'Maintained Java applications on Tomcat and JBoss, resolving production issues in JDBC connections and server performance.',
      'Automated backups and log archival with Bash and Python, saving 10 hours of manual work each week.',
    ],
  },
];

export const projects = [
  {
    number: '01',
    title: 'Project Sentinel',
    category: 'Autonomous infrastructure',
    description: 'A distributed self-healing system that streams anomalies over gRPC. A LangGraph agent proposes remediations while a Go policy engine validates commands before execution.',
    stack: ['Go', 'Python', 'gRPC', 'LangGraph', 'Docker'],
  },
  {
    number: '02',
    title: 'SmartMate',
    category: 'AI personal assistant',
    description: 'An NLP-driven assistant that uses GPT and LangGraph to coordinate multi-step scheduling across Google Calendar and messaging APIs.',
    stack: ['FastAPI', 'LangGraph', 'GPT', 'Google Calendar API'],
  },
  {
    number: '03',
    title: 'FitFuel',
    category: 'AI meal planning',
    description: 'A DistilGPT-2 meal planner served through FastAPI with a responsive Next.js interface and a Dockerized NGINX deployment.',
    stack: ['DistilGPT-2', 'FastAPI', 'Next.js', 'Docker'],
  },
  {
    number: '04',
    title: 'TacoDB',
    category: 'Database storage engine',
    description: 'A C++ database engine with query planning, slotted pages, heap tables, an LRU buffer manager, and a B-tree index.',
    stack: ['C++', 'CMake', 'Docker', 'Linux'],
  },
  {
    number: '05',
    title: 'Distributed Chat System',
    category: 'Network programming',
    description: 'A TCP-based multi-server chat system with authentication, presence, message broadcasting, and buffering for intermittent connections.',
    stack: ['C++', 'TCP sockets', 'Linux', 'Bash'],
  },
  {
    number: '06',
    title: 'Wikipedia Big Data Analytics',
    category: 'Data engineering',
    description: 'Python ETL and Spark Streaming analysis of a 128 GB dataset on AWS EMR, with Terraform-managed infrastructure.',
    stack: ['Python', 'Apache Spark', 'AWS EMR', 'Terraform'],
  },
];

export const skills = [
  { label: 'Languages', items: 'TypeScript, JavaScript, Python, Java, Go, C++, SQL, Bash' },
  { label: 'Frontend', items: 'React, Angular, Next.js, Tailwind CSS, responsive UI' },
  { label: 'Backend & APIs', items: 'Node.js, Express, Spring Boot, FastAPI, REST, GraphQL, gRPC' },
  { label: 'Data', items: 'PostgreSQL, MongoDB, Redis, Elasticsearch, Neo4j' },
  { label: 'Cloud & platform', items: 'AWS, Kubernetes, Docker, Helm, Terraform, AWS CDK' },
  { label: 'Quality & operations', items: 'Jest, Pytest, Playwright, JUnit, Prometheus, Grafana, Datadog' },
];
