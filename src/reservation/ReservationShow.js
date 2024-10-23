import * as React from "react";
import { useRef } from "react";

import {
    Edit,
    Labeled,
    DateInput,
    Form, Toolbar,
    required,
    TextInput,
    ReferenceInput,
    AutocompleteInput,
    SelectInput,
    useGetOne,
    useNotify,
    useRedirect,
    FunctionField,
    TextField,
    useRecordContext,
    SimpleShowLayout
} from 'react-admin';
import {
    Card,
    CardHeader,
    CardContent,
    Box,
    Grid,
    Stack,
    Typography,
    Link,
    Button,
    Divider,
    Avatar
} from "@mui/material";


//import ReservationShowForm from './ReservationShowForm';
import ReservationForm from './ReservationForm';

const CustomerDetail = () => {
    const record = useRecordContext();
    const { data: customer, isLoading, error } = useGetOne('customer', { id: record.customer_id });

    console.log("customer", customer);
    if (isLoading) { return <p>LOADING</p>; }
    if (error) { return <p>ERROR</p>; }

    return (
        <Card>
            <CardHeader avatar={
                <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
                    C
            </Avatar>
            }
                title="Customer"
            />
            <CardContent>
                <Box mt={0} display="flex">
                    <Box flex="1">
                        <Typography>
                            Name
                        </Typography>
                        <span>{customer ?.first_name} {customer ?.last_name}
                            {customer ?.email}</span>
                        <Typography>
                            Email
                        </Typography>
                        <span>
                            {customer ?.email}</span>
                        <Typography>
                            Address
                        </Typography>
                        <span>
                            {customer ?.address}</span>
                        <Typography>
                            Mobile
                        </Typography>
                        <span>
                            {customer ?.mobile}</span>

                    </Box>
                </Box >
            </CardContent>
        </Card>

    );
};



const Spacer = () => <Box m={0.1}>&nbsp;</Box>;
const ReservationShow = () => {
    const componentRef = useRef();
    return (
        <Edit component="div">
            <Box mt={2} display="flex">
                <Box flex="1">
                    <Form>
                        <Card>
                            <CardHeader
                                title="RESERVATION FORM"
                            />
                            <CardContent>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sm={12} md={8}>
                                        <Card>
                                            <CardHeader avatar={
                                                <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
                                                    R
                                             </Avatar>
                                            }
                                                title="Reservation"
                                            />
                                            <CardContent>

                                                <ReservationForm />
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <CustomerDetail />


                                    </Grid>
                                </Grid>

                            </CardContent>
                            <Toolbar />
                        </Card>
                    </Form>
                </Box>
            </Box>
        </Edit>
    );
};

export default ReservationShow;
