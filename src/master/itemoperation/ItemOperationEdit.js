import * as React from "react";
import { useRef } from "react";

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
  CardHeader,
  CardContent,
  Box,
  Grid,
  Typography,
  Link,
  Button,
  Divider,
  Avatar
} from "@mui/material";

import ItemOperationForm from './ItemOperationForm';

const Spacer = () => <Box m={0.1}>&nbsp;</Box>;
const ItemOperationEdit = () => {
  const componentRef = useRef();
  return (
    <Edit component="div">
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
                  IO
                </Avatar>
              }
                title="FORM ITEM OPERATION"
              />
              <CardContent>
                <Box>
                  <Box display="flex">
                    <ItemOperationForm />
                  </Box>
                </Box>
              </CardContent>
              <Toolbar />
            </Card>
          </Form>
        </Box>
      </Box>
    </Edit>
  );
};

export default ItemOperationEdit;
