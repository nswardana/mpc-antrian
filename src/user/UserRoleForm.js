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

const UserRoleForm = ({ open }) => {
  const { data, isLoading } = useGetList('vehicle_package');
  return (
    <Box flex="1" mt={-1}>
       <Box display="flex">
        <TextInput source="role_name" label="Role" sx={{ width: "40%" }}/>
        </Box>
        <Box display="flex">
        <TextInput source="role_desc" label="Description" sx={{ width: "60%" }} multiline/>
        </Box>
    <Divider />
    </Box>
  );
};

export default UserRoleForm;
