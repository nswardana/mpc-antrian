import * as React from "react";
import {
  Edit,
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
const VehiclePackageEdit = () => {
  return (
    <Edit component="div">
      <VehiclePackageForm />
    </Edit>
  );
};

const VehiclePackageForm = ({ open }) => {

  return (
    <Box mt={2} display="flex">
      <Box flex="1">
        <Form>
          <Title title="Vehicle Package" />
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Vehicle Package
                </Typography>
              <Box>
                <Box display="flex">
                  <TextInput source="tariff_type" label="Tariff" fullWidth />
                </Box>
                <Box display="flex">
                  <TextInput source="package_name" fullWidth />
                </Box>
              </Box>
            </CardContent>
            <Toolbar />
          </Card>
        </Form>
      </Box>
    </Box>
  );
};

export default VehiclePackageEdit;
