import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Toolbar,
  Hidden,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaUsers,
  FaSignOutAlt,
  FaWpforms,
  FaBars,
} from "react-icons/fa"; 
import { styled } from "@mui/material/styles";

const DrawerContainer = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 240,
    boxSizing: "border-box",
    backgroundColor: "#001f3f",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

function SideNav() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("token"); 
      navigate("/"); 
    }
  };

  const drawer = (
    <div>
      <List>
        <ListItem button component={Link} to="/Profile" sx={{ color: "white" }}>
          <ListItemIcon>
            <FaUser style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component={Link} to="/list" sx={{ color: "white" }}>
          <ListItemIcon>
            <FaUsers style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Students" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/PlacementForm"
          sx={{ color: "white" }}
        >
          <ListItemIcon>
            <FaWpforms style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Placement" />
        </ListItem>
      </List>
      <Divider sx={{ borderColor: "#ffffff" }} />
      <List sx={{ mb: 2 }}>
        <ListItem button onClick={handleLogout} sx={{ color: "white" }}>
          <ListItemIcon>
            <FaSignOutAlt style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <FaBars />
        </IconButton>
      </Toolbar>
      <Hidden smDown implementation="css">
        <DrawerContainer variant="permanent" open>
          {drawer}
        </DrawerContainer>
      </Hidden>
      <Hidden mdUp implementation="css">
        <DrawerContainer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
        >
          {drawer}
        </DrawerContainer>
      </Hidden>
    </div>
  );
}

export default SideNav;
