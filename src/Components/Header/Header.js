import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./Header.css";
import ProfilePic from "../Images/profilepic.png";

function Header() {
  return (
    <Navbar expand="lg" className="bgContainer">
      <Container className="Container">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="links">
          <Nav className="linksNav">
            <Nav.Link className="linksNav" href="#home">
              Dashboard
            </Nav.Link>
            <Nav.Link className="linksNav" href="#link">
              All Projects
            </Nav.Link>
            <Nav.Link className="linksNav" href="#link">
              Members
            </Nav.Link>
            <Nav.Link className="linksNav" href="#link">
              Stats
            </Nav.Link>
            <Nav.Link className="linksNav" href="#link">
              Help
            </Nav.Link>
          </Nav>
          <div className="dropDown">
            <div className="MemberDetail">
              <div className="memberNameJob">
                <p className="memberName">Diane Ward</p>
                <p className="memberJob">Product Manager</p>
              </div>
              <img src={ProfilePic} className="profilePicture" />
              <NavDropdown id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
      <div className="leftFixedTabs">
        <div className="leftTabsFlex">
          <p className="logo">Pr</p>
          <div className="tabIcons">
            <div className="HomeIconContainer">
              <img src={require("../Images/home.png")} className="homeIcons" />
            </div>
            <img src={require("../Images/calendar.png")} className="Icons" />
            <img src={require("../Images/settings.png")} className="Icons" />
            {/* <image src={Calendar} className="homeIcon" /> */}
            <img src={require("../Images/calendar.png")} className="Icons" />
            <img src={require("../Images/settings.png")} className="Icons" />
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
