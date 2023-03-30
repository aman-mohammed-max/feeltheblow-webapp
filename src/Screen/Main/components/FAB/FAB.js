import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const FAB = forwardRef((props, ref) => {
  return (
    <button
      style={{
        position: "fixed",
        bottom: 15,
        right: 10,
      }}
      ref={ref}
      onClick={props.onClick}
      className="extra square round primary medium-elevate"
    >
      {props.icon}
      <span>{props.title}</span>
    </button>
  );
});

FAB.propTypes = {
  icon: PropTypes.node,
  onClick: PropTypes.func,
};

FAB.defaultProps = {
  icon: <i>add</i>,
};

export default FAB;
