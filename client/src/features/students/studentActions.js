import * as types from './studentTypes';
import {
  fetchStudentsAPI,
  fetchStudentByIdAPI,
  addStudentAPI,
} from './studentAPI';

const request = (type) => ({ type });
const success = (type, payload) => ({ type, payload });
const failure = (type, error) => ({ type, payload: error });


export const fetchStudents = () => async (dispatch) => {
  dispatch(request(types.FETCH_STUDENTS_REQUEST));
  try {
    const response = await fetchStudentsAPI();
    dispatch(success(types.FETCH_STUDENTS_SUCCESS, response.data));
  } catch (err) {
    dispatch(failure(types.FETCH_STUDENTS_FAILURE, err.message));
  }
};

export const fetchStudentById = (id) => async (dispatch) => {
  dispatch(request(types.FETCH_STUDENT_REQUEST));
  try {
    const response = await fetchStudentByIdAPI(id);
    dispatch(success(types.FETCH_STUDENT_SUCCESS, [response.data]));
  } catch (err) {
    dispatch(failure(types.FETCH_STUDENT_FAILURE, err.message));
  }
};

export const addStudent = (data) => async (dispatch) => {
  dispatch(request(types.ADD_STUDENT_REQUEST));
  try {
    const response = await addStudentAPI(data);
    dispatch(success(types.ADD_STUDENT_SUCCESS, response.data));
  } catch (err) {
    dispatch(failure(types.ADD_STUDENT_FAILURE, err.message));
  }
};
