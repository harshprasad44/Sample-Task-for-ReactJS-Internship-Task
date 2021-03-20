import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Fashion Factory
          </Typography>
          <Button className="buttonNav" color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
        </div>
        <Divider />
        <List>
          {["Home", "Offers", "Products", "Categories", "Profile", "Following", "Feedback"].map((text, index) => (
            <ListItem className="sideNavButton" button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <h2>Offer Details</h2>
        <hr />
        <br />
        <Button variant="contained" color="primary">
          Add Offer
        </Button>

        <br />
        <br />
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Active</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Pant
                </TableCell>
                <TableCell align="right">30%</TableCell>
                <TableCell align="right">Flat 30% off on all Pants.</TableCell>
                <TableCell align="right">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </TableCell>
                <TableCell align="right">
                  <VisibilityIcon className="actionIcon" /> <EditIcon className="actionIcon" /> <DeleteIcon />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  Shirt
                </TableCell>
                <TableCell align="right">60%</TableCell>
                <TableCell align="right">Flat 60% off on all Shirts.</TableCell>
                <TableCell align="right">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <VisibilityIcon className="actionIcon" /> <EditIcon className="actionIcon" /> <DeleteIcon />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  T-Shirt
                </TableCell>
                <TableCell align="right">1 on 2</TableCell>
                <TableCell align="right">Buy 2 Get 1 Free.</TableCell>
                <TableCell align="right">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <VisibilityIcon className="actionIcon" /> <EditIcon className="actionIcon" /> <DeleteIcon />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </div>
  );
}
