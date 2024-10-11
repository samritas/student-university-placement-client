import { Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function PlacementInformationForm() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract state from location
  const selectedUniversities = location.state?.selectedUniversities || Array(42).fill("");
  const selectedDepartments = location.state?.selectedDepartments || Array(5).fill("");

  const [formData, setFormData] = useState({
    registrationNumber: "",
    department: "",
    universities: selectedUniversities,
    departments: selectedDepartments,
    specialCase: false,
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDepartmentChange = (event) => {
    setFormData({ ...formData, department: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.universities.some((university) => university === "")) {
      alert("Please fill all university rank spaces.");
    } else if (formData.departments.some((department) => department === "")) {
      alert("Please fill all department rank spaces.");
    } else {
      console.log(formData);
      // Proceed with form submission
    }
  };

  const handleUniversitySelection = () => {
    navigate("/universitySelection", {
      state: { selectedUniversities: formData.universities },
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#666" }}>
          Placement Information
        </h2>
        <p style={{ textAlign: "center", color: "#666" }}>
          Notice: Before you make your choice, go to our university information
          section to further help make your decision.
        </p>
        <div style={{ marginBottom: "15px" }}>
          <label>Registration Number</label>
          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            placeholder="Enter your registration number"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <FormControl fullWidth>
            <InputLabel id="department-label">Department</InputLabel>
            <Select
              labelId="department-label"
              name="department"
              value={formData.department}
              onChange={handleDepartmentChange}
            >
              <MenuItem value="Engineering And Technology Fields">Engineering And Technology Fields</MenuItem>
              <MenuItem value="Health Science Fields">Health Science Fields</MenuItem>
              <MenuItem value="Agriculture Fields">Agriculture Fields</MenuItem>
              <MenuItem value="Business And Economics Fields">Business And Economics Fields</MenuItem>
              <MenuItem value="Social Sciences And Humanities">Social Sciences And Humanities</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <Button
            onClick={handleUniversitySelection}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              textAlign: "center",
              textDecoration: "none",
              color: "#666",
              backgroundColor: "#f9f9f9",
              cursor: "pointer",
            }}
          >
            Select Universities
          </Button>
        </div>
        
        <div style={{ marginBottom: "15px" }}>
          <label>
            <input
              type="checkbox"
              name="specialCase"
              checked={formData.specialCase}
              onChange={handleChange}
              style={{ marginRight: "10px" }}
            />
            Special Case
          </label>
        </div>
        {formData.specialCase && (
          <div style={{ marginBottom: "15px" }}>
            <label>
              Attach a letter from the necessary government office explaining
              why you require special consideration.
            </label>
            <input
              type="file"
              name="attachment"
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        )}
        <Button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#001f3f",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default PlacementInformationForm;
