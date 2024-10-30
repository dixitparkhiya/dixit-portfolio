import { Icons } from "@/components/icons";
import { Download, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dixit Patel",
  initials: "DP",
  url: "https://yourportfolio.io",  // Replace with your actual portfolio URL if available
  location: "Rajkot, Gujarat",
  locationLink: "https://www.google.com/maps/place/Rajkot,+Gujarat",
  description:
    "Full Stack Developer skilled in building scalable software solutions and implementing secure systems. ",
  summary:
    "Experienced Software Developer with an MTech in Computer Science from IIT Madras and hands-on experience at Crayon Data. Skilled in React, Next.js, FastAPI, Docker, and Kubernetes. Strong background in building dynamic UIs, backend services, and scalable architectures.",
  avatarUrl: "/me.jpg",  // Replace with your actual avatar image path
  skills: [
    "ReactJS", "Next.js", "JavaScript", "TypeScript","Redux","Kafka", "Spark", "Python", "C++","FastAPI", 
    "Django", "Spring Boot", "NodeJS", "PostgreSQL", "MySQL", "MongoDB", 
    "Docker", "Kubernetes", "Java", "API Development", "RESTful APIs",
    "Genode OS","Linux","Sculpt OS"
  ],
  resume : {
    googleDrive: "https://drive.google.com/file/d/1mLGDqK9ulONWXF6OGOCtDM-1Gz-ujbCP/view?usp=drivesdk",
    downloadPath : "/Dixit_Parhiya_Experience_Resume.pdf"
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/personal", icon: NotebookIcon, label: "Personal" },
  ],
  contact: {
    email: "parkhiyadixit@gmail.com",
    tel: "+91 8154057515",
    social: {
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/oyy.dixit",
        icon: Icons.instagram,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dixitparkhiya",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/dixit-parkhiya",
        icon: Icons.linkedin,
        navbar: true,
      },
      GMail: {
        name: "GMail",
        url: "mailto:parkhiyadixit@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Crayon Data",
      href: "https://crayondata.com",
      badges: [],
      location: "Remote",
      title: "Associate Software Developer",
      logoUrl: "/crayon.png",
      start: "Aug 2023",
      end: "Present",
      description:
        "Developed and delivered dynamic interfaces for banking clients, improved website performance by 20% through migration to Next.js, and contributed to the DaaS Dashboard project with FastAPI, Next.js, and TailwindCSS.",
    },
    {
      company: "IIT Madras CSE Department",
      badges: [],
      href: "https://www.iitm.ac.in",
      location: "Chennai, India",
      title: "Teaching Assistant - Part Time",
      logoUrl: "/iitm.png",
      start: "July 2021",
      end: "July 2023",
      description:
        "Assisted in courses like Secure Systems Engineering and CAD for VLSI. Implemented a custom Kubernetes controller in Go for MySQL deployments, automating database management for 2,000+ developers.",
    }
  ],
  hackathons : [],
  education: [
    {
      school: "Indian Institute of Technology Madras",
      href: "https://www.iitm.ac.in",
      degree: "Master of Technology - Computer Science",
      logoUrl: "/iitm.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "Indus University",
      href: "https://indusuni.ac.in",
      degree: "Bachelor of Technology - Computer Science",
      logoUrl: "/indus.png",
      start: "2016",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Secure Application on Genode OS",
      dates: "June 2022 - July 2023",
      active: false,
      href : '',
      // video: "https://cdn.llm.report/openai-demo.mp4",
      image: "/genode.png",
      description:
        "Developed a secure cryptographic wallet using the Genode OS framework. Ported Genode OS for ARM and x86 compatibility and integrated Java-based cryptographic operations.",
      technologies: ["C++","Sculpt","Cryptography", "Java", "Genode OS", "Docker", "Qemu"],
      links: [
        {
          type: "Website",
          href: "https://genode.org/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dixitparkhiya/goa-genode",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    // {
    //   title: "DaaS Dashboard",
    //   dates: "Aug 2023 - Present",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    //   active: true,
    //   description:
    //     "Developed a data-as-a-service dashboard for dynamic data insights using FastAPI, Next.js, and TailwindCSS, enhancing functionality and user experience.",
    //   technologies: ["FastAPI", "Next.js", "TailwindCSS", "MySQL"],
    // },
    {
      title: "Healthcare Web Portal",
      dates: "Jan 2020 - May 2020",
      // video: "https://cdn.llm.report/openai-demo.mp4",
      image:'/healthcare.png',
      active: false,
      description: "Developed a web portal for an E-HealthCare system, providing Aadhaar-based patient access. Replaced traditional file systems with a web portal built using Django.",
      technologies: ["Django", "HTML", "CSS", "JavaScript", "Bootstrap"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dixitparkhiya/Healthcare",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Restaurant Review App",
      dates: "May 2018 - June 2018",
      // video: "https://cdn.llm.report/openai-demo.mp4",
      image:'/mws.jpg',
      active: false,
      description:"Built a restaurant review portal with features like menu, timings, and location.Converted the application to a Progressive Web App (PWA) for enhanced reliability.",
      technologies: ["Django","Bootstrap","JavaScript", "HTML", "CSS", "PWA","Google Map APIs"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dixitparkhiya/mws-restaurant-review-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "PRML Data Contest",
      dates: "Jul 2021 - Nov 2021",
      // video: "https://cdn.llm.report/openai-demo.mp4",
      image: '/prml.png',
      active: false,
      description: "Built supervised models to predict clinical descriptors using gene expression data for neurodegenerative diseases. Implemented algorithms such as Decision Tree, Adaboost, and Random Forest.",
      technologies: ["Python", "Machine Learning", "Decision Trees", "Adaboost", "XGBoost","Random Forest"],
      links: [
        {
          type: "Reference",
          href: "https://www.cse.iitm.ac.in/~prashla/cs5691_2019.html",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Contest",
          href: "https://www.kaggle.com/c/prml-data-contest-jul-2021-rb-section/overview",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    }
  ],
  achievements: [
    "Secured All India Rank 174 in GATE CSE 2021",
    "Solved 800+ data structure and algorithm challenges on LeetCode"
  ],
} as const;
