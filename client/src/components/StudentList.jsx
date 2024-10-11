import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaInfoCircle } from 'react-icons/fa';
import StudentInformationForm from './AddStudent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../actions/studentActions';

const columns: GridColDef[] = [
  { field: 'studentId', headerName: 'Student ID', width: 130 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'gender', headerName: 'Gender', width: 100 },
  { field: 'schoolOrUniversityName', headerName: 'School/University', width: 200 },
  { field: 'result', headerName: 'Result', width: 120 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <>
        <Link to={`/student/${params.row.studentId}`} style={{ marginRight: 8 }}>
          <FaInfoCircle color="#001f3f" />
        </Link>
        <Link to={`/edit/${params.row.studentId}`}>
          <FaEdit color="green" />
        </Link>
      </>
    ),
  },
];

const DataTable = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector((state) => state.student);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleFormOpen = () => {
    setOpen(true);
  };

  const rows = students.map((student) => ({
    id: student.studentId, // Use studentId as the unique identifier
    studentId: student.studentId,
    firstName: student.firstName,
    lastName: student.lastName,
    gender: student.gender,
    schoolOrUniversityName: student.schoolOrUniversityName,
    result: student.result,
  }));

  const handleRowClick = (params) => {
    const studentId = params.row.studentId;
    navigate(`/student/${studentId}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ height: 600, width: '100%' }}>
      <Typography variant="h4" gutterBottom>
        Student List
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        View and manage student records
      </Typography>
      <div style={{ marginBottom: 10 }}>
        <Button variant="contained" onClick={handleFormOpen} style={{ backgroundColor: '#001f3f' }}>
          Add Student
        </Button>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        sortingOrder={['desc', 'asc']}
        onRowClick={handleRowClick}
      />
      <StudentInformationForm
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </div>
  );
};

export default DataTable;
