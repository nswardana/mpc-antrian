import * as React from "react";
import {
  CreateBase,
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
const VehiclePackageCreate = () => {
  const [create] = useCreate();
  const notify = useNotify();
  const redirect = useRedirect();

  const postSave = (data) => {
    data.name = 1;
    create('insurance_company', { data });
  };

  const onSuccess = (data) => {
    notify(`Post created successfully`); // default message is 'ra.notification.created'
    redirect('/vehicle_package');
  };
  return (
    <CreateBase redirect="list" mutationOptions={{ onSuccess }}>
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
                    <VehiclePackageForm />
                  </Box>
                </Box>
              </CardContent>
              <Toolbar />
            </Card>
          </Form>
        </Box>
      </Box>
    </CreateBase>
  );
};

const handleClose = () => {
  //redirect("/reban");
};

const onSuccess = deal => {
  //redirect("/reban");
  // increase the index of all deals in the same stage as the new deal
};


const VehiclePackageForm = ({ open }) => {

  return (
    <Box flex="1" mt={-1}>
      <Box display="flex">
        <TextInput source="tariff_type" fullWidth />
      </Box>
      <Box display="flex">
        <TextInput source="package_name" fullWidth />
      </Box>
    </Box>
  );
};

export default VehiclePackageCreate;
