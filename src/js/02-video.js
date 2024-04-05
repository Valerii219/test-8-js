import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const KEYFORVIDEO = 'videoplayer-current-time';
const player = new Player(iframe);
function local(data) {
  const time = data.seconds;
  localStorage.setItem(KEYFORVIDEO, JSON.stringify(time));
}

player.on('timeupdate', throttle(local, 1000));
const parse = JSON.parse(localStorage.getItem(KEYFORVIDEO)) || 0;
player.setCurrentTime(parse);
