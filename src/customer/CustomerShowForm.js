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
    useRecordContext
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
const dateFormatter = (v) => {
    // v is a `Date` object
    if (!(v instanceof Date) || Number.isNaN(v)) return;
    const pad = "00";
    const yy = v.getFullYear().toString();
    const mm = (v.getMonth() + 1).toString();
    const dd = v.getDate().toString();
    return `${yy}-${(pad + mm).slice(-2)}-${(pad + dd).slice(-2)}`;
};

const CustomerShowForm = ({ open }) => {
    const record = useRecordContext();

    const { data, isLoading } = useGetList('vehicle_package');
    if (!record) return null;
    return (
        <div>Bismillah {record}</div>
    );
};

export default CustomerShowForm;
