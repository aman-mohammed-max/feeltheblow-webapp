import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Hello() {
  if (!indexedDB) {
    return (
      <div>
        <div
          className="fill middle-align center-align"
        >
          <div className="center-align">
            <FontAwesomeIcon icon={faCircleXmark} fontSize={"40px"} />
            <h5>You have no new messages</h5>
            <p>Click the button to start a conversation</p>
            <div className="space"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

function Firstload() {
  return (
    <div className="Firstload">
      <Hello />
    </div>
  );
}

export default Firstload;
