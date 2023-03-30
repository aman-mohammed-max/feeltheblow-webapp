import rain from "../../../Global/Audio/rain.mp3";
import storm from "../../../Global/Audio/storm.mp3";
import wind from "../../../Global/Audio/wind.mp3";
import waves from "../../../Global/Audio/waves.mp3";
import stream from "../../../Global/Audio/stream.mp3";
import birds from "../../../Global/Audio/birds.mp3";
import summer_night from "../../../Global/Audio/summer-night.mp3";
import train from "../../../Global/Audio/train.mp3";
import boat from "../../../Global/Audio/boat.mp3";
import city from "../../../Global/Audio/city.mp3";
import coffee_shop from "../../../Global/Audio/coffee-shop.mp3";
import fireplace from "../../../Global/Audio/fireplace.mp3";
import pink_noise from "../../../Global/Audio/pink-noise.mp3";
import white_noise from "../../../Global/Audio/white-noise.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignCenter,
  faAlignLeft,
  faBarsStaggered,
  faCity,
  faCloudBolt,
  faCloudMoon,
  faCloudShowersHeavy,
  faCouch,
  faDove,
  faFireAlt,
  faLeaf,
  faMugHot,
  faPlaneDeparture,
  faShip,
  faTrain,
  faWater,
  faWaveSquare,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

const audios = [
  {
    name: "natural",
    icon: <FontAwesomeIcon icon={faLeaf} size="xl" />,
    row: [
      {
        name: "rain",
        src: rain,
        icon: <FontAwesomeIcon icon={faCloudShowersHeavy} size="xl" />,
      },
      {
        name: "storm",
        src: storm,
        icon: <FontAwesomeIcon icon={faCloudBolt} size="xl" />,
      },
      {
        name: "wind",
        src: wind,
        icon: <FontAwesomeIcon icon={faWind} size="xl" />,
      },
      {
        name: "waves",
        src: waves,
        icon: <FontAwesomeIcon icon={faWater} size="xl" />,
      },
      {
        name: "stream",
        src: stream,
        icon: <FontAwesomeIcon icon={faBarsStaggered} size="xl" />,
      },
      {
        name: "birds",
        src: birds,
        icon: <FontAwesomeIcon icon={faDove} size="xl" />,
      },
      {
        name: "summer night",
        src: summer_night,
        icon: <FontAwesomeIcon icon={faCloudMoon} size="xl" />,
      },
    ],
  },

  {
    name: "travel",
    icon: <FontAwesomeIcon icon={faPlaneDeparture} size="xl" />,
    row: [
      {
        name: "train",
        src: train,
        icon: <FontAwesomeIcon icon={faTrain} size="xl" />,
      },
      {
        name: "boat",
        src: boat,
        icon: <FontAwesomeIcon icon={faShip} size="xl" />,
      },
      {
        name: "city",
        src: city,
        icon: <FontAwesomeIcon icon={faCity} size="xl" />,
      },
    ],
  },

  {
    name: "interiors",
    icon: <FontAwesomeIcon icon={faCouch} size="xl" />,
    row: [
      {
        name: "coffee shop",
        src: coffee_shop,
        icon: <FontAwesomeIcon icon={faMugHot} size="xl" />,
      },
      {
        name: "fireplace",
        src: fireplace,
        icon: <FontAwesomeIcon icon={faFireAlt} size="xl" />,
      },
    ],
  },

  {
    name: "noice",
    icon: <FontAwesomeIcon icon={faWaveSquare} size="xl" />,
    row: [
      {
        name: "pink noise",
        src: pink_noise,
        icon: <FontAwesomeIcon icon={faAlignCenter} size="xl" />,
      },
      {
        name: "white noise",
        src: white_noise,
        icon: <FontAwesomeIcon icon={faAlignLeft} size="xl" />,
      },
    ],
  },
];

export default audios;
