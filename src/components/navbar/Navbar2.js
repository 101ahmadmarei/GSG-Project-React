import React, { useContext } from "react";
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
import AdbIcon from "@mui/icons-material/Adb";
import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { wishlistActions } from "../../store/wishlist-slice";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate, useLocation } from "react-router-dom";
const pages = [
  { id: 0, page: "Home" },
  { id: 1, page: "Apparels" },
  { id: 2, page: "Journal" },
  { id: 3, page: "About" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

function ResponsiveAppBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(true);
  const authCtx = useContext(AuthContext);
  const handleClick = () => {
    setOpen(!open);
  };

  const quantity = useSelector((state) => state.cart.totalQuantity);
  const wishlists = useSelector((state) => state.wishlist.totalQuantity);
  const showCartHandler = () => {
    dispatch(cartActions.openCart());
  };

  const showWishListHandler = () => {
    dispatch(wishlistActions.openWishlist());
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    console.log(setting);
    if (setting === "Logout") {
      dispatch(cartActions.clearCart());
      dispatch(wishlistActions.clearWishlist());
      authCtx.logout();
      navigate("/Home");
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "white",
        p: {
          xl: "0 150px",
          lg: "0 120px",
          //   md: "0 80px",
          sm: "0 60px",
          xs: "0 20px",
        },
      }}
      disableScrollLock={true}
    >
      <Container maxWidth="xl" sx={{ p: 0 }}>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between", p: 0 }}
        >
          {/* <AdbIcon
            sx={{ display: { xs: "none", md: "flex" }, color: "black" }}
          /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 400,
              //   letterSpacing: ".3rem",
              color: "rgba(82, 82, 82, 1)",
              textDecoration: "none",
              fontSize: 36,
              cursor: "context-menu",
            }}
          >
            matter
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
              <MenuIcon sx={{ color: "#33333A" }} />
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
              {pages.map((page) => (
                <Link
                  to={(page.id == 0 || page.id == 1) && `/${page.page}`}
                  //   className={(l) => (l.isActive ? "active" : "")}
                >
                  <Tooltip
                    title={
                      page.id == 0 || page.id == 1
                        ? `Open ${page.page} page`
                        : "The Page not activated yet"
                    }
                  >
                    <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                      <ListItemButton onClick={() => handleClick(page.id)}>
                        <ListItemText primary={page.page} />
                        {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                      </ListItemButton>
                    </MenuItem>
                  </Tooltip>
                </Link>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: "black" }}
          /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            // href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 400,
              //   letterSpacing: ".3rem",
              color: "rgba(82, 82, 82, 1)",
              textDecoration: "none",
              fontSize: 24,
              cursor: "context-menu",
            }}
          >
            matter
          </Typography>
          <Box
            sx={{
              flexGrow: 0.5,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <NavLink
                to={(page.id == 0 || page.id == 1) && `/${page.page}`}
                className={(l) => (l.isActive ? "active" : "")}
              >
                <Tooltip
                  title={
                    page.id == 0 || page.id == 1
                      ? `Open ${page.page} page`
                      : "The Page not activated yet"
                  }
                >
                  <ListItemButton
                    onClick={() => handleClick(page.id)}
                    sx={{ my: 2 }}
                    key={page.id}
                  >
                    <ListItemText
                      primary={page.page}
                      sx={{ textAlign: "center" }}
                    />
                    {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                  </ListItemButton>
                </Tooltip>
              </NavLink>
            ))}
          </Box>
          {!authCtx.isLoggedIn && (
            <Link sx={{ flexGrow: 0 }} to={`/home/login`}>
              {" "}
              <Tooltip title="Login">
                <IconButton
                  aria-label={notificationsLabel(wishlists)}
                  onClick={() => navigate("/home/login")}
                  sx={{ ml: { sm: 2, md: 4, lg: 6 } }}
                >
                  <LoginIcon fontSize="large" />
                  Login
                </IconButton>
              </Tooltip>
            </Link>
          )}

          {authCtx.isLoggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              {" "}
              <Tooltip title="Wishlist">
                <IconButton
                  aria-label={notificationsLabel(wishlists)}
                  onClick={showWishListHandler}
                  sx={{ ml: { sm: 2, md: 4, lg: 6 } }}
                >
                  <Badge
                    badgeContent={wishlists}
                    color="primary"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <FavoriteBorderIcon
                      id="favorite"
                      fontSize="small"
                      sx={{ color: "#33333A" }}
                      // style={{ position: "relative", top: "15%" }}
                    />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title="Cart">
                <IconButton
                  aria-label={notificationsLabel(quantity)}
                  onClick={showCartHandler}
                  sx={{ ml: { sm: 2, md: 4, lg: 6 } }}
                >
                  <Badge
                    badgeContent={quantity}
                    color="primary"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <ShoppingBagOutlinedIcon
                      id="shopping"
                      fontSize="small"
                      sx={{ color: "#33333A" }}
                    />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ ml: { sm: 2, md: 4, lg: 6 } }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>{" "}
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
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleCloseUserMenu(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
