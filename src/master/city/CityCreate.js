import * as React from "react";
import { 
  CreateBase, 
  Title,
  Form, Toolbar,
  useCreate,
  useNotify,
  useRedirect } from 'react-admin';
import {
  Card,
  CardContent,
  Box,
  Typography,
  } from "@mui/material";

import CityForm from './CityForm';

const Spacer = () => <Box m={0.1}>&nbsp;</Box>;
const CityCreate = () => {
  const [create] = useCreate();
  const notify = useNotify();
  const redirect = useRedirect();

  const postSave = (data) => {
     data.name=1;
     create('data', { data });
  };

  const onSuccess = (data) => {
    notify(`Post created successfully`); // default message is 'ra.notification.created'
    redirect('list');
  };
  return (
  <CreateBase redirect="list" mutationOptions={{ onSuccess }}>
    <Box mt={2} display="flex">
      <Box flex="1">
          <Form>
          <Title title="City" />
          <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>City</Typography>
                    <Box>
                    <Box display="flex">
                    <CityForm />
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
export default CityCreate;
