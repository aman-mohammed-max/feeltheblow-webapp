import React, { useContext } from "react";
import styles from "./Appbar.module.css";
import string from "../../string.json";
import { settingsopen } from "../../../..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Appbar(props) {
  const { open, setOpen } = useContext(settingsopen);
  return (
    <header
      className={`primary-container select_disabled padding ${styles.header}`}
    >
      <nav>
        <button onClick={() => setOpen(!open)} className="circle transparent">
          <FontAwesomeIcon icon={faAngleLeft} size="xl" />
        </button>
        <h5 className={`max center-align ${styles.title}`}>{string.title}</h5>
        <div className="circle transparent"></div>
      </nav>
    </header>
  );
}
export default Appbar;
