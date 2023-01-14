import React from "react";
import Appbar from "./components/Appbar/Appbar";
import "./Main.css";
import Soundbox from "./components/Soundbox/Soundbox";
import Soundrow from "./components/Soundrow/Soundrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import FAB from "./components/FAB/FAB";
import { audioschema } from "./json/audioschema";
import { audioschemaicon } from "./json/audioschemaicon";
import { Helmet } from "react-helmet";
import Settings from "../Settings/Settings";

// const Di = () => <div className="small-divider"></div>;

function Main() {
  return (
    <>
      <Helmet>
        <title>feeltheblow</title>
      </Helmet>
      <Appbar />
      <main className="responsive large-padding">
        <Soundbox
          icon={audioschemaicon.naturel.icon}
          title={audioschema.naturel.name}
        >
          <Soundrow
            title={audioschema.naturel.row[1].name}
            icon={audioschemaicon.naturel.row[1].icon}
            audio={audioschema.naturel.row[1].audio}
          />
          <Soundrow
            title={audioschema.naturel.row[2].name}
            icon={audioschemaicon.naturel.row[2].icon}
            audio={audioschema.naturel.row[2].audio}
          />
          <Soundrow
            title={audioschema.naturel.row[3].name}
            icon={audioschemaicon.naturel.row[3].icon}
            audio={audioschema.naturel.row[3].audio}
          />
          <Soundrow
            title={audioschema.naturel.row[4].name}
            icon={audioschemaicon.naturel.row[4].icon}
            audio={audioschema.naturel.row[4].audio}
          />

          <Soundrow
            title={audioschema.naturel.row[5].name}
            icon={audioschemaicon.naturel.row[5].icon}
            audio={audioschema.naturel.row[5].audio}
          />
          <Soundrow
            title={audioschema.naturel.row[6].name}
            icon={audioschemaicon.naturel.row[6].icon}
            audio={audioschema.naturel.row[6].audio}
          />
          <Soundrow
            title={audioschema.naturel.row[7].name}
            icon={audioschemaicon.naturel.row[7].icon}
            audio={audioschema.naturel.row[7].audio}
          />
        </Soundbox>

        <Soundbox
          icon={audioschemaicon.travel.icon}
          title={audioschema.travel.name}
        >
          <Soundrow
            title={audioschema.travel.row[1].name}
            icon={audioschemaicon.travel.row[1].icon}
            audio={audioschema.travel.row[1].audio}
          />
          <Soundrow
            title={audioschema.travel.row[2].name}
            icon={audioschemaicon.travel.row[2].icon}
            audio={audioschema.travel.row[2].audio}
          />
          <Soundrow
            title={audioschema.travel.row[3].name}
            icon={audioschemaicon.travel.row[3].icon}
            audio={audioschema.travel.row[3].audio}
          />
        </Soundbox>

        <Soundbox
          icon={audioschemaicon.interiors.icon}
          title={audioschema.interiors.name}
        >
          <Soundrow
            title={audioschema.interiors.row[1].name}
            icon={audioschemaicon.interiors.row[1].icon}
            audio={audioschema.interiors.row[1].audio}
          />
          <Soundrow
            title={audioschema.interiors.row[2].name}
            icon={audioschemaicon.interiors.row[2].icon}
            audio={audioschema.interiors.row[2].audio}
          />
        </Soundbox>

        <Soundbox
          icon={audioschemaicon.noice.icon}
          title={audioschema.noice.name}
        >
          <Soundrow
            title={audioschema.noice.row[1].name}
            icon={audioschemaicon.noice.row[1].icon}
            audio={audioschema.noice.row[1].audio}
          />
          <Soundrow
            title={audioschema.noice.row[2].name}
            icon={audioschemaicon.noice.row[2].icon}
            audio={audioschema.noice.row[2].audio}
          />
        </Soundbox>

        <FAB icon={<FontAwesomeIcon icon={faPlay} size="xl" />} />
      </main>
    </>
  );
}

export default Main;
