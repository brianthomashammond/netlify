import React from 'react'

const ProjectDrop = ({ projectsPosition }) => {
    return (
        <div className={projectsPosition}>
            <div className='projects thumbnails-container'>
                <ul>
                    <li id='project-one'>
                        <div className='projects project-one-wrapper'>
                            <i className='projects project-one-image-wrapper'></i>
                        </div>
                        <div id='project-one-links-wrapper'>
                            ColorPlunk!
                            <br />
                            React/Tone.js
                            <br />
                            <a
                                href='https://colorplunk.netlify.app/demo'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                live
                            </a>
                            {' | '}
                            <a
                                href='https://github.com/brianthomashammond/mintbean-js-musichacks'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                github
                            </a>
                        </div>
                    </li>
                    <li id='project-two'>
                        <div className='projects project-two-wrapper'>
                            <i className='projects project-two-image-wrapper'></i>
                        </div>
                        <div id='project-two-links-wrapper'>
                            My Apartment Tracker
                            <br />
                            React/Rails
                            <br />
                            <a
                                href='https://vast-island-05116.herokuapp.com'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                live
                            </a>
                            {' | '}
                            <a
                                href='https://github.com/brianthomashammond/my-apartment-tracker'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                github
                            </a>
                        </div>
                    </li>
                    <li id='project-three'>
                        <div className='projects project-three-wrapper'>
                            <i className='projects project-three-image-wrapper'></i>
                        </div>
                        <div id='project-three-links-wrapper'>
                            This Portfolio
                            <br />
                            React/CSS
                            <br />
                            <a
                                href='https://brianthomashammond.netlify.app'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                live
                            </a>
                            {' | '}
                            <a
                                href='https://github.com/brianthomashammond/netlify'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                github
                            </a>
                        </div>
                    </li>
                    <li id='project-four'>
                        <div className='projects project-four-wrapper'>
                            <i className='projects project-four-image-wrapper'></i>
                        </div>
                        <div id='project-four-links-wrapper'>
                            LARK
                            <br />
                            Ruby
                            <br />
                            <a
                                href='https://github.com/brianthomashammond/LARK'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                github
                            </a>
                        </div>
                    </li>
                    <li id='project-five'>
                        <div className='projects project-five-wrapper'>
                            <i className='projects project-five-image-wrapper'></i>
                        </div>
                        <div id='project-five-links-wrapper'>
                            Riddle Me This...
                            <br />
                            HTML/CSS/JavaScript
                            <br />
                            <a
                                href='https://brianthomashammond.github.io/riddle-me-this/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                live
                            </a>
                            {' | '}
                            <a
                                href='https://github.com/brianthomashammond/riddle-me-this'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                github
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProjectDrop