import React, { useRef } from 'react' // 1. Added useRef import here
import './Testimonials.css'
import nexticon from '../../assets/next-icon.png'
import backicon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Testimonials = () => {
  const slider = useRef(null);
  const tx = useRef(0);

  const slideForward = () => {
    // Moves left (negative) up to -75% if there are 4 slides
    if (tx.current > -75) { 
      tx.current -= 25;
    }
    if (slider.current) {
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  };

  const slideBackward = () => {
    if (tx.current < 0) {
      tx.current += 25;
    }
    if (slider.current) {
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  };

  return (
    <div className='Testimonials' id='testimonials'> 
      <img src={nexticon} className='next-btn' alt="next" onClick={slideForward}/> 
      <img src={backicon} className='back-btn' alt="back" onClick={slideBackward}/>      
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt=""/>
                <h3>William Jackson</h3>
                <span> Edusity, USA</span>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made...</p>
            </div> 
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt=""/>
                <h3>William Jackson 2</h3>
                <span> Edusity, USA</span>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made...</p>
            </div> 
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt=""/>
                <h3>William Jackson 3</h3>
                <span> Edusity, USA</span>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made...</p>
            </div> 
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt=""/>
                <h3>William Jackson 4</h3>
                <span> Edusity, USA</span>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made...</p>
            </div> 
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials; // 2. Fixed spelling here