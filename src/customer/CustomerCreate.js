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
  CardHeader,
  Box,
  Grid,
  Typography,
  Link,
  Button,
  Divider,
  Avatar
} from "@mui/material";

import CustomerForm from './CustomerForm';

const Spacer = () => <Box m={0.1}>&nbsp;</Box>;
const CustomerCreate = () => {
  const [create] = useCreate();
  const notify = useNotify();
  const redirect = useRedirect();

  const postSave = (data) => {
    data.name = 1;
    create('tariff', { data });
  };

  const onSuccess = (data) => {
    notify(`Post created successfully`); // default message is 'ra.notification.created'
    redirect('/customer');
  };
  return (
    <CreateBase redirect="list" mutationOptions={{ onSuccess }}>
      <Box mt={2} display="flex">
        <Box flex="1">
          <Form>
            <Card>
              <CardHeader avatar={
                <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
                  C
          </Avatar>
              }
                title="CUSTOMER FORM"
              />
              <CardContent>
                <Box>
                  <Box display="flex">
                    <CustomerForm />
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


export default CustomerCreate;
