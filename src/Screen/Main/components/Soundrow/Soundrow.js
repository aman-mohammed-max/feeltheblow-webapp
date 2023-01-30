import React , { useState } from "react";
import PropTypes from "prop-types";
import Sliders from "../../../../Global/Components/Sliders/Sliders";
import {
  openDB,
  // set,
  get,
  // remove,
  // clear,
} from "../../../../Global/Assets/localDB/LocalDB";

function Soundrow(props) {
  const [volval, setvolval] = useState();
  

 openDB(() => {
    get(props.title, (data) => {
      setvolval(data);
      props.Volume(data);
    });
  });

  function slidersonchange(e) {
    props.Volume(e.target.value)
  }

  return (
    <div className="row">
      <div
        style={{
          height: 25,
          width: 29,
        }}
      >
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
          {props.icon}
        </div>
      </div>
      <div className="max">
        <p className="medium-text bold">{props.title}</p>
        <Sliders
          value={volval}
          max={1}
          step={0.0000001}
          onChange={slidersonchange}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

Soundrow.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  Volume: PropTypes.func
};

Soundrow.defaultProps = {
  icon: <i>music_note</i>,
  title: "audio",
};

export default Soundrow;
