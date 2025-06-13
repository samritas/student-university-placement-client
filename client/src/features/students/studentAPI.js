import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const token = localStorage.getItem('token');
const config = {
  headers: {
    'x-auth-token': token,
  },
};

export const fetchStudentsAPI = () => axios.get(`${BASE_URL}/admin/studentinfo`, config);
export const fetchStudentByIdAPI = (id) => axios.get(`${BASE_URL}/student/studentinfo/${id}`, config);
export const addStudentAPI = (data) => axios.post(`${BASE_URL}/admin/studentinfo`, data, config);
