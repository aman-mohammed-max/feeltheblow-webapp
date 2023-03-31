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
import { useSelector } from "react-redux";

function Main() {
  const { open } = useContext(settingsopen);
  const { fab, isPlaying } = useContext(audioplay);
  const themeState = useSelector((store) => store.theme);

  const metaThemeColor = document.querySelector("meta[name=theme-color]");
  if (!open) {
    metaThemeColor.setAttribute(
      "content",
      window
        .getComputedStyle(document.body)
        .getPropertyValue(
          `--md-sys-color-primary-container-${themeState ? "dark" : "light"}`
        )
    );
  }

  function stutusbar(color) {
    if (open) {
      metaThemeColor.setAttribute(
        "content",
        window
          .getComputedStyle(document.body)
          .getPropertyValue("--md-sys-color-background-" + color)
      );
    }
  }

  switch (themeState) {
    case true:
      stutusbar("dark");
      document.body.className = "dark";
      break;
    case false:
      stutusbar("light");
      document.body.className = "light";
      break;
    default:
      document.body.className = "light";
  }

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
