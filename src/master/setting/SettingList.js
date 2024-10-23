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
  useGetIdentity,
  ReferenceField,
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
      <ExportButton />
    </TopToolbar>
  );
};

const SettingList = () => {
  const location = useLocation();
  const matchCreate = matchPath("/setting/create", location.pathname);
  //const matchCreate = true;
  const { identity } = useGetIdentity();

  if (!identity) return null;

  return (
    <>
      <List actions={<GridActions />}>
        <Datagrid
          rowClick="show"
          sx={{
            "& .RaDatagrid-thead": {
              backgroundColor: "#000"
            }
          }}>
          <TextField source="email" label="email" />
          <TextField source="site_name" label="Site Name" />
          <ReferenceField label="Periode" source="periode_id" reference="periode">
            <TextField source="periode" />
          </ReferenceField>
          <EditButton />
        </Datagrid>
      </List>
    </>
  );
};

export default SettingList;
