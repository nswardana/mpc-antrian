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

import ItemOperationShowForm from './ItemOperationShowForm';

const Spacer = () => <Box m={0.1}>&nbsp;</Box>;
const ItemOperationShow = () => {
    const componentRef = useRef();
    return (
        <Edit component="div">
            <Box mt={2} display="flex">
                <Box flex="1">
                    <Form>
                        <Card>
                            <CardHeader avatar={
                                <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
                                    D
                                </Avatar>
                            }
                                title="FORM ITEM OPERATION"
                            />
                            <CardContent>
                                <Box>
                                    <Box display="flex">
                                        <ItemOperationShowForm />
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

export default ItemOperationShow;
