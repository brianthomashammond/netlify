import React, { Component } from 'react';

export default class SkillsRiser extends Component {

  render() {
    return (
      <div className={this.props.skillsPosition}>
        <div className="skills div">
          <div className="skills div">
            <i className="skills javascript-image-wrapper"></i>
            <i className="skills css3-image-wrapper"></i>
            <i className="skills html5-image-wrapper"></i>
            <i className="skills ruby-image-wrapper"></i>
            <i className="skills sql-image-wrapper"></i>
          </div>
          <div className="skills div">
            <i className="skills react-image-wrapper"></i>
            <i className="skills rails-image-wrapper"></i>
            <i className="skills postgresql-image-wrapper"></i>
            <i className="skills postman-image-wrapper"></i>
            <i className="skills git-image-wrapper"></i>
          </div>
        </div>
      </div>
    )
  }
}