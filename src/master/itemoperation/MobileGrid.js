import * as React from 'react';
import { Box, Grid, Card, CardHeader, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {
    TextField,
    EditButton,
    useListContext,
    RecordContextProvider,
} from 'react-admin';

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    //padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const MobileGrid = () => {
    const { data, isLoading } = useListContext();
    if (isLoading || data.length === 0) {
        return null;
    }
    return (
        <Box margin="0.5em">
            {data.map(record => (
                <RecordContextProvider key={record.id} value={record}>
                    <Card sx={{ margin: '0.5rem 0' }}>
                        <CardHeader
                            title={<Typography variant="h6">Pengelola #<TextField source="id" variant="h6" /></Typography>}
                            subheader={""}
                            action={<EditButton />}
                        />
                        <CardContent sx={{ pt: 0 }} >

                            <Grid container spacing={0} >
                                <Grid item xs={3} >
                                    <Typography variant="subtitle1">
                                        Nama
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField source="nama" />
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="subtitle1">
                                        Alamat
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField source="alamat" />
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="subtitle1">
                                        No Tlp
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField source="no_tlp" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </RecordContextProvider>
            ))}
        </Box>
    );
};

export default MobileGrid;