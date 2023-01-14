import React, { useContext } from "react";
// import PropTypes from 'prop-types';
import string from "../../../../Global/string.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { settingsopen } from "../../../..";

function Appbar(props) {
  const {open, setOpen} = useContext(settingsopen);
  return (
    <header className="primary-container">
      <nav>
        <h5 style={{ fontFamily: "'Pacifico', cursive" }} className="max">
          {string.appname}
        </h5>
        <button className="circle transparent" onClick={() => {setOpen(!open)}}>
          <FontAwesomeIcon icon={faGear} size="xl" />
        </button>
      </nav>
    </header>
  );
}

Appbar.propTypes = {};

export default Appbar;
