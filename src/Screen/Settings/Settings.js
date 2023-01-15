import React, { useContext } from "react";
import { settingsopen } from "../..";
import { Helmet } from "react-helmet";

export default function Settings() {
  const { open, setOpen } = useContext(settingsopen);

  function Title() {
    if (open) {
      return (
        <Helmet>
          <title>Settings</title>
        </Helmet>
      );
    }
  }

  return (
    <>
      <Title />
      <div className={open ? "active modal max select_disabled" : "modal max select_disabled"}>
        <h5>Bottom modal</h5>
        <div>Some text here</div>
        <nav className="right-align">
          <button onClick={() => setOpen(!open)} className="border">
            Cancel
          </button>
          <button>Confirm</button>
        </nav>
      </div>
    </>
  );
}
