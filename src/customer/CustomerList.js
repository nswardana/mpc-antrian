import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  SearchInput,
  EditButton,
  ShowButton,
  useTranslate,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  ReferenceField,
  useGetIdentity
} from "react-admin";
import { Chip } from "@mui/material";
import { matchPath, useLocation } from "react-router";

const QuickFilter = ({ label }) => {
  const translate = useTranslate();
  return <Chip sx={{ marginBottom: 1 }} label={translate(label)} />;
};
const postFilters = [
  <SearchInput source="name" alwaysOn />,
 ];

const GridActions = () => {
  return (
    <TopToolbar>
      <FilterButton />
      <ExportButton />
      <CreateButton
        variant="contained"
        label="Add Customer"
        sx={{ marginLeft: 2 }}
      />
    </TopToolbar>
  );
};

const CustomerList = () => {
  const location = useLocation();
  const matchCreate = matchPath("/customer/create", location.pathname);
  const { identity } = useGetIdentity();

  if (!identity) return null;

  return (
    <>
      <List filters={postFilters} actions={<GridActions />}>
        <Datagrid
          rowClick="show"
          sx={{
            "& .RaDatagrid-thead": {
              backgroundColor: "#000"
            }
          }}
        >
          <TextField source="id" label="Id" />
          <TextField source="salutation" label="Salutation" />
          <TextField source="name" label="Name" />
          <TextField source="email" label="Email" />
          <TextField source="mobile" label="Mobile"/>
          <TextField source="status" label="Status" />
          <EditButton />
          </Datagrid>
      </List>
    </>
  );
};

export default CustomerList;
