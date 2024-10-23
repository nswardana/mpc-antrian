import * as React from "react";
import { Menu } from "react-admin";
import BookIcon from "@mui/icons-material/Book";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AssessmentIcon from '@mui/icons-material/Assessment';

import SubMenu from "./SubMenu";
import Box from "@mui/material/Box";
export const UserMenu = props => {
    var objAuth = {};
    objAuth.outlet_id=1;
    var linkMenuKeuangan = "keuangan/outlet/" + objAuth.outlet_id + "/lapharian";
    var linkMenuKeuanganList = "keuangan/outlet/" + objAuth.outlet_id + "/lapharianlist";
    var linkMenuOperasionanList = "keuangan/outlet/" + objAuth.outlet_id + "/operation";

    return (
        <Box
            sx={{
                width: 250,
                fontSize: "16",
                marginTop: 1,
                marginBottom: 1,
                transition: theme =>
                    theme.transitions.create("width", {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen
                    })
            }}
        >
            <Menu {...props} sx={{ color: "#000" }}>
                {/*} <Menu.DashboardItem /> */}
                <Menu.Item
                    to="/dashboard"
                    primaryText="Dashboard"
                    sx={{ color: "#000", fontSize: 13 }}
                    leftIcon={<BookIcon color="primary" />}
                />
                {/* WARTEG keuangan/outlet/1/lapharian*/}
                <SubMenu primaryText="Keuangan" sx={{ color: "#000", fontSize: 13 }} leftIcon={<AssessmentIcon />}>
                    <Menu.Item to={linkMenuKeuangan} primaryText="Buat Lap Harian" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
                    <Menu.Item to={linkMenuKeuanganList} primaryText="Lap Harian" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
                    <Menu.Item to={linkMenuOperasionanList} primaryText="Operasional Outlet" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
                </SubMenu>
            </Menu>
        </Box>)
};
