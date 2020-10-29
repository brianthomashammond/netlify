import React, { Component } from 'react';


export default class Navbar extends Component {

  render() {
    return (
      <div className={this.props.navPosition}>
        <p>
          <div className="typewriter">
            >> Brian Thomas Hammond - Web Developer
            </div>
          <projects><a href="#projects" className="projects link" onClick={() => { this.props.projectChange() }}>Projects</a></projects>
          <skills><a href="#skills" className="skills link" onClick={() => { this.props.skillsChange() }}> Skills </a></skills>
          <resume><a href="#resume" className="resume link" onClick={() => { window.open(this.props.file) }}> Resume </a></resume>
          <contact><a href="mailto:brianthomashammond@gmail.com" className="contact link" >Contact</a></contact>
        </p>
      </div>
    )
  }
}