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
import {
  openDB,
  set,
  get,
  remove,
  clear,
} from "../../../Global/Assets/localDB/LocalDB";

openDB();

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

// set(audioschema.naturel.row[1].name , 0 )
// set(audioschema.naturel.row[2].name , 0 )
// set(audioschema.naturel.row[3].name , 0 )
// set(audioschema.naturel.row[4].name , 0 )
// set(audioschema.naturel.row[5].name , 0 )
// set(audioschema.naturel.row[6].name , 0 )
// set(audioschema.naturel.row[7].name , 0 )
// set(audioschema.travel.row[1].name , 0 )
// set(audioschema.travel.row[2].name , 0 )
// set(audioschema.travel.row[3].name , 0 )
// set(audioschema.interiors.row[1].name , 0 )
// set(audioschema.interiors.row[2].name , 0 )
// set(audioschema.noice.row[1].name , 0 )
// set(audioschema.noice.row[2].name , 0 )

export const audioschema = {
  naturel: {
    name: "natural",
    row: {
      1: {
        name: "rain",
        SVolume: function (e) {
          var thisin = this;
          Arain.volume = e;
          set(thisin.title, e);
        },
      },
      2: {
        name: "storm",
        SVolume: function (e) {
          var thisin = this;
          Astorm.volume = e;
          set(thisin.title, e);
        },
      },
      3: {
        name: "wind",
        SVolume: function (e) {
          var thisin = this;
          Awind.volume = e;
          set(thisin.title, e);
        },
      },
      4: {
        name: "waves",
        SVolume: function (e) {
          var thisin = this;
          Awaves.volume = e;
          set(thisin.title, e);
        },
      },
      5: {
        name: "stream",
        SVolume: function (e) {
          var thisin = this;
          Astream.volume = e;
          set(thisin.title, e);
        },
      },
      6: {
        name: "birds",
        SVolume: function (e) {
          var thisin = this;
          Abirds.volume = e;
          set(thisin.title, e);
        },
      },
      7: {
        name: "summer night",
        SVolume: function (e) {
          var thisin = this;
          Asummer_night.volume = e;
          set(thisin.title, e);
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
          var thisin = this;
          Atrain.volume = e;
          set(thisin.title, e);
        },
      },
      2: {
        name: "boat",
        SVolume: function (e) {
          var thisin = this;
          Aboat.volume = e;
          set(thisin.title, e);
        },
      },
      3: {
        name: "city",
        SVolume: function (e) {
          var thisin = this;
          Acity.volume = e;
          set(thisin.title, e);
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
          var thisin = this;
          Acoffee_shop.volume = e;
          set(thisin.title, e);
        },
      },
      2: {
        name: "fireplace",
        SVolume: function (e) {
          var thisin = this;
          Afireplace.volume = e;
          set(thisin.title, e);
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
          var thisin = this;
          Apink_noise.volume = e;
          set(thisin.title, e);
        },
      },
      2: {
        name: "white noise",
        SVolume: function (e) {
          var thisin = this;
          Awhite_noise.volume = e;
          set(thisin.title, e);
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
  isPaused : function () {return Arain.paused}
};
