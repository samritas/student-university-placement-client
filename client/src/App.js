import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import ProfilePage from "./components/Profile";
import DataTable from "./components/StudentList";
import StudentMarks from "./components/StudentMark";
import PlacementInformationForm from "./components/PlacementForm";
import SideNav from "./components/SideNav";
import StudentPlacementDetail from './components/StudentDetail';
import UniversitySelection from './components/UniversitySelection';
import DepartmentSelection from './components/DepartmentSelection';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        {/* <SideNav /> */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/student/:studentId" element={<ProfilePageWithSidebar />} />
            <Route path="/list" element={<DataTableWithSidebar />} />
            <Route path="/Mark" element={<StudentMarksWithSidebar />} />
            <Route path="/PlacementForm" element={<PlacementInformationFormWithSidebar />} />
            <Route path="/studentDetail" element={<StudentDetailWithSidebar />} />
            <Route path="/universitySelection" element={<UniversitySelectionEithSidebar />} />
            <Route path="/departmentSelection" element={<DepartmentSelectionWithSidebar />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function ProfilePageWithSidebar() {
  return <PageWithSidebar component={<ProfilePage />} />;
}

function DepartmentSelectionWithSidebar() {
  return <PageWithSidebar component={<DepartmentSelection/>} />;
}

function DataTableWithSidebar() {
  return <PageWithSidebar component={<DataTable />} />;
}

function UniversitySelectionEithSidebar() {
  return <PageWithSidebar component={<UniversitySelection />} />;
}

function StudentMarksWithSidebar() {
  return <PageWithSidebar component={<StudentMarks />} />;
}

function StudentDetailWithSidebar() {
  return <PageWithSidebar component={<StudentPlacementDetail />} />;
}

function PlacementInformationFormWithSidebar() {
  return <PageWithSidebar component={<PlacementInformationForm />} />;
}

function PageWithSidebar({ component }) {
  // Extract current path using React Router's location property
  const path = window.location.pathname;
  const showSidebar = path !== '/'; // Hide sidebar on the root path

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {showSidebar && <SideNav />}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        {component}
      </div>
    </div>
  );
}

export default App;
