export const portfolioData = {
  personal: {
    name: "Kanagha Sivakumar",
    title: "AI Engineer | Speech Intelligibility Researcher",
    email: "kanaghasivakumar2027@u.northwestern.edu",
    github: "https://github.com/kanaghasivakumar",
    linkedin: "https://linkedin.com/in/kanagha-santhoshini-sivakumar",
  },

  experience: [
    {
      id: "pedzstar",
      company: "PedzStar Lab, Northwestern University",
      role: "Speech Intelligibility Prediction (SIP)",
      dates: "Mar 2026 – Present",
      location: "Evanston, IL",
      achievements: [
        "Developing SIP, a framework decoupling speech intelligibility from ASR confidence by measuring acoustic uncertainty reduction.",
        "Fine-tuning transformer-based ASR models to address biases from softmax sharpening, LM dominance, and beam search.",
        "Designing uncertainty-aware audio embeddings for structured, signal-grounded intelligibility estimates.",
        "Deploying models targeting clinical and developmental speech populations."
      ],
      showInProfiles: ["recruiter", "developer"],
    },
    {
      id: "sunware",
      company: "Sunware Technologies Pvt. Ltd.",
      role: "Associate Software Engineer",
      dates: "Jun 2024 – Sep 2025",
      location: "Chennai, India",
      achievements: [
        "Built an LLM-powered OCR pipeline using Gemini Flash 2.0 to automate shipping detail entry for a logistics client, reducing manual data entry by over 85%.",
        "Built a client-facing image editing system supporting flexible exposure merging and interactive tuning, cutting processing time by over 90%.",
        "Mentored interns through a 12-week training program; participated in interview panels and recommended candidates for full-time conversion.",
      ],
      showInProfiles: ["recruiter", "developer"],
    },
    {
      id: "sunware-trainee",
      company: "Sunware Technologies Pvt. Ltd.",
      role: "Software Engineer Trainee",
      dates: "Nov 2023 – Jun 2024",
      location: "Chennai, India",
      achievements: [
        "Developed an OCR pipeline for digitizing handwritten pilot logbooks using AWS Textract + GPT-4, achieving 91% accuracy with a domain-specific aviation dictionary.",
        "Supported a major media advertising company by utilizing Azure Document Intelligence for document tagging and model training.",
      ],
      showInProfiles: ["recruiter", "developer"],
    },
    {
      id: "sunware-ml",
      company: "Sunware Technologies Pvt. Ltd.",
      role: "Machine Learning Intern",
      dates: "Nov 2023 – Dec 2023",
      location: "Chennai, India",
      achievements: [
        "Designed an autoencoder to predict pollutant levels for the Bangalore Police Department, forecasting threshold breaches every 15 minutes.",
      ],
      showInProfiles: ["recruiter", "developer"],
    },
    {
      id: "textck",
      company: "TextCK Analytics",
      role: "Machine Learning Intern",
      dates: "Aug 2022 – Sep 2022",
      location: "Chennai, India",
      achievements: [
        "Processed surveillance video to detect, localize, and count people and groups entering a building.",
      ],
      showInProfiles: ["recruiter", "developer"],
    },
  ],

  projects: [
    {
      id: "codenames",
      title: "Codenames AI Agent",
      tagline: "Symbolic reasoning meets semantic graphs",
      description: "Built a symbolic AI spymaster using graph traversal over ConceptNet with semantic embeddings and a penalty/reward scoring model. Pure structured reasoning without LLMs. Implemented adaptive per-player relation weight profiles updating after each turn to learn individual guessing styles across games.",
      tech: ["Python", "ConceptNet", "Knowledge Graphs", "NLP"],
      year: "2026",
      github: "https://github.com/kanaghasivakumar",
      showInProfiles: ["recruiter", "developer", "stalker"],
      highlight: true,
      type: "project"
    },
    {
      id: "wildfire",
      title: "Wildfire Detection",
      tagline: "Real-time fire and smoke detection pipeline",
      description: "Dual-pipeline fire/smoke detection: 4-class CNN classifier and FCOS object detector with bounding box localization. Trained on 21,000+ D-Fire images; evaluated model performance using precision, recall, and F1 across varied environmental conditions.",
      tech: ["PyTorch", "TensorFlow", "FCOS", "CNN", "Computer Vision"],
      year: "2026",
      github: "https://github.com/kanaghasivakumar",
      showInProfiles: ["recruiter", "developer", "stalker"],
      highlight: true,
      type: "project"
    },
    {
      id: "ocr-gemini",
      title: "LLM-Powered OCR Pipeline",
      tagline: "85% reduction in manual data entry",
      description: "Automated shipping detail extraction using Gemini Flash 2.0 for a major logistics client. Integrated with existing data pipelines and reduced manual data entry workload significantly.",
      tech: ["Gemini API", "OCR", "LLM Integration", "AWS"],
      year: "2025",
      github: "https://github.com/kanaghasivakumar",
      showInProfiles: ["recruiter", "developer", "stalker"],
      highlight: true,
      impact: "85% manual entry reduction",
      type: "project"
    },
    {
      id: "image-steg",
      title: "Image Steganography using Residual Networks",
      tagline: "Skip connections for information hiding",
      description: "Designed a CNN with skip connections for image steganography, leveraging residual context from prior layers to outperform existing methods.",
      tech: ["ResNet", "PyTorch", "Deep Learning"],
      year: "2022",
      github: "https://github.com/kanaghasivakumar",
      showInProfiles: ["recruiter", "developer", "stalker"],
      type: "project"
    },
    {
      id: "starbucks",
      title: "Business Promotions Analysis - Starbucks Data",
      tagline: "ML-powered promotional offer analysis",
      description: "Analyzed the success of Starbucks promotional offers using machine learning models to identify patterns and effectiveness.",
      tech: ["Machine Learning", "Python", "Data Analysis"],
      year: "2022",
      github: "https://github.com/kanaghasivakumar",
      showInProfiles: ["recruiter", "developer", "stalker"],
      type: "project"
    },
    {
      id: "ddos-detection",
      title: "Comparative Analysis of ML Algorithms for DDoS Detection",
      tagline: "Multi-algorithm security threat detection",
      description: "Compared various ML algorithms (Random Forest, LightGBM, XGBoost, AdaBoost, SVM) for DDoS attack detection. Found that LightGBM and Random Forest outperformed other models. Overall architecture consisted of 4 modules.",
      tech: ["Machine Learning", "Random Forest", "LightGBM", "XGBoost", "Python"],
      year: "2021",
      github: "https://github.com/kanaghasivakumar",
      showInProfiles: ["recruiter", "developer", "stalker"],
      type: "project"
    },
    {
      id: "movie-script",
      title: "AI Movie Script Generator",
      tagline: "RNN-powered creative text generation",
      description: "Used RNN and LSTM to build a movie script generator based on user-provided excerpts.",
      tech: ["RNN", "LSTM", "Python", "NLP"],
      year: "2021",
      github: "https://github.com/kanaghasivakumar",
      showInProfiles: ["recruiter", "developer", "stalker"],
      type: "project"
    },
    {
      id: "exam-prep",
      title: "Comparison of Algorithms for Exam Preparation Assistance",
      tagline: "Knapsack problem application",
      description: "Compared various algorithms to approach an application of the knapsack problem for exam preparation optimization.",
      tech: ["Algorithms", "Python", "Dynamic Programming"],
      year: "2020",
      github: "https://github.com/kanaghasivakumar",
      showInProfiles: ["recruiter", "developer", "stalker"],
      type: "project"
    }
  ],

  research: [
    {
      id: "sip",
      title: "Speech Intelligibility Prediction (SIP)",
      status: "In Progress",
      description: "Decoupling speech intelligibility from ASR confidence through acoustic uncertainty quantification.",
      focus: "Speech Processing, ASR, Uncertainty Quantification",
      showInProfiles: ["recruiter", "developer", "stalker"],
      type: "research"
    },
    {
      id: "ser",
      title: "Speech Emotion Recognition using CNNs",
      status: "Unpublished",
      year: "2023",
      description: "Investigated audio feature extraction strategies for SER; found that combining multiple techniques significantly improves accuracy.",
      focus: "Audio ML, CNN, Feature Engineering",
      showInProfiles: ["recruiter", "developer", "stalker"],
      type: "research"
    }
  ],

  reads: [
    {
      id: "read-1",
      title: "Deep Learning Methods for Multimodal Speech Emotion Recognition",
      author: "IEEE",
      type: "Research Paper",
      link: "https://ieeexplore.ieee.org/abstract/document/10669905?casa_token=gUEtBg5m7Q0AAAAA:hR7_82Wa2nv30FymyzQGTdIIJoDVDaVBZ_KBYI-XQGZyGUvL480Rk3ml_pt4KXqHWuz6Cw",
      year: 2024,
      reason: "Understanding multimodal approaches to emotion recognition",
      category: "AI/ML",
      showInProfiles: ["developer", "friends", "stalker"],
    },
    {
      id: "read-2",
      title: "B2AI Voice Pediatric Dataset",
      author: "PhysioNet",
      type: "Dataset",
      link: "https://physionet.org/content/b2ai-voice-pediatric/1.0.0/",
      year: 2024,
      reason: "Clinical speech data for developmental speech populations",
      category: "Research",
      showInProfiles: ["developer", "friends", "stalker"],
    },
    {
      id: "read-3",
      title: "Performance Analysis and Architecture Design",
      author: "Berkeley Lab",
      type: "Research Paper",
      link: "https://sdm.lbl.gov/~kewu/ps/paa-final.pdf",
      year: 2023,
      reason: "Systems thinking and performance optimization",
      category: "Systems",
      showInProfiles: ["developer", "friends", "stalker"],
    },
    {
      id: "read-4",
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      type: "Fiction",
      year: 2018,
      reason: "Beautiful storytelling and nature writing",
      category: "Fiction",
      showInProfiles: ["friends", "stalker"],
    },
    {
      id: "read-5",
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      type: "Non-Fiction",
      year: 2011,
      reason: "Understanding cognitive biases and decision-making",
      category: "Psychology",
      showInProfiles: ["friends", "stalker"],
    }
  ],

  watches: [
    {
      id: "watch-1",
      title: "Citi Certification Course: IRB Fundamentals",
      creator: "Citi Program",
      type: "Course",
      duration: "2 hours",
      year: 2024,
      reason: "Research ethics and institutional review processes",
      category: "Education",
      showInProfiles: ["developer", "friends", "stalker"],
    },
    {
      id: "watch-2",
      title: "Severance",
      creator: "Dan Emet (HBO/Apple TV+)",
      type: "TV Series",
      episodes: "9 episodes (Season 1)",
      year: 2022,
      reason: "Innovative sci-fi storytelling with philosophical themes",
      category: "Entertainment",
      showInProfiles: ["friends", "stalker"],
    },
    {
      id: "watch-3",
      title: "Transformers: State of the Art",
      creator: "Hugging Face",
      type: "Course/Tutorials",
      duration: "~10 hours",
      year: 2024,
      reason: "Deep dive into transformer architectures and applications",
      category: "AI/ML",
      showInProfiles: ["developer", "friends", "stalker"],
    }
  ],

  listens: [
    {
      id: "listen-1",
      title: "Poker Face",
      artist: "Lady Gaga",
      type: "Song",
      year: 2008,
      reason: "Iconic, timeless pop track",
      category: "Music",
      showInProfiles: ["friends", "stalker"],
    },
    {
      id: "listen-2",
      title: "Lex Fridman Podcast",
      host: "Lex Fridman",
      type: "Podcast",
      topics: ["AI", "Science", "Technology"],
      reason: "Deep technical discussions with leading AI researchers",
      category: "Podcast",
      showInProfiles: ["friends", "developer", "stalker"],
    },
    {
      id: "listen-3",
      title: "Machine Learning Street Talk",
      host: "Tim Scarfe & Yannic Kilcher",
      type: "Podcast",
      topics: ["AI Research", "ML", "Deep Learning"],
      reason: "Latest developments in machine learning research",
      category: "Podcast",
      showInProfiles: ["developer", "friends", "stalker"],
    }
  ],

  currently: [
    {
      id: "current-1",
      type: "research",
      title: "Speech Intelligibility Prediction (SIP) Framework",
      description: "Developing a framework that decouples speech intelligibility from ASR confidence scores through acoustic uncertainty quantification.",
      progress: "In Progress",
      startDate: "Mar 2026",
      showInProfiles: ["recruiter", "developer", "friends", "stalker"],
    },
    {
      id: "current-2",
      type: "project",
      title: "Diffusion Transformer (DiT) Exploration",
      description: "Beginning work on diffusion-based transformer models for generative tasks.",
      progress: "Early Stage",
      startDate: "2026",
      showInProfiles: ["developer", "friends", "stalker"],
    },
    {
      id: "current-3",
      type: "learning",
      title: "Advanced Audio ML & Signal Processing",
      description: "Deep dive into audio processing techniques and speech signal analysis for intelligibility research.",
      progress: "Ongoing",
      showInProfiles: ["developer", "friends", "stalker"],
    }
  ],

  skills: [
    {
      category: "AI & Deep Learning",
      items: ["Transformers", "Attention Mechanisms", "CNNs", "Computer Vision", "Object Detection", "OCR", "Knowledge Graphs", "Symbolic Reasoning", "RAG", "Embeddings", "Audio/Speech ML"],
      level: "Expert"
    },
    {
      category: "Frameworks & Libraries",
      items: ["PyTorch", "TensorFlow/Keras", "HuggingFace", "OpenCV", "Scikit-learn", "Statsmodels", "NumPy", "Pandas"],
      level: "Advanced"
    },
    {
      category: "Cloud & APIs",
      items: ["AWS", "Azure", "Google Gemini", "LLM Integration", "Prompt Engineering", "Vector Databases"],
      level: "Advanced"
    },
    {
      category: "Languages & Tools",
      items: ["Python", "Java", "SQL", "Git", "Docker", "FastAPI", "Jupyter"],
      level: "Expert"
    },
    {
      category: "Frontend",
      items: ["React", "NodeJS", "HTML/CSS"],
      level: "Intermediate"
    },
    {
      category: "Data & Analysis",
      items: ["Feature Engineering", "Statistical Modeling", "PCA", "Benchmarking", "Data Pipelines"],
      level: "Advanced"
    }
  ],

  education: [
    {
      school: "Northwestern University",
      degree: "M.S. in Artificial Intelligence",
      gpa: "4.00/4.00",
      dates: "Sep 2025 – Dec 2026 (Expected)",
      location: "Evanston, IL",
    },
    {
      school: "Vellore Institute of Technology, Chennai",
      degree: "B.Tech in Computer Science, specialization in AI & ML",
      gpa: "3.71/4.00",
      dates: "Jul 2019 – May 2023",
      location: "Chennai, India",
    }
  ],

  profiles: [
    {
      id: "recruiter",
      name: "Recruiter",
      description: "See what impresses hiring managers",
      icon: "👔",
      color: "#E50914",
      emphasis: ["projects", "experience", "skills"],
      heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=500&fit=crop",
    },
    {
      id: "developer",
      name: "Developer",
      description: "See technical depth and code",
      icon: "💻",
      color: "#0099FF",
      emphasis: ["research", "projects", "skills"],
      heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=500&fit=crop",
    },
    {
      id: "friends",
      name: "Friends",
      description: "Get to know the person",
      icon: "👋",
      color: "#FFD700",
      emphasis: ["reads", "watches", "listens"],
      heroImage: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=1200&h=500&fit=crop",
    },
    {
      id: "stalker",
      name: "Stalker",
      description: "Everything (and then some)",
      icon: "🕵️",
      color: "#7B7B7B",
      emphasis: ["everything"],
      heroImage: "https://images.unsplash.com/photo-1526374965328-7f5ae4e8a42f?w=1200&h=500&fit=crop",
    }
  ]
}