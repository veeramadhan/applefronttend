import React, { useState } from 'react';
import "./MainNav.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import globe from "/Users/Temp 1/Pictures/own/Apple/applefrontend/src/images/globe.jpg"
import Logo from "/Users/Temp 1/Pictures/own/Apple/applefrontend/src/images/logo.png"


function MainNav() {

  const initialFormData = {
    username: '',
    password: '',
  }
  const [formData, setFormData] = useState(initialFormData);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Perform login logic here (e.g., send data to a server, check credentials)
    setShowToast(true);
    resetForm();
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mt-1">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={Logo}
              alt="Your Logo"
              height="30"
              className="d-inline-block align-top"
            /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav_linkss">
              <NavLink to={"/hr"} className='first_link'>Employe Experience</NavLink>
              <NavLink to={"/associatelogin"}>Associate Login</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <div className="container mt-5">
        <div className="row">
          {/* Left side with image (6 columns) */}
          <div className="col-md-6">
            <img
              src={globe}
              alt="Login Image"
              className="img-fluid"
            />
          </div>
          {/* Right side with login form (6 columns) */}
          <div className="col-md-6 content_login">
            <h2 className="mb-4 title_text">Associate Login</h2>
            <div className="form-border p-4 shadow">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Your Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Your Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-arrange">
                  Login
                </button>
              </form>
            </div>
            <div
              className={`toast position-fixed top-50 start-50 translate-middle bg-success text-white ${showToast ? 'show' : ''}`}
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div className="toast-body">
                Login successful! Welcome, {formData.username}!
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default MainNav
