import React from 'react';
import Appbar from './components/Appbar/Appbar';
import Soundbox from './components/Soundbox/Soundbox';
import Soundrow from './components/Soundrow/Soundrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear , faPlay , faLeaf } from '@fortawesome/free-solid-svg-icons';
import FAB from './components/FAB/FAB';
import audioschema from "./json/audioschema.json";
import {audioschemaicon} from "./json/audioschemaicon";

const di = <div className="small-divider"></div>;

function Main() {

  const [play , setPlay] = React.useState(false)

  return (
    <>
     <Appbar/>
     <main className="responsive large-padding">
      <>
       <Soundbox icon={audioschemaicon.naturel.icon} title={audioschema.naturel.name}>
          <Soundrow 
            title={audioschema.naturel.row[1].name} 
            icon={audioschemaicon.naturel.row[1].icon} 
            audio={audioschema.naturel.row[1].audio} play={play}
          /> 
          <Soundrow 
            title={audioschema.naturel.row[2].name} 
            icon={audioschemaicon.naturel.row[2].icon} 
            audio={audioschema.naturel.row[2].audio} play={play}
          /> 
          <Soundrow 
            title={audioschema.naturel.row[3].name} 
            icon={audioschemaicon.naturel.row[3].icon} 
            audio={audioschema.naturel.row[3].audio} play={play}
          /> 
          <Soundrow 
            title={audioschema.naturel.row[4].name} 
            icon={audioschemaicon.naturel.row[4].icon} 
            audio={audioschema.naturel.row[4].audio} play={play}
          /> 
          <Soundrow 
            title={audioschema.naturel.row[5].name} 
            icon={audioschemaicon.naturel.row[5].icon} 
            audio={audioschema.naturel.row[5].audio} play={play}
          /> 
          <Soundrow 
            title={audioschema.naturel.row[6].name} 
            icon={audioschemaicon.naturel.row[6].icon} 
            audio={audioschema.naturel.row[6].audio} play={play}
          /> 
          <Soundrow 
            title={audioschema.naturel.row[7].name} 
            icon={audioschemaicon.naturel.row[7].icon} 
            audio={audioschema.naturel.row[7].audio} play={play}
          /> 
       </Soundbox>

       <Soundbox icon={audioschemaicon.travel.icon} title={audioschema.travel.name}>
          <Soundrow 
            title={audioschema.travel.row[1].name} 
            icon={audioschemaicon.travel.row[1].icon} 
            audio={audioschema.travel.row[1].audio} play={play}
          /> 
          <Soundrow 
            title={audioschema.travel.row[2].name} 
            icon={audioschemaicon.travel.row[2].icon} 
            audio={audioschema.travel.row[2].audio} play={play}
          /> 
          <Soundrow 
            title={audioschema.travel.row[3].name} 
            icon={audioschemaicon.travel.row[3].icon} 
            audio={audioschema.travel.row[3].audio} play={play}
          /> 
       </Soundbox>

       <Soundbox icon={audioschemaicon.interiors.icon} title={audioschema.interiors.name}>
          <Soundrow 
            title={audioschema.interiors.row[1].name} 
            icon={audioschemaicon.interiors.row[1].icon} 
            audio={audioschema.interiors.row[1].audio} play={play}
          /> 
          <Soundrow 
            title={audioschema.interiors.row[2].name} 
            icon={audioschemaicon.interiors.row[2].icon} 
            audio={audioschema.interiors.row[2].audio} play={play}
          /> 
       </Soundbox>

       <Soundbox icon={audioschemaicon.noice.icon} title={audioschema.noice.name}>
          <Soundrow 
            title={audioschema.noice.row[1].name} 
            icon={audioschemaicon.noice.row[1].icon} 
            audio={audioschema.noice.row[1].audio} play={play}
          /> 
          <Soundrow 
            title={audioschema.noice.row[2].name} 
            icon={audioschemaicon.noice.row[2].icon} 
            audio={audioschema.noice.row[2].audio} play={play}
          /> 
       </Soundbox>

       </>
       <FAB onClick={() => setPlay(true)} icon={<FontAwesomeIcon icon={faPlay} size='xl'/>}/>
     </main>
    </>
  )
}

export default Main