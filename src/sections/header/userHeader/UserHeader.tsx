"use client";
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
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import AppLogo from "@/components/logo/AppLogo";

const pages = [
  { link: "/", name: "home" },
  { link: "/buy", name: "buy" },
  { link: "/sell", name: "sell" },
  { link: "/about", name: "about" },
  { link: "/contact", name: "contact" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      className="appBar------"
      position="static"
      sx={{ backgroundColor: "#dfdfdf", color: "black" }}
    >
      <Container
        className="container------"
        sx={{ margin: "auto" }}
        maxWidth="xl"
      >
        <Toolbar className="toolbar------" disableGutters>
          <TwoWheelerIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            className="typography--------"
            variant="h6"
            noWrap
            component="a"
            href="/"
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
            <AppLogo />
          </Typography>

          <Box
            className="box--------2"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              className="iconButton--------"
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
              className="menu---------"
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
              {pages.map((page) => {
                return (
                  <MenuItem
                    className="menuItem-------"
                    key={page.name}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography
                      sx={{ color: "black" }}
                      className="typography-----"
                      textAlign="center"
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <TwoWheelerIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            className="typography-----"
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <AppLogo />
          </Typography>
          <Box
            className="box--------3"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                className="button----------"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  "&:hover": { backgroundColor: "var(--clr-neutral-300)" },
                  color: "black",
                  display: "block",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box className="box--------1" sx={{ flexGrow: 0 }}>
            <Tooltip className="tooltip--------" title="Open settings">
              <IconButton
                className="iconButton--------"
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <Avatar alt="Remy Sharp" src="/images/reaction/shock.jpeg" />
              </IconButton>
            </Tooltip>
            <Menu
              className="menu---------"
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
              {settings.map((setting) => (
                <MenuItem
                  className="menuItem----------"
                  key={setting}
                  onClick={handleCloseUserMenu}
                >
                  <Typography className="typography--------" textAlign="center">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
