import React from "react";
import string from "../../string.json";
import { blanket } from "../../../../Global/Assets/images/blanket.img";
import Button from "../../../../Global/Components/Button/Button";
import copyandvib, {
  openLink,
} from "../../../../Global/functions/copyandvib.js";
import styles from "./Evolved.module.css";

function Evolved() {
  return (
    <article className="round container-box-bg no-elevate no-margin primary-container">
      <div
        className={`row small-padding container-box-bg round  ${styles.top}`}
      >
        <img
          alt="blanket"
          className="large circle small-padding"
          src={blanket}
        />
        <h5 className={`center-align absolute center middle ${styles.title}`}>
          {string.evolved.title}
        </h5>
      </div>
      <p className={`medium-margin ${styles.description}`}>
        {string.evolved.des}
      </p>
      <div className={`small-margin ${styles.button_container}`}>
        <nav>
          <Button
            spb={false}
            onClick={() => openLink(string.evolved.button[1].link)}
            onLongPress={() => copyandvib(string.evolved.button[1].link, 500)}
            title={string.evolved.button[1].title}
            className="round border"
          />
          <Button
            spb={false}
            onClick={() => openLink(string.evolved.button[2].link)}
            onLongPress={() => copyandvib(string.evolved.button[2].link, 500)}
            title={string.evolved.button[2].title}
            className="round border"
          />
        </nav>
      </div>
    </article>
  );
}

export default Evolved;
