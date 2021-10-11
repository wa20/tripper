import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import clsx from "clsx";
import EmailIcon from "@mui/icons-material/Email";
import { Image } from "semantic-ui-react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Menu from "@material-ui/core/Menu";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Autocomplete } from "@react-google-maps/api";

import Logo from "../../assets/tripperLogo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  list: {
    width: 320,
  },
  fullList: {
    width: "auto",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function NavBar({ props, setCoordinates }) {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (ac) => setAutocomplete(ac);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  /* Menu on left */
  const list1 = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
    >
      <List>
        <ListItemLink button href="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemLink>

        <ListItemLink button href="/">
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItemLink>
      </List>
    </div>
  );

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickSubMenu = () => {
    setOpen(!open);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";

  //
  return (
    <div>
      <React.Fragment style={{ position: "fixed" }}>
        <CssBaseline />
        {/* <ElevationScroll {...props}> */}
        <div className={classes.grow}>
          <div className={classes.sectionDesktop}>
            <AppBar color="default" style={{ zIndex: "1" }}>
              <Toolbar>
                <Image src={Logo} size="tiny" href="/" />
                <Button color="inherit" href="/">
                  Home
                </Button>
                <Button color="inherit" href="/contact">
                  Contact
                </Button>

                <div className={classes.grow} />

                <Autocomplete
                  onLoad={onLoad}
                  onPlaceChanged={onPlaceChanged}
                  style={{ position: "relative", zIndex: "2" }}
                >
                  <Paper
                    component="form"
                    sx={{
                      p: "6px 4px",
                      // height: '45px', m: 1.5,
                      display: "flex",
                      alignItems: "center",
                      width: 500,
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      // sx={{ p: "7px 8px" }}
                      placeholder="Search Google Maps"
                      inputProps={{ "aria-label": "search google maps" }}
                    />
                    {/* <Divider
                      sx={{ height: 28, m: 0.5 }}
                      orientation="vertical"
                    />
                     */}
                    {/* <IconButton
                      type="submit"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton> */}
                  </Paper>
                </Autocomplete>
              </Toolbar>
            </AppBar>
          </div>
          <div className={classes.sectionMobile}>
            <AppBar color="default" style={{ zIndex: "1", padding: "0.5em 0em"  }}>
              <Toolbar>
                <IconButton
                  onClick={toggleDrawer("left", true)}
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>

                <SwipeableDrawer
                  anchor="left"
                  open={state["left"]}
                  onClose={toggleDrawer("left", false)}
                  onOpen={toggleDrawer("left", true)}
                >
                  {list1("left")}
                </SwipeableDrawer>
                <Autocomplete
                  onLoad={onLoad}
                  onPlaceChanged={onPlaceChanged}
                  style={{ position: "relative", zIndex: "2" }}
                >
                  <Paper
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 280,
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      // sx={{ p: "8px" }}
                      placeholder="Search Google Maps"
                      inputProps={{ "aria-label": "search google maps" }}
                    />
                    {/* <Divider
                      sx={{ height: 28, m: 0.5 }}
                      orientation="vertical"
                    />
                    <IconButton
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton> */}
                  </Paper>
                </Autocomplete>
              </Toolbar>
            </AppBar>
          </div>
        </div>
        {/* </ElevationScroll> */}
        <Toolbar />
      </React.Fragment>
    </div>
  );
}
// }
