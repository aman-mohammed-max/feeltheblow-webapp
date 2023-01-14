import React from 'react';
import PropTypes from 'prop-types';
import Sliders from '../../../../Global/Components/Sliders/Sliders';

function Soundrow(props) {
  
  //  const audio = new Audio (props.audio);

  //  audio.id = props.id;

  //    audio.volume = 0 ;

  //    audio.loop = true;
     
  //    const play = () => audio.play();

  

  return ( 
  
    <div className="row">
    <div style={{
        height:25,
        width: 29,
    }}>

    <div style={{
       height:25,
       width: 25,
       display:'flex',
       alignItems: 'center',
       justifyContent: 'center',
       marginLeft: 3.5 
    }}>
      {props.icon}
      </div>

     </div>
    <div className='max'>
     <p  className="medium-text bold">{props.title}</p>
       <Sliders
        max={1} 
        step={0.0000001} 
        // onChange={(e) => {audio.volume = e.target.value}} 
        style={{width: '100%'}}
        />
    </div>
    </div> 
  )
}

Soundrow.propTypes = {
    icon: PropTypes.node ,
    audio: PropTypes.string ,
    title: PropTypes.string 
}

Soundrow.defaultProps = {
    icon: <i>music_note</i> ,
    title: 'audio'
}

export default Soundrow
