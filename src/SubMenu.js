import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { List, ListItem, ListItemText, Collapse } from "@mui/material";
import { useTranslate, useSidebarState } from "react-admin";

export const SubMenu = props => {
  const {
    isDropdownOpen = false,
    primaryText,
    leftIcon,
    children,
    ...rest
  } = props;
  const translate = useTranslate();
  const [open] = useSidebarState();
  const [isOpen, setIsOpen] = useState(isDropdownOpen);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <ListItem
        dense
        button
        onClick={handleToggle}
        sx={{
          paddingLeft: "1rem",
          fontSize: 13,
          color: "#000"
        }}
      >
        {isOpen ? leftIcon : leftIcon}
        <ListItemText
          inset
          disableTypography
          primary={translate(primaryText)}
          sx={{
            paddingLeft: 2,
            fontSize: 13,
            color: "#000"
          }}
        />
      </ListItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={
            open
              ? {
                fontSize: 13,
                color: "#000",
                paddingLeft: "25px",
                transition:
                    "padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"
                }
              : {
                fontSize: 13,
                color: "#000",
                paddingLeft: 0,
                transition:
                "padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"
                }
          }
        >
          {children}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default SubMenu;
