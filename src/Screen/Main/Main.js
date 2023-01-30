import React, { useState } from "react";
import Appbar from "./components/Appbar/Appbar";
import "./Main.css";
import Soundbox from "./components/Soundbox/Soundbox";
import Soundrow from "./components/Soundrow/Soundrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import FAB from "./components/FAB/FAB";
import { audioschema } from "./json/audioschema";
import { audioschemaicon } from "./json/audioschemaicon";
import { Helmet } from "react-helmet";


function Main() {
  const [isPlaying, setIsPlaying] = useState(false);

  function playbutton() {
    if (audioschema.isPaused()) {
      console.log("Play");
      setIsPlaying(true);
      audioschema.AllSoundsPlay();
    } else {
      console.log("Pause");
      setIsPlaying(false);
      audioschema.AllSoundsPause();
    }
  }

  return (
    <>
      <Helmet>
        <title>feeltheblow</title>
      </Helmet>
      <Appbar />
      <main className="responsive large-padding select_disabled">
        <Soundbox
          icon={audioschemaicon.naturel.icon}
          title={audioschema.naturel.name}
        >
          <Soundrow
            title={audioschema.naturel.row[1].name}
            icon={audioschemaicon.naturel.row[1].icon}
            Volume={audioschema.naturel.row[1].SVolume}
          />
          <Soundrow
            title={audioschema.naturel.row[2].name}
            icon={audioschemaicon.naturel.row[2].icon}
            Volume={audioschema.naturel.row[2].SVolume}
          />
          <Soundrow
            title={audioschema.naturel.row[3].name}
            icon={audioschemaicon.naturel.row[3].icon}
            Volume={audioschema.naturel.row[3].SVolume}
          />
          <Soundrow
            title={audioschema.naturel.row[4].name}
            icon={audioschemaicon.naturel.row[4].icon}
            Volume={audioschema.naturel.row[4].SVolume}
          />

          <Soundrow
            title={audioschema.naturel.row[5].name}
            icon={audioschemaicon.naturel.row[5].icon}
            Volume={audioschema.naturel.row[5].SVolume}
          />
          <Soundrow
            title={audioschema.naturel.row[6].name}
            icon={audioschemaicon.naturel.row[6].icon}
            Volume={audioschema.naturel.row[6].SVolume}
          />
          <Soundrow
            title={audioschema.naturel.row[7].name}
            icon={audioschemaicon.naturel.row[7].icon}
            Volume={audioschema.naturel.row[7].SVolume}
          />
        </Soundbox>

        <Soundbox
          icon={audioschemaicon.travel.icon}
          title={audioschema.travel.name}
        >
          <Soundrow
            title={audioschema.travel.row[1].name}
            icon={audioschemaicon.travel.row[1].icon}
            Volume={audioschema.travel.row[1].SVolume}
          />
          <Soundrow
            title={audioschema.travel.row[2].name}
            icon={audioschemaicon.travel.row[2].icon}
            Volume={audioschema.travel.row[2].SVolume}
          />
          <Soundrow
            title={audioschema.travel.row[3].name}
            icon={audioschemaicon.travel.row[3].icon}
            Volume={audioschema.travel.row[3].SVolume}
          />
        </Soundbox>

        <Soundbox
          icon={audioschemaicon.interiors.icon}
          title={audioschema.interiors.name}
        >
          <Soundrow
            title={audioschema.interiors.row[1].name}
            icon={audioschemaicon.interiors.row[1].icon}
            Volume={audioschema.interiors.row[1].SVolume}
          />
          <Soundrow
            title={audioschema.interiors.row[2].name}
            icon={audioschemaicon.interiors.row[2].icon}
            Volume={audioschema.interiors.row[2].SVolume}
          />
        </Soundbox>

        <Soundbox
          icon={audioschemaicon.noice.icon}
          title={audioschema.noice.name}
        >
          <Soundrow
            title={audioschema.noice.row[1].name}
            icon={audioschemaicon.noice.row[1].icon}
            Volume={audioschema.noice.row[1].SVolume}
          />
          <Soundrow
            title={audioschema.noice.row[2].name}
            icon={audioschemaicon.noice.row[2].icon}
            Volume={audioschema.noice.row[2].SVolume}
          />
        </Soundbox>

        <FAB
          onClick={playbutton}
          icon={
            <FontAwesomeIcon icon={!isPlaying ? faPlay : faPause} size="xl" />
          }
        />
      </main>
    </>
  );
}

export default Main;
