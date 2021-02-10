/* eslint react/prop-types: 0 */
import React from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
const Modal = ({open,handleClose,handleInputChange,handleSubmit}) => {

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Student</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    name="email"
                    label="email"
                    type="email"
                    fullWidth
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    name="course"
                    label="course"
                    type="text"
                    fullWidth
                    onChange={handleInputChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>

                <Button onClick={handleSubmit} color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Modal