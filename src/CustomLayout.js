// in src/Layout.js
import * as React from 'react';
import { Drawer } from '@mui/material';
import { SidebarClasses, useLocale, useSidebarState } from 'react-admin';

import { Layout, Sidebar } from "react-admin";
import { usePermissions } from 'react-admin';
import { CustomMenu } from "./CustomMenu";
import { UserMenu } from "./UserMenu";


export const MySidebar = ({ children }) => {
  const [open, setOpen] = useSidebarState();
  useLocale(); // force redraw on locale change

  const toggleSidebar = () => setOpen(false);

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={toggleSidebar}
      classes={SidebarClasses}
    >
      {children}
    </Drawer>
  );
};


export const CustomLayout = props => {
  const { permissions } = usePermissions();
  if (permissions === '"admin"') {
    return (<Layout {...props} menu={CustomMenu} sidebar={MySidebar} />)
  }
  else {
    console.log("permissions", permissions);
    return (<Layout {...props} menu={UserMenu} sidebar={MySidebar} />)
  }

};
