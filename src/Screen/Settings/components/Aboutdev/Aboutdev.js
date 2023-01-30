import React from "react";
import styles from "./Aboutdev.module.css";
import { Aman } from "../../../../Global/Assets/images/Aman.img"

function Aboutdev() {
  return (
    <button className={`primary-container margin responsive round max ${styles.button}`}>
      <img className="circle small" alt="00" src={Aman} />
      <span>About Developer</span>
    </button>
  );
}

export default Aboutdev;