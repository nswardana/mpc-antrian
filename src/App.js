import * as React from "react";
import { Admin, Resource, CustomRoutes, defaultTheme } from "react-admin";
import { Route } from "react-router-dom";
import dataProvider from "./dataProvider";

import { CustomLayout } from "./CustomLayout";
import MyLayout from "./MyLayout";

import UserList from "./user/UserList";
import UserCreate from "./user/UserCreate";
import UserEdit from "./user/UserEdit";

import UserRoleList from "./user/UserRoleList";
import UserRoleCreate from "./user/UserRoleCreate";
import UserRoleEdit from "./user/UserRoleEdit";

import AdminDashboard from "./dashboard/AdminDashboard";
import { createTheme } from "@mui/material/styles";

const primary = {
  main: "#368fe7",
  dark: "#1a91da"
};

const myTheme = createTheme({
  ...defaultTheme,
  typography: {
    
    fontSize: 13,
    fontWeightRegular: 500,
    body1: {
      fontSize: "1rem"
    }
  },
  palette: {
    primary
  },
  spacing: 8,
  overrides: {
    MuiTableRow: {
      head: {
        backgroundColor: "lightgray",
        "& > th ": {
          color: "black",
          fontWeight: "bold"
        }
      }
    }
  }
});

const App = () => (
  <Admin theme={myTheme}  dataProvider={dataProvider} layout={MyLayout}>
    <CustomRoutes>
      <Route path="/dashboard" element={<AdminDashboard />} />
    </CustomRoutes>
    <Resource name="user" list={UserList} edit={UserEdit} create={UserCreate} />
  </Admin>
);

export default App;
