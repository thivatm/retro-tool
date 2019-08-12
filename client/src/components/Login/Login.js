import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.sass";

import Service from "./../../services";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="loginForm">
      <form onSubmit={e => e.preventDefault() && false}>
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
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          disabled={!email || !password}
          type="submit"
          className="loginBtn"
          onClick={signin}
        >
          Login
        </button>
        <button type="submit" className="regBtn">
          <Link className="registerBtn" to="/register">
            Register
          </Link>
        </button>
      </form>
    </div>
  );

  async function signin() {
    try {
      await Service.login(email, password);
      props.history.replace("/home");
    } catch (error) {
      console.log(error);
    }
  }
}
