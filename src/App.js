import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import ProjectDrop from './components/ProjectDrop.js';
import SkillsRiser from './components/ResumeRiser.js';
// import { motion } from "framer-motion"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectsPosition: "projects off",
      navPosition: "navbar center",
      resumePosition: "resume off"
    }
  }

  projectChange = () => {
    if (this.state.resumePosition === "resume off") {
      this.setState({
        projectsPosition: "projects fadeIn",
        navPosition: "navbar bottom"
      })
    } else {
      this.setState({
        projectsPosition: "projects fadeIn",
        navPosition: "navbar bottom",
        resumePosition: "resume fadeOut"
      })
    }
  }

  resumeChange = () => {
    if (this.state.projectsPosition === "projects off") {
      this.setState({
        navPosition: "navbar top",
        resumePosition: "resume fadeIn"
      })
    } else {
      this.setState({
        projectsPosition: "projects fadeOut",
        navPosition: "navbar top",
        resumePosition: "resume fadeIn"
      })
    }
  }

  // MyComponent = () => (
  //   <motion.div
  //     animate={{ scale: 2 }}
  //     transition={{ duration: 0.5 }}
  //   />
  // )

  render() {
    return (
      <>
        <div>
          <ProjectDrop
            projectsPosition={this.state.projectsPosition}
          />
          <Navbar
            navPosition={this.state.navPosition}
            projectChange={this.projectChange}
            resumeChange={this.resumeChange}
          />
          <SkillsRiser
            resumePosition={this.state.resumePosition}
          />
        </div>
      </>
    )
  }
}
