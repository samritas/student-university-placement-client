import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { addStudent } from "../features/students/studentActions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  maxHeight: "80vh",
  overflowY: "auto",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: 1,
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  marginBottom: "16px",
};

const flexItemStyle = {
  flex: 1,
};

const StudentInformationForm = ({ open, handleOpen, handleClose }) => {
  const [formData, setFormData] = useState({
    studentId: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    address: "",
    contactNumber: "",
    schoolcode: "",
    emergencyContactNumber: "",
    schoolOrUniversityName: "",
    academicYear: "",
  });

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.student);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent(formData));
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="student-form-title"
      aria-describedby="student-form-description"
    >
      <Box sx={style} component="section">
        <Typography id="student-form-title" variant="h5" gutterBottom>
          Student Information
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div style={rowStyle}>
            <div style={{ ...flexItemStyle }}>
              <label htmlFor="studentId">Student ID</label>
              <input
                id="studentId"
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                placeholder="Enter student ID"
                style={inputStyle}
              />
            </div>
            <div style={{ ...flexItemStyle }}>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div style={rowStyle}>
            <div style={{ ...flexItemStyle }}>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                style={inputStyle}
              />
            </div>
            <div style={{ ...flexItemStyle }}>
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                id="dateOfBirth"
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>

          {/* Row 3 */}
          <div style={rowStyle}>
            <div style={{ ...flexItemStyle }}>
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div style={{ ...flexItemStyle }}>
              <label htmlFor="nationality">Nationality</label>
              <input
                id="nationality"
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Enter nationality"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Row 4 */}
          <div style={rowStyle}>
            <div style={{ ...flexItemStyle }}>
              <label htmlFor="address">Address</label>
              <input
                id="address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                style={inputStyle}
              />
            </div>
            <div style={{ ...flexItemStyle }}>
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                id="contactNumber"
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Enter contact number"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Row 5 */}
          <div style={rowStyle}>
            <div style={{ ...flexItemStyle }}>
              <label htmlFor="schoolcode">School Code</label>
              <input
                id="schoolcode"
                type="text"
                name="schoolcode"
                value={formData.schoolcode}
                onChange={handleChange}
                placeholder="Enter school code"
                style={inputStyle}
              />
            </div>
            <div style={{ ...flexItemStyle }}>
              <label htmlFor="emergencyContactNumber">
                Emergency Contact Number
              </label>
              <input
                id="emergencyContactNumber"
                type="text"
                name="emergencyContactNumber"
                value={formData.emergencyContactNumber}
                onChange={handleChange}
                placeholder="Enter emergency contact number"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Row 6 */}
          <div style={rowStyle}>
            <div style={{ ...flexItemStyle }}>
              <label htmlFor="schoolOrUniversityName">
                School or University Name
              </label>
              <input
                id="schoolOrUniversityName"
                type="text"
                name="schoolOrUniversityName"
                value={formData.schoolOrUniversityName}
                onChange={handleChange}
                placeholder="Enter school or university name"
                style={inputStyle}
              />
            </div>
            <div style={{ ...flexItemStyle }}>
              <label htmlFor="academicYear">Academic Year</label>
              <input
                id="academicYear"
                type="text"
                name="academicYear"
                value={formData.academicYear}
                onChange={handleChange}
                placeholder="Enter academic year"
                style={inputStyle}
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, py: 1.5, backgroundColor: "#001f3f" }}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>

          {error && (
            <Typography color="error" align="center" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
        </form>
      </Box>
    </Modal>
  );
};

export default StudentInformationForm;
