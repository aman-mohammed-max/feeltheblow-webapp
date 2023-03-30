import React, { useContext } from "react";
import Appbar from "./components/Appbar/Appbar";
import "./Main.css";
import string from "../../Global/string.json";
import Soundbox from "./components/Soundbox/Soundbox";
import Soundrow from "./components/Soundrow/Soundrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import FAB from "./components/FAB/FAB";
import audioschema from "./json/audioschema";
import { Helmet } from "react-helmet";
import { audioplay, settingsopen } from "../..";

function Main() {
  const { open } = useContext(settingsopen);
  const { fab, isPlaying } = useContext(audioplay);

  const metaThemeColor = document.querySelector("meta[name=theme-color]");

  metaThemeColor.setAttribute(
    "content",
    window
      .getComputedStyle(document.body)
      .getPropertyValue("--primary-container")
  );

  console.log(isPlaying);

  return (
    <>
      <Helmet>
        <title>{string.appname}</title>
      </Helmet>
      <Appbar />
      <main
        style={{ position: open ? "fixed" : "" }}
        className="responsive large-padding select_disabled"
      >
        {audioschema.map((audioschemas, key) => {
          return (
            <Soundbox
              icon={audioschemas.icon}
              title={audioschemas.name}
              key={key}
            >
              {audioschemas.row.map((row, index) => {
                return (
                  <Soundrow
                    title={row.name}
                    icon={row.icon}
                    Volume={row.SVolume}
                    src={row.src}
                    key={index}
                  />
                );
              })}
            </Soundbox>
          );
        })}
        <FAB
          ref={fab}
          icon={
            <FontAwesomeIcon icon={!isPlaying ? faPlay : faPause} size="xl" />
          }
        />
      </main>
    </>
  );
}

export default Main;
