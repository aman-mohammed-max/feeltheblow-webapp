import React from 'react';
import PropTypes from 'prop-types';

function Soundbox(props) {
  return (
   <div className='hgh'>
    <div className="row" style={{paddingLeft: 10}}>
        {props.icon}
      <p className="medium-text capitalize bold">{props.title}</p>
     </div>
     <article style={{marginTop: 7}}>
        {props.children}
     </article>
    </div>
  )
}

Soundbox.propTypes = {
    icon :  PropTypes.node ,
    title : PropTypes.string
}

Soundbox.defaultProps = {
    icon :  <i>equalizer</i> ,
    title : 'title'
}

export default Soundbox
