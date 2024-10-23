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
const SettingEdit = () => {
  return (
    <Edit component="div" mutationMode="undoable">
      <SettingForm />
    </Edit>
  );
};

const SettingForm = ({ open }) => {

  return (
    <Box mt={2} display="flex">
      <Box flex="1">
        <Form>
          <Title title="Setting" />
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Setting</Typography>
              <Box>
                <Box display="flex">
                  <TextInput source="email" fullWidth />
                </Box>
                <Box display="flex">
                  <TextInput source="site_name" fullWidth />
                </Box>
                <Box display="flex">
                  <ReferenceInput reference="periode" source="periode_id">
                    <SelectInput
                      label="Periode"
                      source="periode_id"
                      optionText="periode"
                      sx={{ width: "100%" }}
                      variant="outlined"
                    />
                  </ReferenceInput>
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

export default SettingEdit;
