import React from "react";
import SaleImg from "../images/sale.jpg";
import { Link } from "react-router-dom";
import { Button, Input } from "@material-ui/core";
import { Lock } from "@material-ui/icons";

const MainScreen = () => {
  return (
    <div className="row">
      <div className="col col-12 col-sm-6 col-xs-6">
        <img width="75%" src={SaleImg} alt="Sale" />
      </div>
      <div className="col col-12 col-sm-6 col-xs-6">
        <div className="container form-container">
          <form id="form" className="form">
            <Lock />
            <h2>Sign In</h2>

            <Input title="Please fill out this field." disableUnderline={true} fullWidth={true} type="text" id="username" placeholder="Username *" />
            <Input title="Please fill out this field." disableUnderline={true} fullWidth={true} type="password" id="password" placeholder="Password *" />
            <Button fullWidth={true} variant="contained" color="primary">
              SIGN IN
            </Button>

            <Link to="/" className="forgot">
              Forgot Password?
            </Link>
            <br />
            <br />
            <span className="forgot">Don't have an account? </span>
            <Link to="/" className="forgot">
              Sign Up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
