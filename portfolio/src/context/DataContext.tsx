import { createContext } from "react";

const DataContext = createContext(null);

const DataContextProvider = ({ children }) => {
    const data = {
        name:"Srinivas Veerla",
        full_name:"Deenakar Siva Srinivas Veerla",
        experience:"2 years",
        designation:"Software Engineer",
        location:"Buffalo, NY",
        email:"dssrinivas.veerla@gmail.com",
        github:"https://github.com/srinivasveerla",
        linkedin:"https://www.linkedin.com/in/srinivas-veerla",
        education:[
            {
                degree:"Master's of Science(MS)",
                specialization:"Computer Science and Engineering",
                college:"University at Buffalo",
                year:"2022-2024",
                
            },
            {
                degree:"Bachelor of Technology(BTech)",
                specialization:"Electronics and Communication and Engineering",
                college:"Vellore Institute of Technology",
                year:"2016-2020"
            },
            
        ]
    }
};