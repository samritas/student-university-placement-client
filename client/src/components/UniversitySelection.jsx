import React, { useState } from "react";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import universities from "../data/universities";

const UniversitySelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialUniversities =
    location.state?.selectedUniversities || Array(39).fill("");

  const [selectedUniversities, setSelectedUniversities] = useState(initialUniversities);

  const handleSelectionChange = (event, index) => {
    const updatedSelection = [...selectedUniversities];
    updatedSelection[index] = event.target.value;
    setSelectedUniversities(updatedSelection);
  };

  const handleSubmit = () => {
    const hasEmpty = selectedUniversities.some((u) => u === "");
    if (hasEmpty) {
      alert("Please fill all university rank spaces.");
    } else {
      navigate("/PlacementForm", { state: { selectedUniversities } });
    }
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Select Universities by Rank
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Grid container spacing={3}>
          {selectedUniversities.map((university, index) => {
            const availableUniversities = universities.filter(
              (u) => !selectedUniversities.includes(u) || u === university
            );

            return (
              <Grid item xs={12} md={6} key={index}>
                <FormControl fullWidth>
                  <InputLabel>{`Rank ${index + 1}`}</InputLabel>
                  <Select
                    value={university}
                    onChange={(e) => handleSelectionChange(e, index)}
                    label={`Rank ${index + 1}`}
                  >
                    {availableUniversities.map((univ, idx) => (
                      <MenuItem key={idx} value={univ}>
                        {univ}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            );
          })}
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

export default UniversitySelection;
