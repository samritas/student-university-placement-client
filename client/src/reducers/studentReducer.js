import * as types from '../features/students/studentTypes';

const initialState = {
  loading: false,
  error: null,
  student: null,
  students: [],
  studentById: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_STUDENT_REQUEST:
    case types.FETCH_STUDENTS_REQUEST:
    case types.FETCH_STUDENT_REQUEST:
      return { ...state, loading: true, error: null };

    case types.ADD_STUDENT_SUCCESS:
      return { ...state, loading: false, student: action.payload };

    case types.FETCH_STUDENTS_SUCCESS:
      return { ...state, loading: false, students: action.payload };

    case types.FETCH_STUDENT_SUCCESS:
      return { ...state, loading: false, studentById: action.payload };

    case types.ADD_STUDENT_FAILURE:
    case types.FETCH_STUDENTS_FAILURE:
    case types.FETCH_STUDENT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default studentReducer;
