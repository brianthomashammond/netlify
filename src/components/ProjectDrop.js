import React, { Component } from 'react';

export default class ProjectDrop extends Component {
    render() {
        return(
            <div className = { this.props.projectsPosition }> 

                <div className="projects thumbnails-container">
                <ul>
                        <li id="projectone" onclick="toggleExpansion(event, this.id)">
                            <div className="projects projectone-wrapper">
                                <i className="projects projectone-image-wrapper"></i>
                            </div>

                            <div id="projectone-links-wrapper" class="fade-in">
                                <h3>Project One</h3>
                                <p2>First Project</p2>
                                <br/>
                                <p2><a href="projectone deployed link" target="_blank">live</a> | <a href="projectone github link" target="_blank">github</a></p2>
                            </div>
                        </li>

                        <li id="projecttwo" onclick="toggleExpansion(event, this.id)">
                            <div className="projects projecttwo-wrapper">
                                <i className="projects projecttwo-image-wrapper"></i>
                            </div>

                            <div id="projecttwo-links-wrapper" class="fade-in">
                                <h3>Project Two</h3>
                                <p2>Second Project</p2>
                                <br/>
                                <p2><a href="projecttwo deployed link" target="_blank">live</a> | <a href="projecttwo github link" target="_blank">github</a></p2>
                            </div>
                        </li>

                        <li id="projectthree" onclick="toggleExpansion(event, this.id)">
                            <div className="projects projectthree-wrapper">
                                <i className="projects projectthree-image-wrapper"></i>
                            </div>
                        
                            <div id="projectthree-links-wrapper" class="fade-in">
                                <h3>Project Three</h3>
                                <p2>Third Project</p2>
                                <br/>
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