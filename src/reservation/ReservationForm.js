import * as React from "react";
import {
  useGetList,
  Title,
  DateInput,
  Form, Toolbar,
  required,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  SelectInput,
  useCreate,
  useNotify,
  useRedirect,
  BooleanInput
} from 'react-admin';
import {
  Card,
  CardContent,
  Box,
  Grid,
  Typography,
  Link,
  Button,
  Divider,
  Avatar
} from "@mui/material";


const Spacer = () => <Box m={0.1}>&nbsp;</Box>;

const ReservationForm = ({ open }) => {

  const { data, isLoading } = useGetList('vehicle_package');

  return (
    <Box flex="1" mt={-1}>
      <Box display="flex">
        <ReferenceInput reference="vehicle" source="vehicle_id">
          <SelectInput
            label="Vehicle"
            source="id"
            optionText="vehicle_name"
            sx={{ width: "40%" }}
          />
        </ReferenceInput>
        <Spacer />
        <ReferenceInput reference="customer" source="customer_id">
          <SelectInput
            label="Customer"
            source="id"
            optionText="name"
            sx={{ width: "40%" }}
          />
        </ReferenceInput>
      </Box>
      <Box display="flex">
        <TextInput source="pick_up" label="Pick Up" sx={{ width: "40%" }} />
        <Spacer />
        <TextInput source="drop_off" label="Drop Off" sx={{ width: "40%" }} />
      </Box>
      <Box display="flex">
        <DateInput source="pickup_date" label="Pickup Date" sx={{ width: "30%" }} />
        <Spacer />
        <DateInput source="dropoff_date" label="Drop Off Date" sx={{ width: "30%" }} />
        <Spacer />
        <TextInput source="numberof_vehicle" label="Number of Vehicle" sx={{ width: "20%" }} />
      </Box>
      <Box display="flex">
        <ReferenceInput reference="vehicle_package" source="vehicle_package_id">
          <SelectInput
            label="Package"
            source="id"
            optionText="type_package"
            sx={{ width: "30%" }}
          />
        </ReferenceInput>
        <Spacer />
        <ReferenceInput reference="tariff" source="tariff_id">
          <SelectInput
            label="Tariff"
            source="id"
            optionText="name_price"
            sx={{ width: "30%" }}
          />
        </ReferenceInput>
      </Box>
      <Box display="flex">
        <TextInput source="notes" label="Notes" sx={{ width: "81%" }} />
      </Box>
      <Box display="flex">
        <SelectInput source="status" choices={[
          { id: 'Open', name: 'Open' },
          { id: 'Delivered', name: 'Delivered' },
          { id: 'Cancel', name: 'Cancel' },
          { id: 'Other', name: 'Other' },
        ]} sx={{ width: "30%" }} />
      </Box>
    </Box>
  );
};

export default ReservationForm;
