import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  ReferenceField,
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
  <SearchInput source="vehicle_name" alwaysOn />,
];

const GridActions = () => {
  return (
    <TopToolbar>
      <FilterButton />
      <ExportButton />
      <CreateButton
        variant="contained"
        label="Add Vehicle"
        sx={{ marginLeft: 2 }}
      />
    </TopToolbar>
  );
};

const ReservationList = () => {
  const location = useLocation();
  const matchCreate = matchPath("/reservation/create", location.pathname);
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
          <ReferenceField source="vehicle_id" reference="vehicle">
            <TextField source="vehicle_name" />
          </ReferenceField>
          <ReferenceField source="vehicle_package_id" reference="vehicle_package" label="Package">
            <TextField source="type_package" label="Package" />
          </ReferenceField>
          <TextField source="pick_up" label="Pickup" />
          <TextField source="drop_off" label="Drop Off" />
          <DateField source="pickup_date" label="Pickup Up Date" />
          <DateField source="dropoff_date" label="Drop Off Date" />
          <ReferenceField source="customer_id" reference="customer">
            <TextField source="first_name" />
          </ReferenceField>
          <TextField source="status" label="status" />
          <ShowButton />
          <EditButton />

        </Datagrid>
      </List>
    </>
  );
};

export default ReservationList;
