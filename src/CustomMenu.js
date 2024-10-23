import * as React from "react";
import { Menu } from "react-admin";
import BookIcon from "@mui/icons-material/Book";

import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import ScheduleIcon from "@mui/icons-material/Schedule";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TuneIcon from '@mui/icons-material/Tune';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MoneyIcon from '@mui/icons-material/Money';
import Person4Icon from '@mui/icons-material/Person4';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import PaymentsIcon from '@mui/icons-material/Payments';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AssessmentIcon from '@mui/icons-material/Assessment';

import SubMenu from "./SubMenu";
import Box from "@mui/material/Box";
export const CustomMenu = props => (
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
         {/* WARTEG */}
         <SubMenu primaryText="Pengelola" sx={{ color: "#000", fontSize: 13 }} leftIcon={<ManageAccountsIcon />}>
            <Menu.Item to="/pengelola/create" primaryText="Tambah pengelola" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
            <Menu.Item to="/pengelola" primaryText="Pengaturan Pengelola" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
         </SubMenu>
         <SubMenu primaryText="Investor" sx={{ color: "#000", fontSize: 13 }} leftIcon={<PaymentsIcon />}>
            <Menu.Item to="/investor/create" primaryText="Tambah Investor" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
            <Menu.Item to="/investor" primaryText="Pengaturan Investor" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
         </SubMenu>
         <SubMenu primaryText="Outlet" sx={{ color: "#000", fontSize: 13 }} leftIcon={<LocalGroceryStoreIcon />}>
            <Menu.Item to="/outlet/create" primaryText="Tambah Outlet" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
            <Menu.Item to="/outlet" primaryText="Pengaturan Outlet" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
         </SubMenu>
         <SubMenu primaryText="Keuangan" sx={{ color: "#000", fontSize: 13 }} leftIcon={<AssessmentIcon />}>
            <Menu.Item to="/keuangan/tambahlaporanoutlet" primaryText="Buat Lap Harian" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
            <Menu.Item to="/operation" primaryText="Biaya Operasional" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
            <Menu.Item to="/keuangan/laporan" primaryText="Lap Harian" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
            <Menu.Item to="/keuangan/laporanoutlet" primaryText="Lap Keuangan" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
         </SubMenu>
         <SubMenu primaryText="Master" sx={{ color: "#000", fontSize: 13 }} leftIcon={<TextSnippetIcon />}>
            <Menu.Item to="/periode" primaryText="Periode " sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
            <Menu.Item to="/itemoperation" primaryText="Item Operasi" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
            <Menu.Item to="/itempendapatan" primaryText="Item Pendapatan" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
            <Menu.Item to="/itembelanja" primaryText="Item Belanja" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
         </SubMenu>
         <SubMenu primaryText="User" sx={{ color: "#000", fontSize: 13 }} leftIcon={<AccountCircleIcon />}>
            <Menu.Item to="/user/create" primaryText="Add User" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
            <Menu.Item to="/user" primaryText="Manage User" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
            <Menu.Item to="/userrole" primaryText="User Role" sx={{ color: "#000", fontSize: 13 }} leftIcon={<KeyboardArrowRightIcon />} />
         </SubMenu>
         <Menu.Item
            to="/setting"
            primaryText="Setting"
            sx={{ color: "#000", fontSize: 13 }}
            leftIcon={<SettingsApplicationsIcon color="primary" />}
         />

      </Menu>
   </Box>
);
