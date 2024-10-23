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


const Spacer = () => <Box m={0.1}>&nbsp;</Box>;
const Settings = () => {
    const componentRef = useRef();
    return (

        <Box flex="1">
            <Form>
                <Card>
                    <CardHeader avatar={
                        <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
                            IP
                </Avatar>
                    }
                        title="FORM ITEM BELANJA"
                    />
                    <CardContent>
                        <Box>
                            <Box display="flex">

                            </Box>
                        </Box>
                    </CardContent>
                    <Toolbar />
                </Card>
            </Form>
        </Box>

    );
};

export default Settings;
