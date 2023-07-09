import React from 'react'

const Navbar = ({ navPosition, projectChange, skillsChange, file}) => {
    return (
        <div className={navPosition}>
            <div className='navbar'>
                <div className='typewriter'>
                    {'>>'} Brian Thomas Hammond - Software Engineer
                </div>
                <span className='navbar projects'>
                    <a
                    href='#projects'
                    className='navbar projects link'
                    onClick={() => {
                        projectChange()
                    }}
                    >
                        Projects
                    </a>
                </span>
                <span className='navbar skills'>
                    <a
                    href='#skills'
                    className='navbar skills link'
                    onClick={() => {
                        skillsChange()
                    }}
                    >
                        {' '}Skills
                    </a>
                </span>
                <span className='navbar resume'>
                    <a
                    href='#resume'
                    className='navbar resume link'
                    onClick={() => {
                        window.open(file)
                    }}
                    >
                        {' '}Resume
                    </a>
                </span>
                <span className='navbar contact'>
                    <a
                    href='mailto:brianthomashammond@gmail.com'
                    className='navbar contact link'
                    >
                        {' '}Contact
                    </a>
                </span>
            </div>
        </div>
    )
}

export default Navbar