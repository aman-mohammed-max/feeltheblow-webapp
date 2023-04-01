import React, { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Sliders from "../../../../Global/Components/Sliders/Sliders";
import volumedb from "../../../../Global/functions/indexedDBs/Volume";
import Volumedbcom from "../../../../Global/functions/indexedDBs/Volume/Components/Getitems";
import { audioplay } from "../../../..";
import { useSelector } from "react-redux";
function Soundrow(props) {
  const { fab, setIsPlaying } = useContext(audioplay);
  const audioRef = useRef(new Audio(props.src));
  const runbg = useSelector((store) => store.runbg);
  audioRef.current.loop = true;

  useEffect(() => {
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden" && !runbg) {
        // eslint-disable-next-line
        audioRef.current.pause();
        console.log(`on ${document.visibilityState}`);
      } else {
        // console.log(document.visibilityState);
      }
    });
  }, [runbg]);

  useEffect(() => {
    const audio = audioRef.current;
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
    };
  });

  useEffect(() => {
    // eslint-disable-next-line
    if (fab.current) {
      // eslint-disable-next-line
      fab.current.addEventListener("click", () => {
        if (audioRef.current.paused) {
          volumedb.getItem(props.title, function (err, value) {
            audioRef.current.volume = value;
            if (err) console.error(err);
          });
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      });
    }
    // eslint-disable-next-line
  }, [fab, audioRef.current, props.title]);

  function slidersonchange(e) {
    audioRef.current.volume = e.target.value;
    volumedb.setItem(props.title, Number(e.target.value));
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
        <Volumedbcom.GetItem
          itemKey={props.title}
          render={({ inProgress, value, error }) => {
            return (
              <div>
                {error && <div>{error.message}</div>}
                {inProgress && (
                  <Sliders
                    defaultvalue={0}
                    max={1}
                    step={0.0000001}
                    onChange={slidersonchange}
                    style={{ width: "100%" }}
                  />
                )}
                {value >= 0 && (
                  <Sliders
                    defaultvalue={value}
                    max={1}
                    step={0.0000001}
                    onChange={slidersonchange}
                    style={{ width: "100%" }}
                  />
                )}
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}

Soundrow.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  Volume: PropTypes.func,
  src: PropTypes.string,
};

Soundrow.defaultProps = {
  icon: <i>music_note</i>,
  title: "audio",
};

export default Soundrow;
