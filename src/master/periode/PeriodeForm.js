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
const SectionTitle = ({ label }) => {
  return (
    <Typography gutterBottom>
      {label}
    </Typography>
  );
};

const PeriodeForm = ({ open }) => {
  return (
    <Box flex="1" mt={-1} sx={{ width: "50%" }}>
      <Box display="flex">
        <TextInput source="bulan" label="Bulan" sx={{ width: "100%" }} variant="outlined" />
        <Spacer />
      </Box>
      <Box display="flex">
        <TextInput source="tahun" label="Tahun" sx={{ width: "100%" }} variant="outlined" />
      </Box>
    </Box>
  );
};

export default PeriodeForm;
