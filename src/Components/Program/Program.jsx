import React from 'react'
import './Program.css'
import  Program1 from'../../assets/Program-1.png'
import  Program2 from'../../assets/Program-2.png'
import  Program3 from'../../assets/Program-3.png'
import  Programicon1 from'../../assets/Program-icon-1.png'
import  Programicon2 from'../../assets/Program-icon-2.png'
import  Programicon3 from'../../assets/Program-icon-3.png'

const Program = () => {
  return (
    <div className='programs' id='programs'>
        <div className='program'>
<img src={Program1}/>
<div className="caption">
    <img src= {Programicon1}/>
    <p> Graduation Degree</p>
</div>
        </div>

        <div className='program'>
<img src={Program2}/>
<div className="caption">
    <img src= {Programicon2}/>
    <p> Master Degree</p>
</div>
        </div>


        <div className='program'>
<img src={Program3}/>
<div className="caption">
    <img src= {Programicon3}/>
    <p> Post Graduation </p>
</div>
        </div>
      
    </div>
  )
}

export default Program
