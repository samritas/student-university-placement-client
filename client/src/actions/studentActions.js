// actions/studentActions.js
import axios from 'axios';

export const ADD_STUDENT_REQUEST = 'ADD_STUDENT_REQUEST';
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const ADD_STUDENT_FAILURE = 'ADD_STUDENT_FAILURE';

// Action types
export const FETCH_STUDENTS_REQUEST = 'FETCH_STUDENTS_REQUEST';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE';

export const FETCH_STUDENT_REQUEST = 'FETCH_STUDENTS_REQUEST';
export const FETCH_STUDENT_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENT_FAILURE = 'FETCH_STUDENTS_FAILURE';

// Action creators
const fetchStudentsRequest = () => ({
  type: FETCH_STUDENTS_REQUEST
});

const fetchStudentsSuccess = (students) => ({
  type: FETCH_STUDENTS_SUCCESS,
  payload: students
});

const fetchStudentsFailure = (error) => ({
  type: FETCH_STUDENTS_FAILURE,
  payload: error
});

const fetchStudentRequest = () => ({
  type: FETCH_STUDENT_REQUEST
});

const fetchStudentSuccess = (students) => ({
  type: FETCH_STUDENT_SUCCESS,
  payload: students
});

const fetchStudentFailure = (error) => ({
  type: FETCH_STUDENT_FAILURE,
  payload: error
});

const addStudentRequest = () => ({
  type: ADD_STUDENT_REQUEST
});

const addStudentSuccess = (student) => ({
  type: ADD_STUDENT_SUCCESS,
  payload: student
});

const addStudentFailure = (error) => ({
  type: ADD_STUDENT_FAILURE,
  payload: error
});

// Async action to fetch all students
export const fetchStudents = () => async (dispatch) => {
  dispatch(fetchStudentsRequest());
  try {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'x-auth-token': token
      }
    };
    const response = await axios.get('http://localhost:3000/admin/studentinfo', config);
    dispatch(fetchStudentsSuccess(response.data));
  } catch (error) {
    dispatch(fetchStudentsFailure(error.message));
  }
};

// Async action to fetch a specific student by ID
export const fetchStudentById = (studentId) => async (dispatch) => {
  dispatch(fetchStudentRequest());
  try {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'x-auth-token': token
      }
    };
    const response = await axios.get(`http://localhost:3000/student/studentinfo/${studentId}`, config);
    dispatch(fetchStudentSuccess([response.data])); // Assuming response.data is a single student object
  } catch (error) {
    dispatch(fetchStudentFailure(error.message));
  }
};

export const addStudent = (studentData) => async (dispatch) => {
  dispatch(addStudentRequest());
  const token = localStorage.getItem('token'); // Retrieve the token from localStorage
  try {
    const response = await axios.post('http://localhost:3000/admin/studentinfo', studentData, {
      headers: {
        'x-auth-token': token // Include the token in the headers
      }
    });
    dispatch(addStudentSuccess(response.data));
  } catch (error) {
    dispatch(addStudentFailure(error.message));
  }
};
