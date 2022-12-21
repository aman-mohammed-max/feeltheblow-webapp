import React from 'react';
import PropTypes from 'prop-types';
import string from '../../../../Global/string.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';


function Appbar(props) {
  return (
    <header className="primary-container">
    <nav>
      <h5 style={{fontFamily: "'Pacifico', cursive" }} className="max">{string.appname}</h5>
      <button className="circle transparent">
          <FontAwesomeIcon icon={faGear} size="xl" />
      </button>
    </nav>
  </header>
  )
}

Appbar.propTypes = {}

export default Appbar
