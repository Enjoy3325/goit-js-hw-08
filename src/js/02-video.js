import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoIframe = document.querySelector('iframe');

const player = new Player(videoIframe);
// Добавить прослушиватель событий для указанного события.
//  Вызовет обратный вызов с одним параметром, который содержит данные для этого события.
player.on('play', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  // Сохраняй время воспроизведения в локальное хранилище
  localStorage.setItem('videoplayer-current-time', seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
