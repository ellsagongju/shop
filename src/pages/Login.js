import React, { Component } from "react";
import "./styles.css";
import CustomInput from "./components/CustomInput";
import Button from "./components/Button";
import { Login } from './../store.js';

function Login() {
        return (
      <div className="App">
        <form className="form">
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="password"
          />

          <Button type="button" color="primary" className="form__custom-button">
            Log in
          </Button>
        </form>
      </div>
    );

 }


export default Login;