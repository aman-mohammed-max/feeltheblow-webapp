import React from 'react'
import PropTypes from 'prop-types'
import Sliders from '../../../../Global/Components/Sliders/Sliders'

function Soundrow(props) {

    const audio = new Audio(props.audio)

    audio.volume = 0 ;

    audio.loop = true;

    if (props.play === true) {
        audio.play()
        console.info('audio played')
    }  else {
        audio.pause()
    }  

  return (
    <div className="row">
    <div style={{
        marginLeft:50,
        height:25   
    }}>
      { props.icon}
     </div>
    <div className="max">
     <p className="medium-text bold">{props.title}</p>
       <Sliders max={1} step={0.0000001} onChange={(e) => {audio.volume = e.target.value}} style={{width: '100%'}}  />
    </div>
    </div>
  )
}

Soundrow.propTypes = {
    icon: PropTypes.node ,
    audio: PropTypes.string ,
    title: PropTypes.string ,
    play : PropTypes.bool
}

Soundrow.defaultProps = {
    icon: <i>music_note</i> ,
    title: 'audio'
}

export default Soundrow
