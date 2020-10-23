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
          <skills><a href="#resume" onClick={() => { this.props.resumeChange() }}> Skills </a></skills>
          <contact><a href="#contact">Contact</a></contact>
        </p>
      </div>
    )
  }
}