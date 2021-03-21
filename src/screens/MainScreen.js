import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions/userActions";
import { Link } from "react-router-dom";
import { Button, Input } from "@material-ui/core";
import { Lock } from "@material-ui/icons";
import SaleImg from "../images/sale.jpg";

const MainScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = "/offer";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="row">
      <div className="col col-12 col-sm-6 col-xs-6">
        <img width="75%" src={SaleImg} alt="Sale" />
      </div>
      <div className="col col-12 col-sm-6 col-xs-6">
        <div className="container form-container">
          <form onSubmit={submitHandler} id="form" className="form">
            <Lock />
            <h2>Sign In</h2>

            <Input value={email} onChange={(e) => setEmail(e.target.value)} title="Please fill out this field." disableUnderline={true} fullWidth={true} type="text" id="username" placeholder="Username *" />
            <Input value={password} onChange={(e) => setPassword(e.target.value)} title="Please fill out this field." disableUnderline={true} fullWidth={true} type="password" id="password" placeholder="Password *" />
            <Button type="submit" fullWidth={true} variant="contained" color="primary">
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
