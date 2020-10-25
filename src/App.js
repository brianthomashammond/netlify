import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import ProjectDrop from './components/ProjectDrop.js';
import SkillsRiser from './components/SkillsRiser.js';
import file from './assets/20201025 Brian Thomas Hammond Resume.pdf'
// import { motion } from "framer-motion"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectsPosition: "projects off",
      navPosition: "navbar center",
      skillsPosition: "skills off",
      file: file
    }
  }

  projectChange = () => {
    if (this.state.skillsPosition === "skills off") {
      this.setState({
        projectsPosition: "projects fadeIn",
        navPosition: "navbar bottom"
      })
    } else {
      this.setState({
        projectsPosition: "projects fadeIn",
        navPosition: "navbar bottom",
        skillsPosition: "skills fadeOut"
      })
    }
  }

  skillsChange = () => {
    if (this.state.projectsPosition === "projects off") {
      this.setState({
        navPosition: "navbar top",
        skillsPosition: "skills fadeIn"
      })
    } else {
      this.setState({
        projectsPosition: "projects fadeOut",
        navPosition: "navbar top",
        skillsPosition: "skills fadeIn"
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
            skillsChange={this.skillsChange}
            file={this.state.file}
          />
          <SkillsRiser
            skillsPosition={this.state.skillsPosition}
          />
        </div>
      </>
    )
  }
}
