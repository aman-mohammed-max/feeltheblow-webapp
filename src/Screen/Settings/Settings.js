import React, { useContext } from 'react';
import { settingsopen } from '../..';

export default function Settings() {
  const {open , setOpen} = useContext(settingsopen);

  return (
    <div className={open ? "active modal max" : "modal max"}>
    <h5>Bottom modal</h5>
    <div>Some text here</div>
    <nav className="right-align">
      <button onClick={() => {setOpen(!open)}} className="border">Cancel</button>
      <button>Confirm</button>
    </nav>
  </div>
  )
}
