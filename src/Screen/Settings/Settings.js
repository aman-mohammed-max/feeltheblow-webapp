import React , { useContext } from "react";
import styles from "./Settings.module.css"
import { settingsopen } from "../..";
import { Helmet } from "react-helmet";
import Appbar from "./components/Appbar/Appbar";
import Webcontroller from "./components/Webcontroller/Webcontroller";
import Aboutdev from "./components/Aboutdev/Aboutdev";

export default function Settings() {
  const { open } = useContext(settingsopen);

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
        <div className={open ? "active modal nonminwidth medium-padding max select_disabled" : "modal nonminwidth no-padding max select_disabled"}>
        <Appbar/>
        <div className={`medium-padding ${styles.body}`}>
          <Webcontroller/>  
          <Aboutdev/>
        </div>
      </div>
    </>
  );
}
