import React, { Component } from 'react';

export default class SkillsRiser extends Component {

  render() {
    return (
      <div className={this.props.resumePosition}>
        <div className="resume div">
          <div className="skills div">
            <i className="resume javascript-image-wrapper"></i>
            <i className="resume css3-image-wrapper"></i>
            <i className="resume html5-image-wrapper"></i>
            <i className="resume ruby-image-wrapper"></i>
            <i className="resume sql-image-wrapper"></i>
          </div>
          <div className="skills div">
            <i className="resume react-image-wrapper"></i>
            <i className="resume rails-image-wrapper"></i>
            <i className="resume postgresql-image-wrapper"></i>
            <i className="resume postman-image-wrapper"></i>
            <i className="resume git-image-wrapper"></i>
          </div>
        </div>
      </div>
    )
  }
}