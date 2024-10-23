import * as React from "react";
import { Link, To } from "react-router-dom";

import cartouche from "./cartouche.png";
import cartoucheDark from "./cartoucheDark.png";

import {
    CardHeader,
} from "@mui/material";

const HeaderCardIcon = props => {
    const { icon, title, to } = props;

    return (
        <Link to={to} style={{ textDecoration: 'none' }}>
            <CardHeader subheader={title} sx={{
                textDecoration: 'none',
                overflow: "inherit",
                padding: "16px",
                background: theme =>
                    `url(${
                    theme.palette.mode === "dark" ? cartoucheDark : cartouche
                    }) no-repeat`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "& .icon": {
                    color: theme =>
                        theme.palette.mode === "#000" ? "inherit" : "#000"
                }
            }} />
        </Link>

    );
};

export default HeaderCardIcon;
