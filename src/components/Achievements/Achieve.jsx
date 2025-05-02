import React from 'react'
import './Achieve.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Achieve = () => {
  return (
    <div id='achievements' className='achieve'>
    <div className='achieve-title'>
        <h1>My Achievements</h1>
        <img src={theme_pattern} alt=''/>
    </div>
    <div className='achieve-container'>
        {Services_Data.map((service,index)=>{
            return <div key={index} className='services-format'>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className='services-readmore'>
                    <a href={service.s_link} target="_blank" rel="noopener noreferrer" className='services-readmore'>
                    <p>Read More</p>
                    <img src={arrow_icon} alt=''/></a>
                </div>
            </div>
        })}
    </div>

    </div>
  )
}

export default Achieve