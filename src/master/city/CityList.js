import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Title,
  NumberField,
  ChipField,
  SearchInput,
  DateInput,
  TextInput,
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
  <SearchInput source="city_name" alwaysOn />,
 ];

const GridActions = () => {
  return (
    <TopToolbar>
      <FilterButton />
      <ExportButton />
      <CreateButton
        variant="contained"
        label="Add City"
        sx={{ marginLeft: 2 }}
      />
    </TopToolbar>
  );
};

const CityList = () => {
  const location = useLocation();
  const matchCreate = matchPath("/city/create", location.pathname);
  //const matchCreate = true;
  const { identity } = useGetIdentity();

  if (!identity) return null;

  return (
    <>
      <Title title="City" />
      <List filters={postFilters} actions={<GridActions />}>
        <Datagrid
          rowClick="show"
          sx={{
            "& .RaDatagrid-thead": {
              backgroundColor: "#000"
            }
          }}
        >
          <TextField source="city_name" label="City Name" />
       </Datagrid>
      </List>
    </>
  );
};

export default CityList;
