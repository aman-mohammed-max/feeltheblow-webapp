import React from "react";
import PropTypes from "prop-types";
import styles from "./Soundbox.module.css";

function Soundbox(props) {
  return (
    <div className="hgh" style={{ marginBottom: 20 }}>
      <div className="row" style={{ paddingLeft: 12 }}>
        {props.icon}
        <p className="medium-text capitalize bold">{props.title}</p>
      </div>
      <article
        className={`no-elevate ${styles.container}`}
        style={{ marginTop: 9 }}
      >
        {props.children}
      </article>
    </div>
  );
}

Soundbox.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
};

Soundbox.defaultProps = {
  icon: <i>equalizer</i>,
  title: "title",
};

export default Soundbox;
