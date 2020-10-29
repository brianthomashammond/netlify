import React, { Component } from 'react';

export default class ProjectDrop extends Component {
    render() {
        return (
            <div className={this.props.projectsPosition}>

                <div className="projects thumbnails-container">
                    <ul>
                        <li id="projectone" >
                            <div className="projects projectone-wrapper" onclick="toggleExpansion(event, this.id)">
                                <i className="projects projectone-image-wrapper"></i>
                            </div>

                            <div id="projectone-links-wrapper" class="fade-in">
                                <p2>Riddle Me This...</p2>
                                <br />
                                <p2>HTML/CSS/JavaScript</p2>
                                <br />
                                <p2><a href="https://brianthomashammond.github.io/riddle-me-this/" target="_blank" rel="noopener noreferrer">live</a> | <a href="https://github.com/brianthomashammond/riddle-me-this" target="_blank" rel="noopener noreferrer">github</a></p2>
                            </div>
                        </li>

                        <li id="projecttwo" onclick="toggleExpansion(event, this.id)">
                            <div className="projects projecttwo-wrapper">
                                <i className="projects projecttwo-image-wrapper"></i>
                            </div>

                            <div id="projecttwo-links-wrapper" class="fade-in">
                                <p2>LARK</p2>
                                <br />
                                <p2>Ruby</p2>
                                <br />
                                <p2><a href="https://github.com/brianthomashammond/LARK" target="_blank" rel="noopener noreferrer">github</a></p2>
                            </div>
                        </li>

                        <li id="projectthree" onclick="toggleExpansion(event, this.id)">
                            <div className="projects projectthree-wrapper">
                                <i className="projects projectthree-image-wrapper"></i>
                            </div>

                            <div id="projectthree-links-wrapper" class="fade-in">
                                <p2>This Portfolio</p2>
                                <br />
                                <p2>React/CSS</p2>
                                <br />
                                <p2><a href="https://brianthomashammond.netlify.app" target="_blank" rel="noopener noreferrer">live</a> | <a href="https://github.com/brianthomashammond/netlify" target="_blank" rel="noopener noreferrer">github</a>
                                </p2>
                            </div>
                        </li>
                    </ul>
                </div>
            </div >
        )
    }

}