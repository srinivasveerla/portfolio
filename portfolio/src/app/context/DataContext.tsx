import React, { createContext, useContext } from "react";

// Define the data structure using TypeScript interfaces
interface Education {
  degree: string;
  specialization: string;
  college: string;
  gpa: string;
  year: string;
  addition_info?: string;
  relevant_courses: string[];
  logo: string;
}

interface WorkExperience {
  company_name: string;
  role: string;
  duration: string;
  skills: string[];
}

interface Data {
  name: string;
  full_name: string;
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
}

// Define the initial data
const initialData: Data = {
  name: "Srinivas Veerla",
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
  resume: "/files/SrinivasResume.pdf",
  email: "dssrinivas.veerla@gmail.com",
  github: "https://github.com/srinivasveerla",
  linkedin: "https://www.linkedin.com/in/srinivas-veerla",
  hero_about:
    "I'm a Computer Science Graduate from the University at Buffalo. I'm actively looking for fulltime SDE opportunities. If you have an opening that I could be a good fit for, let's connect!",
  about_me: "",
  education: [
    {
      degree: "Master's of Science(MS)",
      specialization: "Computer Science and Engineering",
      college: "University at Buffalo",
      gpa: "3.4/4.0",
      year: "2022-2024",
      addition_info:
        "Teaching Assistant for CSE 590 | Computer Architecture by Dr. Ramalingam Sridhar, Spring 2024.",
      relevant_courses: [
        "Analysis of Algorithms",
        "Distributed Systems",
        "Data Models Query Language",
        "Machine Learning",
        "Deep Learning",
        "Data Intensive Computing",
      ],
      logo: "/images/UB.jpg",
    },
    {
      degree: "Bachelor of Technology(BTech)",
      specialization: "Electronics and Communication and Engineering",
      college: "Vellore Institute of Technology",
      gpa: "3.3/4.0",
      year: "2016-2020",
      relevant_courses: [
        "Object Oriented Programming",
        "Operating Systems",
        "Computer Networks",
      ],
      logo: "/images/VIT.png",
    },
  ],
  workex: [
    {
      company_name: "Wipro",
      role: "Software Developer",
      duration: "September 2020 - July 2022",
      skills: [
        "C#",
        "WPF",
        "ASP.NET",
        "Microsoft SQL Server",
        "Python",
        "Django",
        "React",
        "Git",
        "Docker",
        "NUnit",
        "Jenkins",
      ],
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
