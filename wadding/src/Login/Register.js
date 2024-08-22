import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState();
  const [username, SetLast] = useState();
  const [email, setEmail] = useState();
  const [password, SetPassword] = useState();
  const [password_confirmation, setPassword_confirmation] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3002/register", { name, username, email, password, password_confirmation })
      .then((result) => {
        console.log(result);
        if (result.data === "Already registered") {
          alert("E-mail already registered Please Login to proceed");
          navigate("/login");
        } else {
          alert("Registered successfully Please Login to Proceed");
          navigate("/login");
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
            "linear-gradient(/00d5ff,/0095ff,rgba(93,0,255,.555))",
        }}
      >
        <div className="bg-white p-3 rounded" style={{ width: "40%" }}>
          <h2 className="mb-3 text-primary">Register</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-start">
              <label className="form-label">
                <strong>Name</strong>
              </label>

              <input
                type="text"
                placeholder="Enter name"
                className="form-control"
                id="exampleInputname"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3 text-start">
              <label className="form-label">
                <strong>UserName</strong>
              </label>
              <input
                type="text"
                placeholder="Enter UserName"
                className="form-control"
                id="exampleInputname"
                onChange={(e) => SetLast(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label className="form-label">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                id="exampleInputname"
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
                placeholder="Enter password"
                className="form-control"
                id="exampleInputname"
                onChange={(e) => SetPassword(e.target.value)}
                required
              />
            </div>

            {/* new */}
            <div className="mb-3 text-start">
              <label className="form-label">
                <strong>password_confirmation</strong>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="form-control"
                id="exampleInputname"
                onChange={(e) => setPassword_confirmation(e.target.value)}
                required
              />
            </div>
            {/* end  */}

            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>

          <p className="container my-2">Already have an account ?</p>
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
