import React from 'react'
import './Program.css'

// IMPORTANT: Ensure these filenames match the EXACT casing in your folder
import programImg from '../../assets/program-1.png'
import Program2 from '../../assets/program-2.png'
import Program3 from '../../assets/program-3.png'
import Programicon1 from '../../assets/program-icon-1.png'
import Programicon2 from '../../assets/program-icon-2.png'
import Programicon3 from '../../assets/program-icon-3.png'

const Program = () => {
  return (
    <div className='programs' id='programs'>
      <div className='program'>
        <img src={programImg} alt="Graduation" />
        <div className="caption">
          <img src={Programicon1} alt="icon" />
          <p> Graduation Degree</p>
        </div>
      </div>

      <div className='program'>
        <img src={Program2} alt="Masters" />
        <div className="caption">
          <img src={Programicon2} alt="icon" />
          <p> Master Degree</p>
        </div>
      </div>

      <div className='program'>
        <img src={Program3} alt="Post Grad" />
        <div className="caption">
          <img src={Programicon3} alt="icon" />
          <p> Post Graduation </p>
        </div>
      </div>
    </div>
  )
}

export default Program