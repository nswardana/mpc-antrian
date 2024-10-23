import React, { useState } from 'react';
import {
    required,
    Button,
    SaveButton,
    TextInput,
    useCreate,
    useNotify,
    SimpleForm,
    useDataProvider,
    Loading,

} from 'react-admin';
import { useDelete, useRecordContext } from 'react-admin';

import IconDelete from '@mui/icons-material/Delete';
import IconCancel from '@mui/icons-material/Cancel';
import PengelolaForm from "../pengelola/PengelolaForm";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { Dialog, DialogProps, DialogTitle, DialogContent, DialogActions } from '@mui/material'

function DeleteConfirmation({ onChange, id, source }) {


    const record = useRecordContext();
    const [loading, setLoading] = useState(false);
    const [isConfirm, setConfirm] = useState(false);

    const notify = useNotify();
    const [showDialog, setShowDialog] = useState(false);
    const [deleteOne, { isLoading, error }] = useDelete();

    const handleClick = () => {
        setShowDialog(true);
    };

    const handleCloseClick = () => {
        setShowDialog(false);
    };

    const handleSubmit = () => {
        console.log("DeleteConfirmation", id);
        setShowDialog(false);
        setConfirm(true);
        deleteOne(
            source,
            { id: id, previousData: record }
        );

        onChange(isConfirm, id);
    };

    return (
        <>
            <RemoveCircleOutlineIcon onClick={handleClick} variant="outlined" />
            <Dialog
                fullWidth
                open={showDialog}
                onClose={handleCloseClick}
                aria-label="Konfirmasi"
            >
                <DialogTitle>Konfirmasi</DialogTitle>
                <DialogContent>
                    Apakah yakin akan mengapus data ini?
                 </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleSubmit} sx={{ width: "40px", height: "40px", margin: "8px" }} >
                        <IconDelete />
                    </Button>
                    <Button variant="outlined" onClick={handleCloseClick} sx={{ width: "40px", height: "40px", margin: "8px" }} >
                        <IconCancel />
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default DeleteConfirmation;
