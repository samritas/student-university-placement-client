import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  Paper,
  TextField,
} from '@mui/material';

const StudentPlacementDetail = () => {
  const [studentResults, setStudentResults] = useState({
    studentName: '',
    studentId: '',
    history: '',
    geography: '',
    economics: '',
    math: '',
    biology: '',
    physics: '',
    chemistry: '',
  });

  const handleSubmitResults = (e) => {
    e.preventDefault();
    // Logic to submit student results
    console.log('Student results submitted', studentResults);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setStudentResults({
      ...studentResults,
      [id]: value,
    });
  };

  const [studentData, setStudentData] = useState({
    university: { name: '', ranking: '' },
    department: { name: '', ranking: '' },
  });

  // Simulated student data with rankings
  useEffect(() => {
    // Simulated fetch from API or state management
    // Replace with actual data retrieval logic
    const fetchStudentData = async () => {
      // Example: Simulated student data with rankings
      const student = {
        university: { name: 'Mekele University', ranking: '1st' },
        department: { name: 'Computer Science', ranking: '1st' },
      };
      setStudentData(student);
    };

    fetchStudentData();
  }, []);

  const handleMakeUniversityPlacement = () => {
    // Logic to make university placement
    console.log('Making university placement');
  };

  const handleMakeDepartmentPlacement = () => {
    // Logic to make department placement
    console.log('Making department placement');
  };

  return (
    <Container maxWidth="md" style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '10px' }}>
      <Typography variant="h4" gutterBottom>
        Student Placement Admin Panel
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box mb={2}>
            <Typography variant="subtitle1">
              Chosen University:
            </Typography>
            <Typography variant="body1">
              {studentData.university.name} ({studentData.university.ranking})
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mb={2}>
            <Typography variant="subtitle1">
              Chosen Department:
            </Typography>
            <Typography variant="body1">
              {studentData.department.name} ({studentData.department.ranking})
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={12} style={{ padding: '40' }}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Submit Student Results
            </Typography>
            <form onSubmit={handleSubmitResults}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="studentName"
                    label="Student Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={studentResults.studentName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="studentId"
                    label="Student ID"
                    variant="outlined"
                    fullWidth
                    required
                    value={studentResults.studentId}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="history"
                    label="History"
                    type="number"
                    variant="outlined"
                    fullWidth
                    inputProps={{ min: 0, max: 100 }}
                    required
                    value={studentResults.history}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="geography"
                    label="Geography"
                    type="number"
                    variant="outlined"
                    fullWidth
                    inputProps={{ min: 0, max: 100 }}
                    required
                    value={studentResults.geography}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="economics"
                    label="Economics"
                    type="number"
                    variant="outlined"
                    fullWidth
                    inputProps={{ min: 0, max: 100 }}
                    required
                    value={studentResults.economics}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="math"
                    label="Math"
                    type="number"
                    variant="outlined"
                    fullWidth
                    inputProps={{ min: 0, max: 100 }}
                    required
                    value={studentResults.math}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="biology"
                    label="Biology"
                    type="number"
                    variant="outlined"
                    fullWidth
                    inputProps={{ min: 0, max: 100 }}
                    required
                    value={studentResults.biology}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="physics"
                    label="Physics"
                    type="number"
                    variant="outlined"
                    fullWidth
                    inputProps={{ min: 0, max: 100 }}
                    required
                    value={studentResults.physics}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="chemistry"
                    label="Chemistry"
                    type="number"
                    variant="outlined"
                    fullWidth
                    inputProps={{ min: 0, max: 100 }}
                    required
                    value={studentResults.chemistry}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    onClick={handleSubmitResults}
                    style={{ backgroundColor: "#001f3f", color: "#ffffff" }}
                  >
                    Submit Results
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={handleMakeUniversityPlacement}
            style={{ backgroundColor: "#001f3f", color: "#ffffff", width: "100%" }}
          >
            Make University Placement
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={handleMakeDepartmentPlacement}
            style={{ backgroundColor: "#001f3f", color: "#ffffff", width: "100%" }}
          >
            Make Department Placement
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StudentPlacementDetail;
