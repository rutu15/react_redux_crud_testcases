import React, {useEffect, useState} from 'react';
import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {
    fetchStudentSuccess,
    fetchStudentFailure,
    fetchStudent,
    createStudent,
    createStudentFailure,
    createStudentSuccess
} from "../redux/actions/index";
import API from "../services/api"
import Modal from "./modal"
/* Styles */
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    }
});

function Listing() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const data = useSelector(state => state.GetUserReducer.data);
    const loading = useSelector(state => state.GetUserReducer.loading);
    const [open, setOpen] = useState(false);
    const [studentData, setStudentData] = useState({
        name: '',
        email: '',
        course: ''
    })
    useEffect(() => {

        API('get', 'students').then(r =>
            dispatch(fetchStudentSuccess(r))
        )
            .catch((err) => {
                dispatch(fetchStudentFailure(err))
            })
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = () => {
        API('post', 'students', studentData).then(r => {
            dispatch (createStudentSuccess(r))
        })
            .catch((err) => {
                dispatch (createStudentFailure(err))
            })

    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setStudentData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        loading ? <div>Loading</div> :
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Course</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {item.name}
                                    </TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.course}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow><TableCell><Button onClick={() => setOpen(true)} variant="contained"
                                                         color="primary">Add</Button></TableCell></TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Modal
                    open={open}
                    handleClose={() => handleClose()}
                    handleInputChange={(e) => handleInputChange(e)}
                    handleSubmit={function () {
                        handleAdd()
                        handleClose()
                    }}
                />
            </div>
    );
}

export default Listing;
