import React, { Component } from 'react';

export default class ProjectDrop extends Component {
    render() {
        return (
            <div className={this.props.projectsPosition}>

                <div className="projects thumbnails-container">
                    <ul>
                        <li id="projectone" onclick="toggleExpansion(event, this.id)">
                            <div className="projects projectone-wrapper">
                                <i className="projects projectone-image-wrapper"></i>
                            </div>

                            <div id="projectone-links-wrapper" class="fade-in">
                                <p2>Riddle Me This...</p2>
                                <br />
                                <p2><a href="https://brianthomashammond.github.io/riddle-me-this/" target="_blank">live</a> | <a href="https://github.com/brianthomashammond/riddle-me-this" target="_blank">github</a></p2>
                            </div>
                        </li>

                        <li id="projecttwo" onclick="toggleExpansion(event, this.id)">
                            <div className="projects projecttwo-wrapper">
                                <i className="projects projecttwo-image-wrapper"></i>
                            </div>

                            <div id="projecttwo-links-wrapper" class="fade-in">
                                <p2>In Progress</p2>
                                <br />
                                <p2><a href="projecttwo deployed link" target="_blank">live</a> | <a href="projecttwo github link" target="_blank">github</a></p2>
                            </div>
                        </li>

                        <li id="projectthree" onclick="toggleExpansion(event, this.id)">
                            <div className="projects projectthree-wrapper">
                                <i className="projects projectthree-image-wrapper"></i>
                            </div>

                            <div id="projectthree-links-wrapper" class="fade-in">
                                <p2>In Progress</p2>
                                <br />
                                <p2><a href="projectthree deployed link" target="_blank">live</a> | <a href="projectthree live link" target="_blank">github</a>
                                </p2>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}