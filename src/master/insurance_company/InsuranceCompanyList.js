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
        label="Add Insurance Company"
        sx={{ marginLeft: 2 }}
      />
    </TopToolbar>
  );
};

const InsuranceCompanyList = () => {
  const location = useLocation();
  const matchCreate = matchPath("/insurance_company/create", location.pathname);
  //const matchCreate = true;
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
          <TextField source="name" label="Insurance Company" />
          <EditButton />
          </Datagrid>
      </List>
    </>
  );
};

export default InsuranceCompanyList;
