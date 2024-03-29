import React, { useEffect, useRef } from "react";
import "./Sliders.css";
import PropTypes from "prop-types";

export default function Sliders(props) {
  const sliderref = useRef(null);

  useEffect(() => {
    if (sliderref.current) {
      sliderref.current.style.setProperty("--value", sliderref.current.value);
      sliderref.current.style.setProperty(
        "--min",
        sliderref.current.min === "" ? "0" : sliderref.current.min
      );
      sliderref.current.style.setProperty(
        "--max",
        sliderref.current.max === "" ? "100" : sliderref.current.max
      );
      sliderref.current.addEventListener("input", () =>
        sliderref.current.style.setProperty("--value", sliderref.current.value)
      );
    }
  }, []);
  return (
    <input
      defaultValue={props.defaultvalue}
      ref={sliderref}
      type="range"
      min={props.min}
      max={props.max}
      step={props.step}
      onChange={props.onChange}
      className="styled-slider slider-progress"
      style={props.style}
    />
  );
}

Sliders.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  step: PropTypes.number,
  style: PropTypes.object,
  defaultValue: PropTypes.number,
};

Sliders.defaultProps = {
  min: 0,
  max: 100,
};
