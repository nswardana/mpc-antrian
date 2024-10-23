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
  BooleanInput } from 'react-admin';
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
const dateFormatter = (v) => {
	// v is a `Date` object
	if (!(v instanceof Date) || Number.isNaN(v)) return;
	const pad = "00";
	const yy = v.getFullYear().toString();
	const mm = (v.getMonth() + 1).toString();
	const dd = v.getDate().toString();
	return `${yy}-${(pad + mm).slice(-2)}-${(pad + dd).slice(-2)}`;
};

const CustomerForm = ({ open }) => {
  const { data, isLoading } = useGetList('vehicle_package');
  return (
    <Box flex="1" mt={-1}>
      <Box display="flex">
         <SelectInput source="salutation" choices={[
            { id: 'Mr', name: 'Mr.' },
            { id: 'Miss', name: 'Miss.' },
            { id: 'Mrs', name: 'Miss.' },
        ]} sx={{ width: "20%" }}/>
        <Spacer />
        <TextInput source="first_name" label="First Name" sx={{ width: "40%" }}/>
        <Spacer />
        <TextInput source="last_name" label="Last Name" sx={{ width: "40%" }}/>
      </Box>
      <Box display="flex">
        <TextInput source="email" label="Email Address" sx={{ width: "20%" }}/>
        <Spacer />
        <DateInput source="date_of_birth" label="Date of Birth" sx={{ width: "40%" }} options={{ format: 'DD/MM/YYYY' }} />
        </Box>
      <Box display="flex">
        <TextInput source="passport_number" label="Pasport Number" sx={{ width: "25%" }}/>
        <Spacer />
        <DateInput source="issue_date" label="Issue of date" sx={{ width: "25%" }}/>
        <Spacer />
        <DateInput source="expiry_date" label="Expiry of date" sx={{ width: "25%" }}/>
        <Spacer />
        <TextInput source="issue_place" label="Issue Place" sx={{ width: "25%" }}/>
        </Box>
      <Box display="flex">
        <TextInput source="pin_code" label="Pin Code" sx={{ width: "20%" }}/>
        <Spacer />
        <TextInput source="mobile" label="Mobile" sx={{ width: "40%" }}/>
        <Spacer />
        <TextInput source="alterate_number" label="Alterate Number" sx={{ width: "40%" }}/>
        </Box>
      <Box display="flex">
        <TextInput source="address" label="Address" sx={{ width: "50%" }} multiline/>
        <Spacer />
        <TextInput source="remarks" label="Remarks" sx={{ width: "50%" }} multiline/>
        </Box>
      <Box display="flex">
        <SelectInput source="status" choices={[
            { id: 'Active', name: 'Active' },
            { id: 'Inactive', name: 'Inactive' },
        ]} sx={{ width: "50%" }}/>
        <Spacer />
       </Box>
      
    <Divider />
    </Box>
  );
};

export default CustomerForm;
