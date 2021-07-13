// import React, { useReducer } from "react";
import React from "react";

import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Avatar,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { NavLink, Link, useHistory } from "react-router-dom";
import * as actionType from "../constants/actionTypes.js";
// import initialState from "../reducer/auth";
// console.log(initialState);
// import state from "../reducer/auth";
// import authReducer from "../reducer/auth";
import { useSelector } from "react-redux";

// import { reducers } from "../reducer/index.js";

const useStyle = makeStyles({
  header: {
    background: "#111111",
  },
  tabs: {
    color: "#FFFFFF",
    marginRight: 20,
    textDecoration: "none",
    fontSize: 20,
  },
  button: {
    color: "red",
    marginLeft: 600,
    textDecoration: "none",
    fontSize: 20,
  },
  login: {
    color: "blue",
    marginLeft: 20,
    textDecoration: "none",
    fontSize: 20,
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
});

const NavBar = () => {
  const classes = useStyle();
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();

  // const [authData] = useReducer(reducers);
  // console.log(authData);
  const user = useSelector((state) => state.reducers);
  console.log(user);

  const history = useHistory();
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/");

    // setUser(null);
  };
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <NavLink className={classes.tabs} to="./" exact>
          Home
        </NavLink>
        <NavLink className={classes.tabs} to="/get-stripe-coupons" exact>
          List All Coupons
        </NavLink>
        <NavLink className={classes.tabs} to="/create-stripe-coupons" exact>
          Create Coupon
        </NavLink>
        <Toolbar className={classes.toolbar}>
          {user.auth.authData?.result ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user.auth.authData.result?.name}
                src={user.auth.authData.result?.imageUrl}
              >
                {user.auth.authData.result?.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.auth.authData.result?.name}
              </Typography>
              <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              exact
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
