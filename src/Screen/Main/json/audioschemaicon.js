import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignCenter, faAlignLeft, faBarsStaggered, faCity, faCloudBolt , faCloudMoon, faCloudShowersHeavy , faCouch, faDove, faFireAlt, faLeaf , faMugHot, faPlaneDeparture, faShip, faTrain, faWater, faWaveSquare, faWind } from '@fortawesome/free-solid-svg-icons';

export const audioschemaicon = {

    naturel : { icon: <FontAwesomeIcon icon={faLeaf} size='xl'/>,
        row: {
            1 : {icon: <FontAwesomeIcon icon={faCloudShowersHeavy} size='xl'/>},
            2 : {icon: <FontAwesomeIcon icon={faCloudBolt} size='xl'/>},
            3 : {icon: <FontAwesomeIcon icon={faWind} size='xl'/>},
            4 : {icon: <FontAwesomeIcon icon={faWater} size='xl'/>},
            5 : {icon: <FontAwesomeIcon icon={faBarsStaggered} size='xl'/>},
            6 : {icon: <FontAwesomeIcon icon={faDove} size='xl'/>},
            7 : {icon: <FontAwesomeIcon icon={faCloudMoon} size='xl'/>},
        }
    },

    travel : { icon: <FontAwesomeIcon icon={faPlaneDeparture} size='xl'/>,
        row: {
            1 : {icon: <FontAwesomeIcon icon={faTrain} size='xl'/>},
            2 : {icon: <FontAwesomeIcon icon={faShip} size='xl'/>},
            3 : {icon: <FontAwesomeIcon icon={faCity} size='xl'/>}
        }
    },

    interiors : { icon: <FontAwesomeIcon icon={faCouch} size='xl'/>,
        row: {
            1 : {icon: <FontAwesomeIcon icon={faMugHot} size='xl'/>},
            2 : {icon: <FontAwesomeIcon icon={faFireAlt} size='xl'/>} 
        }
    },

    noice : { icon: <FontAwesomeIcon icon={faWaveSquare} size='xl'/>,
        row: {
            1 : {icon: <FontAwesomeIcon icon={faAlignCenter} size='xl'/>},
            2 : {icon: <FontAwesomeIcon icon={faAlignLeft} size='xl'/>}        
        }
    }

}
