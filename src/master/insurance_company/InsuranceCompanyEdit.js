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
const InsuranceCompanyEdit = () => {
  return (
    <Edit component="div">
      <InsuranceCompanyForm />
    </Edit>
  );
};

const InsuranceCompanyForm = ({ open }) => {

  return (
    <Box mt={2} display="flex">
        <Box flex="1">
            <Form>
            <Title title="Insurance Company" />
                <Card>
                <CardContent>
                <Typography variant="h6" gutterBottom>
                Insurance Company
                </Typography>
                <Box>
                    <Box display="flex">
                    <TextInput source="name" fullWidth />
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

export default InsuranceCompanyEdit;
