import * as React from "react";
import {
  CreateBase,
  Title,
  Form, Toolbar,
  required,
  useCreate,
  useNotify,
  useRedirect,
} from 'react-admin';
import {
  Card,
  CardContent,
  CardHeader,
  Box,
  Avatar
} from "@mui/material";

import ItemPendapatanForm from './ItemPendapatanForm';

const Spacer = () => <Box m={0.1}>&nbsp;</Box>;
const ItemPendapatanCreate = () => {
  const [create] = useCreate();
  const notify = useNotify();
  const redirect = useRedirect();

  const postSave = (data) => {
    data.name = 1;
    create('itempendapatan', { data });
  };

  const onSuccess = (data) => {
    notify(`Post created successfully`); // default message is 'ra.notification.created'
    redirect('/itempendapatan');
  };
  return (
    <CreateBase redirect="list" mutationOptions={{ onSuccess }}>
      <Box mt={2} display="flex" sx={{
        width: {
          sm: 500, // theme.breakpoints.up('sm')
          xl: 500, // theme.breakpoints.up('xl')
        },
      }}>
        <Title>Form Item Pendapatan</Title>
        <Box flex="1">
          <Form>
            <Card>
              <CardHeader avatar={
                <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
                  P
                </Avatar>
              }
                title="FORM ITEM PENDAPATAN"
              />
              <CardContent>
                <Box>
                  <Box display="flex">
                    <ItemPendapatanForm />
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


export default ItemPendapatanCreate;
