import React from 'react';
import './Sliders.css'
import PropTypes from 'prop-types';

function Sliders(props) {  
  return (
    <div>
        <input type="range" min={props.min} max={props.max} step={props.step} onChange={props.onChange} value={props.value} className="styled-slider slider-progress" style={props.style} />
    </div>
  )
}

Sliders.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func,
    value: PropTypes.number,
    step: PropTypes.number,
    style: PropTypes.object
}

Sliders.defaultProps = {
    min: 0,
    max: 100,
}

export default Sliders
