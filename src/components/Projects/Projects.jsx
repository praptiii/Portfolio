import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Projects = () => {
  return (
    <div id='projects' className='projects'>
        <div className='project-title'>
            <h1>My Projects</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className='projects-container'> 
            {mywork_data.map((work, index)=>{
                return <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
                <img key={index} src={work.w_img} alt=''/></a>
            })}
        </div>
        <div className='projects-showmore'>
            <p>Show more</p>
            <img src={arrow_icon} alt=''/>
        </div>
    </div>
  )
}

export default Projects