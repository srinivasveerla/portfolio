import React, { createContext, useContext } from "react";

// Define the data structure using TypeScript interfaces
interface Education {
  degree: string;
  degree_level: string;
  specialization: string;
  institution: string;
  gpa: string;
  year: string;
  addition_info?: string;
  courses: string[];
  logo: string;
}
interface Project {
  title: string;
  description: string;
  liveDemo?: string;
  github?: string;
  details?: string;
  technologies: string[];
  image: string;
}

interface WorkExperience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
}

interface Data {
  name: string;
  full_name: string;
  pronunciation?: string;
  experience: string;
  designation: string;
  skills: string[];
  location: string;
  resume: string;
  email: string;
  github: string;
  linkedin: string;
  hero_about: string;
  about_me: string;
  education: Education[];
  workex: WorkExperience[];
  projects: Project[];
}

// Define the initial data
const initialData: Data = {
  name: `Srinivas Veerla`,
  full_name: "Deenakar Siva Srinivas Veerla",
  experience: "2 years",
  designation: "Software Engineer",
  skills: [
    "React",
    "Redux",
    "JQuery",
    "Blazor",
    "MongoDB",
    "Python",
    "C#",
    ".Net",
    "Django",
  ],
  location: "Buffalo, NY",
  pronunciation: " (Sh-ri)...",
  resume: "srinivas_resume_sde.pdf",
  email: "dssrinivas.veerla@gmail.com",
  github: "https://github.com/srinivasveerla",
  linkedin: "https://www.linkedin.com/in/srinivas-veerla",
  hero_about: `I'm a Computer Science Graduate from the University at Buffalo.\nI'm actively looking for full-time SDE opportunities. If you have a role that I could be a good fit for, let's connect!`,
  about_me: ` Hi! I'm Deenakar Siva Srinivas Veerla, a generalist software developer with a strong passion for building robust and innovative applications. I hold a <span style="color: #00b4d8">Master’s degree in Computer Science from SUNY Buffalo</span>.\n\n My technical expertise includes <span style="color: #00b4d8"> Python, C#, Go, HTML/CSS, JavaScript, and TypeScript</span>. I have extensive experience with frameworks and technologies such as <span style="color: #00b4d8">.NET, Django, React, Redux and Material UI</span>. My proficiency in web development is complemented by my adeptness in database management, working with <span style="color: #00b4d8">PostgreSQL, MS SQL Server, MongoDB, and Firebase</span>.`,
  education: [
    {
      degree_level: "Master's",
      degree: "Master of Science in Computer Science",
      specialization: "Computer Science and Engineering",
      institution: "University at Buffalo (State University of New York)",
      gpa: "3.4/4.0",
      year: "August 2022 - July 2024",
      addition_info:
        "Teaching Assistant for Computer Architecture(CSE 590)",
      courses: [
        "Analysis of Algorithms",
        "Distributed Systems",
        "Data Models Query Language",
        "Machine Learning",
        "Deep Learning",
        "Data Intensive Computing",
      ],
      logo: "/images/UB.png",
    },
    {
      degree: "Bachelor of Technology in Electronics and Communication",
      degree_level: "Bachelor's",
      specialization: "Electronics and Communication and Engineering",
      institution: "Vellore Institute of Technology",
      gpa: "3.3/4.0",
      year: "July 2016 - May 2020",
      courses: [
        "Object Oriented Programming",
        "Operating Systems",
        "Computer Networks",
        "Data Structures and Algorithms",
      ],
      logo: "/images/VIT.png",
    },
  ],
  workex: [
    {
      company: "Wipro",
      title: "Software Developer",
      startDate: "February 2021",
      endDate: "July 2022",
      description: [
        "•	Spearheaded the development of a WPF application, ground-up using MVVM architecture, implementing a log collection utility tool for a product generating $640 million in revenue.",
        "•	Led a team of three in migrating calendar and email services to Microsoft Exchange Server, achieving a 20% reduction in loading time.",
        "•	Elevated the reliability and performance of an MVC-based client application by developing new functionalities and crafting robust unit and integration tests for seamless component integration.",
        "•	Managed CI/CD pipelines on Jenkins to deploy builds for development and QA testing.",
      ],
      skills: [
        "C#",
        "WPF",
        "ASP.NET",
        "Microsoft SQL Server",
        "Git",
        "Docker",
        "NUnit",
        "Jenkins",
      ],
    },
    {
      company: "Wipro",
      title: "Associate Software Developer",
      startDate: "September 2020",
      endDate: "February 2021",
      description: [
        "•	Improved operational efficiency by developing robust backend for an internal resource booking system, reducing dependency delays from days to minutes.",
        "•	Developed and deployed a suite of Restful APIs to serve a React frontend, with user roles, integrated calendar-based resource booking, search, among others, designed to meet the needs of a 60-member team.",
      ],
      skills: ["Python", "Django", "React", "Git", "Docker"],
    },
  ],
  projects: [
    {
      title: "Re-Store (E-commerce Website)",
      description:
        "A full-stack e-commerce platform with user authentication, product catalog, and payment integration.",
      image: "/images/restore.png",
      technologies: ["React", "ASP.NET core", "MS SQL Server", "Redux","Entity Framework", "Git"],
      github: "https://github.com/srinivasveerla/ReStore",
    },
    {
      title: "Implementation of Distributed Protocols",
      description:
        "The project implemented MapReduce with goroutines, developed Chandy-Lamport for global state, and implemented Raft for consensus, as part of Distributed Systems Course.",
      image: "/images/distributed_systems.jpg",
      technologies: ["Go", "gRPC", "Git"],
    },
    {
      title: "Walmart Sales Forecast",
      description:
        "The project involved preprocessing the data, forecasting of sales, along with developing a Django-React web app, authentication implementation, and sales trend visualization.",
      image: "/images/walmart-square.jpg",
      technologies: ["React", "Django", "Pandas","scikit-learn", "Git"],
      github: "https://github.com/srinivasveerla/WalmartSalesForcast",
    },
  ],
};

// Create the context with a default value
const DataContext = createContext<Data | undefined>(undefined);

// Custom hook to use the data context
export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}

// DataProvider component
export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={initialData}>{children}</DataContext.Provider>
  );
};
