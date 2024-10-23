import * as React from "react";
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
    BooleanInput,
    Labeled, DateField, TextField, ReferenceField
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

const ReservationShowForm = ({ open }) => {

    const { data, isLoading } = useGetList('vehicle_package');

    return (

        <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={8}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <Labeled source="date">
                            <DateField source="date" />
                        </Labeled>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Labeled source="reference">
                            <TextField source="reference" />
                        </Labeled>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box mt={2}>
                            <BooleanInput
                                row={true}
                                source="returned"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <Typography variant="h6" gutterBottom>
                    CUSTOMER
                                </Typography>
                <ReferenceField
                    source="customer_id"
                    reference="customers"
                    link={false}
                >
                </ReferenceField>
                <Spacer />

                <Typography variant="h6" gutterBottom>
                    SHIPPING ADDRESS
                </Typography>
                <ReferenceField
                    source="customer_id"
                    reference="customers"
                    link={false}
                >
                </ReferenceField>

            </Grid>
        </Grid>

    );
};

export default ReservationShowForm;
