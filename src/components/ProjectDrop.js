import React, { Component } from "react";

export default class ProjectDrop extends Component {
  render() {
    return (
      <div className={this.props.projectsPosition}>
        <div className="projects thumbnails-container">
          <ul>
            <li id="projectone">
              <div className="projects projectone-wrapper">
                <i className="projects projectone-image-wrapper"></i>
              </div>

              <div id="projectone-links-wrapper">
                Riddle Me This...
                <br />
                HTML/CSS/JavaScript
                <br />
                <a
                  href="https://brianthomashammond.github.io/riddle-me-this/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  live
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/brianthomashammond/riddle-me-this"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </div>
            </li>

            <li id="projecttwo">
              <div className="projects projecttwo-wrapper">
                <i className="projects projecttwo-image-wrapper"></i>
              </div>

              <div id="projecttwo-links-wrapper">
                LARK
                <br />
                Ruby
                <br />
                <a
                  href="https://github.com/brianthomashammond/LARK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </div>
            </li>

            <li id="projectthree">
              <div className="projects projectthree-wrapper">
                <i className="projects projectthree-image-wrapper"></i>
              </div>

              <div id="projectthree-links-wrapper">
                This Portfolio
                <br />
                React/CSS
                <br />
                <a
                  href="https://brianthomashammond.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  live
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/brianthomashammond/netlify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </div>
            </li>

            <li id="projectfour">
              <div className="projects projectfour-wrapper">
                <i className="projects projectfour-image-wrapper"></i>
              </div>

              <div id="projectfour-links-wrapper">
                My Apartment Tracker
                <br />
                React in Rails
                <br />
                <a
                  href="https://vast-island-05116.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  live
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/brianthomashammond/my-apartment-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
