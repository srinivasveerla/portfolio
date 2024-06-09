import { Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../layout/ProjectCard";

export default function Projects() {
    return (
        <div>
            <Typography variant="h4" style={{ padding: "20px" }}>PROJECT</Typography>
            <ProjectCard />
        </div>
    );
}