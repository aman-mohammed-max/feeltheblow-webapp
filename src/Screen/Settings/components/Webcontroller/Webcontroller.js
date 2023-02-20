import React, { useRef, useState } from "react";
import {
  faVolumeHigh,
  faVolumeLow,
  faVolumeOff,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sliders from "../../../../Global/Components/Sliders/Sliders";
import styles from "./Webcontroller.module.css";

function Webvolumecontroller() {
  const [volm_icon, setvolm_icon] = useState(faVolumeXmark);

  function handle(e) {
    if (e.target.value > 0.5) {
      setvolm_icon(faVolumeLow);
    } else if (e.target.value < 0.5) {
      setvolm_icon(faVolumeOff);
    }
    switch (e.target.value) {
      case "1":
        setvolm_icon(faVolumeHigh);
        break;
      case "0":
        setvolm_icon(faVolumeXmark);
        break;
      default:
        return null;
    }
  }

  return (
    <div
      className={`row medium-padding container-box-bg primary-container ${styles.rows}`}
    >
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
          <FontAwesomeIcon icon={volm_icon} size="xl" />
        </div>
      </div>
      <div className="max">
        <Sliders
          max={1}
          onChange={handle}
          step={0.0000001}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

function Webthemeswitcher() {
  const switchRef = useRef(null);
  const [isDark, setDark] = useState();

  function handleClick() {
    switch (switchRef.current.checked) {
      case true:
        console.log("dark mode");
        setDark(true);
        break;
      case false:
        setDark(false);
        console.log("light mode");
        break;
      default:
        setDark(false);
        console.log("light mode");
    }
  }

  return (
    <div
      className={`row medium-padding container-box-bg primary-container ${styles.rows}`}
    >
      <p>{isDark ? "Dark Mode" : "Light Mode"}</p>
      <div className="max"></div>
      <label className="switch right">
        <input type="checkbox" ref={switchRef} onChange={handleClick} />
        <span>
          <i>{isDark ? "dark_mode" : "light_mode"}</i>
        </span>
      </label>
    </div>
  );
}

function Webbackgroundswitcher() {
  return (
    <div
      className={`row medium-padding container-box-bg primary-container ${styles.rows}`}
    >
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
