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
  BooleanInput } from 'react-admin';
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

import UserForm from './UserForm';

const Spacer = () => <Box m={0.1}>&nbsp;</Box>;
const UserCreate = () => {
  const [create] = useCreate();
  const notify = useNotify();
  const redirect = useRedirect();

  const postSave = (data) => {
     data.name=1;
     create('tariff', { data });
  };

  const onSuccess = (data) => {
    notify(`Post created successfully`); // default message is 'ra.notification.created'
    redirect('/user');
  };
  return (
    <CreateBase redirect="list" mutationOptions={{ onSuccess }}>
    <Box mt={2} display="flex" sx={{
        width: {
          sm: 500, // theme.breakpoints.up('sm')
          xl: 500, // theme.breakpoints.up('xl')
        },
      }}>
        <Box flex="1">
        <Form>
        <Card>
          <CardHeader avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            U
          </Avatar>
          }
          title="USER FORM"
          />
            <CardContent>
              <Box>
                <Box display="flex">
                <UserForm />
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


export default UserCreate;
