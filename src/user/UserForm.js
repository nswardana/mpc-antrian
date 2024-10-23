import * as React from "react";
import { useState } from "react";
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

const UserForm = ({ setUsername, setRoleId, setEmail, setStatus }) => {

  return (
    <Box flex="1" mt={-1}>
      <Box display="flex">
        <TextInput source="username" label="Username" sx={{ width: "100%" }} onChange={e => {
          setUsername(e.target.value)
        }} />
      </Box>
      <Box display="flex">
        <ReferenceInput reference="userrole" source="role_id">
          <SelectInput
            label="Role"
            source="role_id"
            optionText="role_name"
            sx={{ width: "50%" }}
            onChange={e => {
              setRoleId(e.target.value)
            }}
          />
        </ReferenceInput>
      </Box>
      <Box display="flex">
        <TextInput source="email" label="Email" sx={{ width: "50%" }} onChange={e => {
          setEmail(e.target.value)
        }} />
        <Spacer />
        <SelectInput source="status" choices={[
          { id: 'Active', name: 'Active' },
          { id: 'Inactive', name: 'Inactive' },
        ]} sx={{ width: "50%" }} onChange={e => {
          setStatus(e.target.value)
        }} />
      </Box>
      <Divider />
    </Box>
  );
};

export default UserForm;
