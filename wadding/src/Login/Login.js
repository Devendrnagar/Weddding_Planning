import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3002/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          console.log("login Success");
          alert("Login successful");
          navigate("/home");
        } else {
          alert("incorrect password please try again ");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center text-center vh-100"
        style={{
          backgroundImage:
            "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))",
        }}
      >
        <div className="bg-white p-3 rounded" style={{ width: "40%" }}>
          <h2 className="mb-3 text-primary">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-start">
              <label className="form-label">
                {" "}
                <strong>Email Id</strong>
              </label>

              <input
                type="email"
                placeholder="Enter tha email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label className="form-label">
                <strong>Password</strong>
              </label>

              <input
                type="password"
                placeholder="Enter tha Password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          <p className="container my-2">Don&apos;t have an account?</p>
          <Link to="/register" className="btn btn-secondary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
