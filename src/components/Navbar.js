import React from "react"

const Navbar = (props) => {
    return (
        <div className={props.navPosition}>
            <div className="navbar">
            <div className="typewriter">
                >> Brian Thomas Hammond - Web Developer
            </div>
            <span className="navbar projects">
                <a
                href="#projects"
                className="navbar projects link"
                onClick={() => {
                    props.projectChange()
                }}
                >
                Projects
                </a>
            </span>
            <span className="navbar skills">
                <a
                href="#skills"
                className="navbar skills link"
                onClick={() => {
                    props.skillsChange()
                }}
                >
                {" "}Skills{" "}
                </a>
            </span>
            <span className="navbar resume">
                <a
                href="#resume"
                className="navbar resume link"
                onClick={() => {
                    window.open(props.file)
                }}
                >
                {" "}Resume{" "}
                </a>
            </span>
            <span className="navbar contact">
                <a
                href="mailto:brianthomashammond@gmail.com"
                className="navbar contact link"
                >
                Contact
                </a>
            </span>
            </div>
        </div>
    )
}

export default Navbar