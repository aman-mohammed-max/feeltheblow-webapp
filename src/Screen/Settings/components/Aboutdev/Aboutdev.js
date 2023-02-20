import React from "react";
import PropTypes from "prop-types";
import styles from "./Aboutdev.module.css";
import { Aman } from "../../../../Global/Assets/images/Aman.img";

function Aboutdev(props) {
  return (
    <button
      onClick={props.onClick}
      className={`primary-container margin responsive round max container-box-bg ${styles.button}`}
    >
      <img className="circle small" alt="00" src={Aman} />
      <span>About Developer</span>
    </button>
  );
}

Aboutdev.propTypes = {
  onClick: PropTypes.func,
};

export default Aboutdev;
