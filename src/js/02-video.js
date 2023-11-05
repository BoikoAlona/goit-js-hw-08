import Player from "@vimeo/player"
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedSettings = localStorage.getItem("videoplayer-current-time");

player.on('timeupdate', throttle((e) => {
    const stopTime = e.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(stopTime));
}, 1000)
);

player.setCurrentTime(savedSettings).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});




