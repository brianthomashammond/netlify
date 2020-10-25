import React, { Component } from 'react';


export default class Navbar extends Component {

  render() {
    return (
      <div className={this.props.navPosition}>
        <p>
          <div className="typewriter">
            >> Brian Thomas Hammond - Web Developer
            </div>
          <projects><a href="#projects" onClick={() => { this.props.projectChange() }}>Projects</a></projects>
          <skills><a href="#skills" onClick={() => { this.props.skillsChange() }}> Skills </a></skills>
          <resume><a href="#resume" onClick={() => { window.open(this.props.file) }}> Resume </a></resume>
          <contact><a href="mailto:brianthomashammond@gmail.com">Contact</a></contact>
        </p>
      </div>
    )
  }
}