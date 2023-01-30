import { faVolumeLow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Sliders from "../../../../Global/Components/Sliders/Sliders";
import styles from "./Webcontroller.module.css";

function Webvolumecontroller() {
  return (
    <div className={`row medium-padding primary-container ${styles.rows}`}>
      <div style={{ height: 25, width: 29 }}>
        <div
          style={{
            height: 25,
            width: 25,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 3.5,
          }}
        >
          <FontAwesomeIcon icon={faVolumeLow} size="xl" />
        </div>
      </div>
      <div className="max">
        <Sliders max={1} step={0.0000001} style={{ width: "100%" }} />
      </div>
    </div>
  );
}

function Webthemeswitcher() {
  return (
    <div className={`row medium-padding primary-container ${styles.rows}`}>
      <p>Light Mode</p>
      <div className="max"></div>
      <label className="switch right">
        <input type="checkbox" />
        <span>
          <i>light_mode</i>
        </span>
      </label>
    </div>
  );
}

function Webbackgroundswitcher() {
  return (
    <div className={`row medium-padding primary-container ${styles.rows}`}>
      <p>Run in background</p>
      <div className="max"></div>
      <label className="switch right">
        <input type="checkbox" />
        <span></span>
      </label>
    </div>
  );
}

export default function Webcontroller() {
  return (
    <article className={`no-padding no-elevate ${styles.container}`}>
      <Webvolumecontroller />
      <Webthemeswitcher />
      <Webbackgroundswitcher />
    </article>
  );
}
