import Player from '@vimeo/player';

const videoIframe = document.querySelector('iframe');

const player = new Player(videoIframe);

player.on('play', function () {
  console.log('played the video!');
});

// 1) Понять что от меня хотят
// 2) Скачать и подключить библиотеку
// 3) Подключил импорт
// 4) Вытянул с HTM в JS iframe тег
// 5) Прописать функцию с on('')
//
