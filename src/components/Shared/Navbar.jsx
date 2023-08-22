import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink } from "react-router-dom";
import { LocalMall } from "@mui/icons-material";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", mx:0  }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalMall
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "#232323" }}
          />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link style={{ color: "#232323", textDecoration: "none" }} to="/">
              Bazar
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ color: "red" }} textAlign="center">
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "#232323",
                        textDecoration: "none",
                      };
                    }}
                    to="/home"
                  >
                    Home
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ color: "red" }} textAlign="center">
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "#232323",
                        textDecoration: "none",
                      };
                    }}
                    to="/products"
                  >
                    Products
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ color: "red" }} textAlign="center">
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "#232323",
                        textDecoration: "none",
                      };
                    }}
                    to="/about"
                  >
                    About
                  </NavLink>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <LocalMall
            sx={{ display: { xs: "none", md: "none" }, mr: 1, color: "black" }}
          />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              textDecoration: "none",
              display: { xs: "none", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "white",
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            <Link
              state={{ textDecoration: "none", color: "white" }}
              to="/"
            >
              Bazar
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "red" : "#232323",
                      textDecoration: "none",
                    };
                  }}
                  to="/home"
                >
                  Home
                </NavLink>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "red" : "#232323",
                      textDecoration: "none",
                    };
                  }}
                  to="/products"
                >
                  Products
                </NavLink>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "red" : "#232323",
                      textDecoration: "none",
                    };
                  }}
                  to="/about"
                >
                  About
                </NavLink>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "red" : "#232323",
                      textDecoration: "none",
                    };
                  }}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </Typography>
            </MenuItem>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to="/home"
                  >
                    Home
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to="/products"
                  >
                    Products
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to="/about"
                  >
                    About
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
