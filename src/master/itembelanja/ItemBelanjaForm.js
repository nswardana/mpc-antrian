import * as React from "react";
import {
  useGetList,
  Title,
  DateInput,
  Form, Toolbar,
  required,
  TextInput,
  ReferenceInput,
  CheckboxGroupInput,
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
const SectionTitle = ({ label }) => {
  return (
    <Typography gutterBottom>
      {label}
    </Typography>
  );
};

const ItemBelanjaForm = ({ open }) => {
  const choices = [
    { id: '1', label: 'Set Default' }
  ];


  return (
    <Box flex="1" mt={-1} sx={{ width: "50%" }}>
      <Box display="flex">
        <TextInput source="name" label="Nama Barang" sx={{ width: "100%" }} variant="outlined" />
      </Box>
      <Box display="flex">
        <BooleanInput
          row={1}
          source="isDefault"
          label="Set Default"
        />
      </Box>
    </Box>
  );
};

export default ItemBelanjaForm;
