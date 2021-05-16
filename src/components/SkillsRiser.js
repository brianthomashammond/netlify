import React from 'react'

const SkillsRiser = ({ skillsPosition }) => {
    return (
        <div className={skillsPosition}>
            <div className='skills div'>
                <div className='skills div'>
                    <i className='skills javascript-image-wrapper' />
                    <i className='skills css3-image-wrapper' />
                    <i className='skills html5-image-wrapper' />
                    <i className='skills ruby-image-wrapper' />
                    <i className='skills detox-image-wrapper' />
                </div>
                <div className='skills div'>
                    <i className='skills react-image-wrapper' />
                    <i className='skills rails-image-wrapper' />
                    <i className='skills postgresql-image-wrapper' />
                    <i className='skills redux-image-wrapper' />
                    <i className='skills git-image-wrapper' />
                </div>
            </div>
        </div>
    )
}

export default SkillsRiser