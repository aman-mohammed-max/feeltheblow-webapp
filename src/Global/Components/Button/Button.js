import React, { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";

const useLongPress = (
  onLongPress,
  onClick,
  { shouldPreventDefault = true, delay = 300 } = {}
) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef();
  const target = useRef();

  const start = useCallback(
    (event) => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener("touchend", preventDefault, {
          passive: false,
        });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onLongPress(event);
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault]
  );

  const clear = useCallback(
    (event, shouldTriggerClick = true) => {
      timeout.current && clearTimeout(timeout.current);
      shouldTriggerClick && !longPressTriggered && onClick(event);
      setLongPressTriggered(false);
      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener("touchend", preventDefault);
      }
    },
    [shouldPreventDefault, onClick, longPressTriggered]
  );

  return {
    onMouseDown: (e) => start(e),
    onTouchStart: (e) => start(e),
    onMouseUp: (e) => clear(e),
    onMouseLeave: (e) => clear(e, false),
    onTouchEnd: (e) => clear(e),
  };
};

const isTouchEvent = (event) => {
  return "touches" in event;
};

const preventDefault = (event) => {
  if (!isTouchEvent(event)) return;

  if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};

function Button(props) {
  const defaultOptions = {
    shouldPreventDefault: props.spb,
    delay: props.lpdelay,
  };

  const longPressEvent = useLongPress(
    props.onLongPress,
    props.onClick,
    defaultOptions
  );

  return (
    <button {...longPressEvent} className={props.className}>
      {props.icon}
      <span>{props.title}</span>
    </button>
  );
}

Button.propTypes = {
  spb: PropTypes.bool,
  lpdelay: PropTypes.number,
  title: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onLongPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  spb: true,
  lpdelay: 500,
  title: "Button",
  className: "",
};

export default Button;
