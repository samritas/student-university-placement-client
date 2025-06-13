import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  Button,
  Breadcrumbs,
  Link as MuiLink,
  Divider,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchStudentById } from "../features/students/studentActions";

const ProfilePage = () => {
  const { studentId } = useParams();
  const dispatch = useDispatch();
  const { student, loading, error } = useSelector((state) => state.student);

  useEffect(() => {
    dispatch(fetchStudentById(studentId));
  }, [dispatch, studentId]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <Box sx={{ backgroundColor: "#eee", py: 5, minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* Breadcrumb */}
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
          <Typography color="text.primary">Student Profile</Typography>
        </Breadcrumbs>

        <Grid container spacing={4}>
          {/* Left Panel: Avatar and Name */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <Avatar
                alt="Student Avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                sx={{ width: 150, height: 150, mx: "auto", mb: 2 }}
              />
              <Typography variant="h6" color="text.secondary">
                {student ? student.firstName : "Student Name"}
              </Typography>
            </Paper>
          </Grid>

          {/* Right Panel: Student Details */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <DetailRow label="Full Name" value={student ? `${student.firstName} ${student.lastName}` : "Full Name"} />
              <Divider sx={{ my: 1 }} />
              <DetailRow label="Registration Number" value={student ? student.studentId : "Registration Number"} />
              <Divider sx={{ my: 1 }} />
              <DetailRow label="School Code" value={student ? student.schoolOrUniversityName : "School Code"} />
              <Divider sx={{ my: 1 }} />
              <DetailRow label="Mobile" value={student ? student.mobile : "Mobile"} />
              <Divider sx={{ my: 1 }} />
              <DetailRow label="Year" value={student ? student.year : "Year"} />
            </Paper>

            <Box mt={3} display="flex" justifyContent="center">
              <Button
                variant="contained"
                sx={{ backgroundColor: "#001f3f", width: 300 }}
                component={Link}
                to="/studentDetail"
              >
                Detail
              </Button>
            </Box>

            <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
              <Typography>
                {student && student.universityPlacement
                  ? `University Placement: ${student.universityPlacement}`
                  : "The placement will be displayed here."}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// Helper component to display label and value in a row
const DetailRow = ({ label, value }) => (
  <Grid container spacing={2} alignItems="center">
    <Grid item xs={4} sm={3}>
      <Typography variant="body1" fontWeight="bold">
        {label}
      </Typography>
    </Grid>
    <Grid item xs={8} sm={9}>
      <Typography color="text.secondary">{value}</Typography>
    </Grid>
  </Grid>
);

export default ProfilePage;
