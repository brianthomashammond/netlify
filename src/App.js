import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProjectDrop from './components/ProjectDrop'
import SkillsRiser from './components/SkillsRiser'
import file from './assets/20201025 Brian Thomas Hammond Resume.pdf'

const App = () => {
    const [ projectsPosition, setProjectsPosition ] = useState('projects off')
    const [ navPosition, setNavPosition ] = useState('navbar center')
    const [ skillsPosition, setSkillsPosition ] = useState('skills off')


    const projectChange = () => {
        if (skillsPosition === 'skills off') {
            setProjectsPosition('projects fadeIn')
            setNavPosition('navbar bottom')
        } else {
            setProjectsPosition('projects fadeIn')
            setNavPosition('navbar bottom')
            setSkillsPosition('skills fadeOut')
        }
    }

    const skillsChange = () => {
        if (projectsPosition === 'projects off') {
            setNavPosition('navbar top')
            setSkillsPosition('skills fadeIn')
        } else {
            setProjectsPosition('projects fadeOut')
            setNavPosition('navbar top')
            setSkillsPosition('skills fadeIn')
        }
    }

    return (
        <div>
            <ProjectDrop projectsPosition={projectsPosition} />
            <Navbar
                navPosition={navPosition}
                projectChange={projectChange}
                skillsChange={skillsChange}
                file={file}
            />
            <SkillsRiser skillsPosition={skillsPosition} />
        </div>
    )
}

export default App