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

const universities = [
  "Addis Ababa University",
  "Adama Science and Technology University",
  "Arba Minch University",
  "Bahir Dar University",
  "Dilla University",
  "Haramaya University",
  "Hawassa University",
  "Jimma University",
  "Mekelle University",
  "Wolaita Sodo University",
  "Ambo University",
  "Aksum University",
  "Debre Berhan University",
  "Debre Markos University",
  "Mizan Tepi University",
  "Semera University",
  "Wachamo University",
  "Wolkite University",
  "Wollega University",
  "Wollo University",
  "Adigrat University",
  "Dire Dawa University",
  "Gondar University",
  "Jijiga University",
  "Mada Walabu University",
  "Metu University",
  "Asosa University",
  "Bule Hora University",
  "Debre Tabor University",
  "Mettu University",
  "Bonga University",
  "Wachemo University",
  "Kebri Dehar University",
  "Welkite University",
  "Mizan Tepi University",
  "Woldia University",
  "Assosa University",
  "Kebri Dehar University",
  "Samara University",
  "Jigjiga University",
  "Addis Ababa Science and Technology University",
];

const UniversitySelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialUniversities =
    location.state?.selectedUniversities || Array(39).fill("");

  const [selectedUniversities, setSelectedUniversities] =
    useState(initialUniversities);

  const handleSelectionChange = (event, index) => {
    const newSelectedUniversities = [...selectedUniversities];
    newSelectedUniversities[index] = event.target.value;
    setSelectedUniversities(newSelectedUniversities);
  };

  const handleSubmit = () => {
    if (selectedUniversities.some((university) => university === "")) {
      alert("Please fill all university rank spaces.");
    } else {
      navigate("/PlacementForm", { state: { selectedUniversities } });
    }
  };

  return (
    <Container>
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
