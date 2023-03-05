import React, { useContext } from "react";
import styles from "./Settings.module.css";
import string from "./string.json";
import { settingsopen } from "../..";
import { Helmet } from "react-helmet";
import Appbar from "./components/Appbar/Appbar";
import Webcontroller from "./components/Webcontroller/Webcontroller";
import Aboutdev from "./components/Aboutdev/Aboutdev";
import Evolved from "./components/Evolved/Evolved";

export default function Settings() {
  const { open, setOpen } = useContext(settingsopen);

  function Title() {
    if (open) {
      const metaThemeColor = document.querySelector("meta[name=theme-color]");
      metaThemeColor.setAttribute(
        "content",
        window.getComputedStyle(document.body).getPropertyValue("--background")
      );
      return (
        <Helmet>
          <title>{string.title}</title>
        </Helmet>
      );
    }
  }

  window.addEventListener("popstate", (event) => {
    setOpen(!open);
  });

  return (
    <>
      <Title />
      <div
        className={
          open
            ? "active modal nonminwidth medium-padding max select_disabled"
            : "modal nonminwidth no-padding max select_disabled"
        }
      >
        <Appbar />
        <div className={`medium-padding ${styles.body}`}>
          <Webcontroller />
          <Aboutdev />
          <Evolved />
        </div>
      </div>
    </>
  );
}
