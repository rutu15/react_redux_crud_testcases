
export const createStudent = (payload) => ({
    type: "CREATE_STUDENT",
    payload
});

export const createStudentSuccess = (payload) => ({
    type: "CREATE_STUDENT_SUCCESSFULLY",
    payload
});

export const createStudentFailure = (payload) => (
    {
    type: "CREATE_STUDENT_FAILURE",
    payload
});
