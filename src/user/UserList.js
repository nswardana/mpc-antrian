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
  useGetIdentity,
  useAuthenticated
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
        label="Add User"
        sx={{ marginLeft: 2 }}
      />
    </TopToolbar>
  );
};

const UserList = () => {

  const location = useLocation();
  const matchCreate = matchPath("/user/create", location.pathname);
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
          <TextField source="username" label="Username" />
          <ReferenceField source="role_id" reference="userrole">
            <TextField source="role_id" label="Role" />
          </ReferenceField>

          <TextField source="email" label="email" />
          <TextField source="status" label="Status" />
          <EditButton />
        </Datagrid>
      </List>
    </>
  );
};

export default UserList;
