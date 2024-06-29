import { Box, Typography } from "@mui/material";
import React from "react";
export default function Footer() {
    return (
        <Box sx={{ mt: 5, borderTop : "1px solid gray" }} >
            <Typography
                variant="body2"
                style={{
                    display: "flex",
                    padding: "20px",
                    // fontFamily:"sans-serif",
                    color:"gray",
                }}
            >
                In footer, like what you seeing, fork the page from - github
            </Typography>
        </Box>
    );
}