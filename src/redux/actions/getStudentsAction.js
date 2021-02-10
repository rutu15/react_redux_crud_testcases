export const fetchStudentSuccess = (payload) => ({
    type: "FETCH_STUDENTS_SUCCESSFULLY",
    payload
});

export const fetchStudentFailure = (payload) => (
    {
        type: "FETCH_STUDENTS_FAILURE",
        payload
    });

export const fetchStudent = () => ({
    type: "FETCH_STUDENTS"
});