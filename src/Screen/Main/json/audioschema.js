import rain from '../../../Global/Audio/rain.mp3';
import storm from '../../../Global/Audio/storm.mp3';
import wind from '../../../Global/Audio/wind.mp3';
import waves from '../../../Global/Audio/waves.mp3';
import stream from '../../../Global/Audio/stream.mp3';
import birds from '../../../Global/Audio/birds.mp3';
import summer_night from '../../../Global/Audio/summer-night.mp3';
import train from '../../../Global/Audio/train.mp3';
import boat from '../../../Global/Audio/boat.mp3';
import city from '../../../Global/Audio/city.mp3';
import coffee_shop from '../../../Global/Audio/coffee-shop.mp3';
import fireplace from '../../../Global/Audio/fireplace.mp3';
import pink_noise from '../../../Global/Audio/pink-noise.mp3';
import white_noise from '../../../Global/Audio/white-noise.mp3';


export const audioschema = 

{
    naturel : { name: "naturel",
        row: {
            1 : {name: "rain" , audio : rain},
            2 : {name: "storm" , audio : storm},
            3 : {name: "wind" , audio : wind},
            4 : {name: "waves" , audio : waves},
            5 : {name: "stream" , audio : stream},
            6 : {name: "birds" , audio : birds},
            7 : {name: "summer night" , audio : summer_night}
        }
    },

    travel : { name: "travel",
        row: {
            1 : {name: "train" , audio : train},
            2 : {name: "boat" , audio : boat},
            3 : {name: "city" , audio : city}
        }
    },

    interiors : { name: "interiors",
        row: {
            1 : {name: "coffee shop" , audio : coffee_shop},
            2 : {name: "fireplace" , audio : fireplace}
        }
    },

    noice : { name: "noice",
        row: {
            1 : {name: "pink noise" , audio : pink_noise},
            2 : {name: "white noise" , audio : white_noise}
        }
    }
}
