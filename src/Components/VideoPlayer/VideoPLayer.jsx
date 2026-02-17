import React from 'react'
import './Videoplayer.css'
import video from '../../assets/video.mp4'
const VideoPLayer = ({playstate, setPLaystate}) => {
  return (
    <div className={`videoplayer${playstate}'':'hide'`}>
        <video src={video} autoPlay muted controls/>
      
    </div>
  )
}

export default VideoPLayer
