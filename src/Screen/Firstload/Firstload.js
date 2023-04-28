import React, { useEffect, useState } from "react";
import volumedb from "../../Global/functions/indexedDBs/Volume";
import audioschema from "../Main/json/audioschema";
import { feeltheblow_large } from "../../Global/Assets/images/feeltheblow.large";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Firstload.module.css";

function Firstload() {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);
  const firstur = useSelector((store) => store.firstur);
  const dispatch = useDispatch();

  useEffect(() => {
    if (firstur) {
      // eslint-disable-next-line
      audioschema.map((audioschemas) => {
        // eslint-disable-next-line
        audioschemas.row.map((row) => {
          volumedb.setItem(row.name, Math.random()).catch(function (err) {
            dispatch({ type: "FU" });
            console.log(err);
          });
        });
      });
    }
  }, []);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (evt) => {
    if (supportsPWA) {
      evt.preventDefault();
      if (!promptInstall) {
        return;
      }
      promptInstall.prompt();
    }
    dispatch({ type: "NOFU" });
  };

  function close() {
    dispatch({ type: "NOFU" });
  }

  if (firstur) {
    return (
      <article
        onClick={close}
        className={`${styles.main}  no-round large-padding`}
      >
        <article className="no-padding round s center middle">
          <img alt="" class="responsive " src={feeltheblow_large} />
          <div className={`${styles.card_bottom} padding`}>
            <p className={`${styles.p} small-margin`}>
              {supportsPWA
                ? "Install our website as an app on your device for a faster, more  reliable, and responsive experience. Simply click the install button below the website and add it to your home screen"
                : "Use our website for a great experience, or check if your device or browser supports installing it as an app for a faster, more reliable, and responsive experience."}

              {!supportsPWA && (
                <p className={`${styles.error_p} bold small-text`}>
                  Your browser doesn't support PWAs
                </p>
              )}
            </p>
            <nav>
              {supportsPWA && (
                <button onClick={close} className="round border">
                  Close
                </button>
              )}
              <button
                id="setup_button"
                aria-label="Install app"
                title="Install app"
                onClick={onClick}
                className={supportsPWA ? `round max` : `responsive round`}
              >
                {supportsPWA ? "install" : "Get start"}
              </button>
            </nav>
          </div>
        </article>
        {/* desktop */}
        <div class="modal no-round active top m l">
          <h5>Top Modal</h5>
          <div>Some text here</div>
          <nav class="right-align">
            <button class="border">Cancel</button>
            <button>Confirm</button>
          </nav>
        </div>
      </article>
    );
  }
}

export default Firstload;
