import * as React from "react";
import { TextInput,ReferenceInput,AutocompleteInput } from 'react-admin';
import { Box } from "@mui/material";
const Spacer = () => <Box m={0.1}>&nbsp;</Box>;

const CityForm = () => {
  return (
    <Box flex="1" mt={-1}>
      <Box display="flex">
        <TextInput source="city_name" fullWidth />
        </Box>
      <Box display="flex">
        <TextInput source="city_code" fullWidth />
      </Box>
      <Box display="flex">
        <ReferenceInput source="state_id" reference="state">
         <AutocompleteInput optionText="state_name" optionValue="id" source="state"  label="State"/>  
        </ReferenceInput>
      </Box>

    </Box>
  );
};

export default CityForm;
