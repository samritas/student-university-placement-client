import React, { useState } from 'react';
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Typography,
  Box,
  Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const departments = [
  "Engineering And Technology Fields", 
  "Health Science Fields", 
  "Agriculture Fields",
  "Business And Economics Fields", 
  "Social Sciences And Humanities"
  // Add more departments as needed
];

const DepartmentSelection = () => {
  const navigate = useNavigate();

  const [selectedDepartments, setSelectedDepartments] = useState(Array(5).fill(''));

  const handleSelectionChange = (event, index) => {
    const newSelectedDepartments = [...selectedDepartments];
    const selectedDepartment = event.target.value;

    // Update selected department
    newSelectedDepartments[index] = selectedDepartment;
    setSelectedDepartments(newSelectedDepartments);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDepartments.some(department => department === '')) {
      alert('Please fill all department rank spaces.');
    } else {
      navigate('/placementInformation', { state: { selectedDepartments } });
    }
  };

  // Get available departments excluding selected ones
  const getAvailableDepartments = (index) => {
    let availableDepartments = [...departments];

    // Remove selected departments from options
    for (let i = 0; i < index; i++) {
      availableDepartments = availableDepartments.filter(dept => dept !== selectedDepartments[i]);
    }

    return availableDepartments;
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Select Departments by Rank
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {selectedDepartments.map((department, index) => (
            <Grid item xs={12} md={6} key={index}>
              <FormControl fullWidth>
                <InputLabel>{`Rank ${index + 1}`}</InputLabel>
                <Select
                  value={department}
                  onChange={(e) => handleSelectionChange(e, index)}
                  label={`Rank ${index + 1}`}
                >
                  <MenuItem value="">Select Department</MenuItem>
                  {getAvailableDepartments(index).map((dept, idx) => (
                    <MenuItem key={idx} value={dept}>
                      {dept}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          ))}
        </Grid>
        <Box mt={4}>
          <Button variant="contained" color="primary" type="submit">
            Done
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default DepartmentSelection;
