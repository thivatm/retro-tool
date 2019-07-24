import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Register.sass";

import Service from "./../../services";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");

  return (
    <div className="registerForm">
      <form onSubmit={e => e.preventDefault() && false}>
        <input
          className="name"
          placeholder="FULL NAME"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="email"
          placeholder="EMAIL"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="password"
          placeholder="PASSWORD"
          autoComplete="off"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="cPassword"
          placeholder="CONFIRM PASSWORD"
          autoComplete="off"
          value={cPassword}
          onChange={e => setCpassword(e.target.value)}
        />
        <button type="submit" className="loginBtn" onClick={signup}>
          Sign up
        </button>
        <button type="submit" className="regBtn">
          <Link className="loginBtn" to="/">
            Login
          </Link>
        </button>
      </form>
    </div>
  );

  async function signup() {
    try {
      await Service.signup(name, email, password);
      props.history.replace("/");
    } catch (error) {
      console.log(error);
    }
  }
}

export default withRouter(Register);
