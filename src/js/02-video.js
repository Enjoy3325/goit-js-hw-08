import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoIframe = document.querySelector('iframe');

const player = new Player(videoIframe);
// Добавить прослушиватель событий для указанного события.
//  Вызовет обратный вызов с одним параметром, который содержит данные для этого события.
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
  // Сохраняй время воспроизведения в локальное хранилище
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

const numberKey = Number(localStorage.getItem('videoplayer-current-time'));

if (numberKey) {
  player.setCurrentTime(numberKey);
}
console.log(numberKey);
