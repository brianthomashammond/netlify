import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className={this.props.navPosition}>
        <div className="navbar">
          <div className="typewriter">
            >> Brian Thomas Hammond - Web Developer
          </div>
          <span className="navbar projects">
            <a
              href="#projects"
              className="navbar projects link"
              onClick={() => {
                this.props.projectChange();
              }}
            >
              Projects
            </a>
          </span>
          <span className="navbar skills">
            <a
              href="#skills"
              className="navbar skills link"
              onClick={() => {
                this.props.skillsChange();
              }}
            >
              {" "}
              Skills{" "}
            </a>
          </span>
          <span className="navbar resume">
            <a
              href="#resume"
              className="navbar resume link"
              onClick={() => {
                window.open(this.props.file);
              }}
            >
              {" "}
              Resume{" "}
            </a>
          </span>
          <span className="navbar contact">
            <a
              href="mailto:brianthomashammond@gmail.com"
              className="navbar contact link"
            >
              Contact
            </a>
          </span>
        </div>
      </div>
    );
  }
}
