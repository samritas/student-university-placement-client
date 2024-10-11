// reducers/studentReducer.js

import {
  ADD_STUDENT_REQUEST,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAILURE,
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  FETCH_STUDENT_REQUEST,
  FETCH_STUDENT_SUCCESS,
  FETCH_STUDENT_FAILURE
} from '../actions/studentActions';

const initialState = {
  loading: false,
  student: null,
  error: null,
  students: [],
  studentById: null // Corrected key name and initialized as null
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case ADD_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        student: action.payload,
        error: null
      };
    case ADD_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload,
        loading: false,
        error: null
      };
    case FETCH_STUDENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        studentById: null // Resetting studentById data before fetching new student
      };
    case FETCH_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        studentById: action.payload,
        error: null
      };
    case FETCH_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default studentReducer;
