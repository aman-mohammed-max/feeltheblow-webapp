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

const Arain = new Audio(rain);
const Astorm = new Audio(storm);
const Awind = new Audio(wind);
const Awaves = new Audio(waves);
const Astream = new Audio(stream);
const Abirds = new Audio(birds);
const Asummer_night = new Audio(summer_night);
const Atrain = new Audio(train);
const Aboat = new Audio(boat);
const Acity = new Audio(city);
const Acoffee_shop = new Audio(coffee_shop);
const Afireplace = new Audio(fireplace);
const Apink_noise = new Audio(pink_noise);
const Awhite_noise = new Audio(white_noise);

Arain.volume = 0;
Astorm.volume = 0;
Awind.volume = 0;
Awaves.volume = 0;
Astream.volume = 0;
Abirds.volume = 0;
Asummer_night.volume = 0;
Atrain.volume = 0;
Aboat.volume = 0;
Acity.volume = 0;
Acoffee_shop.volume = 0;
Afireplace.volume = 0;
Apink_noise.volume = 0;
Awhite_noise.volume = 0;

Arain.loop = true;
Astorm.loop = true;
Awind.loop = true;
Awaves.loop = true;
Astream.loop = true;
Abirds.loop = true;
Asummer_night.loop = true;
Atrain.loop = true;
Aboat.loop = true;
Acity.loop = true;
Acoffee_shop.loop = true;
Afireplace.loop = true;
Apink_noise.loop = true;
Awhite_noise.loop = true;

export const audioschema = {
  naturel: {
    name: "natural",
    row: {
      1: {
        name: "rain",
        SVolume: function (e) {
          Arain.volume = e;
        },
      },
      2: {
        name: "storm",
        SVolume: function (e) {
          Astorm.volume = e;
        },
      },
      3: {
        name: "wind",
        SVolume: function (e) {
          Awind.volume = e;
        },
      },
      4: {
        name: "waves",
        SVolume: function (e) {
          Awaves.volume = e;
        },
      },
      5: {
        name: "stream",
        SVolume: function (e) {
          Astream.volume = e;
        },
      },
      6: {
        name: "birds",
        SVolume: function (e) {
          Abirds.volume = e;
        },
      },
      7: {
        name: "summer night",
        SVolume: function (e) {
          Asummer_night.volume = e;
        },
      },
    },
  },

  travel: {
    name: "travel",
    row: {
      1: {
        name: "train",
        SVolume: function (e) {
          Atrain.volume = e;
        },
      },
      2: {
        name: "boat",
        SVolume: function (e) {
          Aboat.volume = e;
        },
      },
      3: {
        name: "city",
        SVolume: function (e) {
          Acity.volume = e;
        },
      },
    },
  },

  interiors: {
    name: "interiors",
    row: {
      1: {
        name: "coffee shop",
        SVolume: function (e) {
          Acoffee_shop.volume = e;
        },
      },
      2: {
        name: "fireplace",
        SVolume: function (e) {
          Afireplace.volume = e;
        },
      },
    },
  },

  noice: {
    name: "noice",
    row: {
      1: {
        name: "pink noise",
        SVolume: function (e) {
          Apink_noise.volume = e;
        },
      },
      2: {
        name: "white noise",
        SVolume: function (e) {
          Awhite_noise.volume = e;
        },
      },
    },
  },

  AllSoundsPlay: function () {
    Arain.play();
    Astorm.play();
    Awind.play();
    Awaves.play();
    Astream.play();
    Abirds.play();
    Asummer_night.play();
    Atrain.play();
    Aboat.play();
    Acity.play();
    Acoffee_shop.play();
    Afireplace.play();
    Apink_noise.play();
    Awhite_noise.play();
  },

  AllSoundsPause: function () {
    Arain.pause();
    Astorm.pause();
    Awind.pause();
    Awaves.pause();
    Astream.pause();
    Abirds.pause();
    Asummer_night.pause();
    Atrain.pause();
    Aboat.pause();
    Acity.pause();
    Acoffee_shop.pause();
    Afireplace.pause();
    Apink_noise.pause();
    Awhite_noise.pause();
  },
  isPaused: function () {
    return Arain.paused;
  },
};
