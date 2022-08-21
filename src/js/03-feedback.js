import throttle from 'lodash.throttle';

// var throttle = require('lodash.throttle');

// - Вынес имя Константы, избавился от магических строк
const STORAGE_KEY = 'feedback-form-state';
// Хранение в разных объектах
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
};
refs.form.addEventListener('sumbit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// - Делегирование. На форму повесил прослушивание input,
//  Сделал разными єлемментами под таргет
// ! - Сделать так чтобы сохраняло не только сообщение но и email и всё в одном объекте
refs.form.addEventListener('input', evt => {
  // console.log(evt.target.name);
  // console.log(evt.target.value);

  formData[evt.target.name] = evt.target.value;
  console.log(formData);
});
populateTextarea();
// - Останавливаем поведение по умолчанию
// - Убираем сообщение из хранилища
// - Очищаем форму e.target.reset

function onFormSubmit(e) {
  e.preventDefault();
  console.log('Отправляем форму');
  e.target.reset();
  // - Чистит из localStorage старое сообщение методом .removeItem и в ('ключ')
  localStorage.removeItem(STORAGE_KEY);
}

// - Получаем значение поля при вводе в textarea
// - Сохраняем его в хранилище
// - Добавить throttle

function onTextareaInput(e) {
  const message = e.target.value;
  // message является уже строка потому не нужно записывать через JSON ''
  localStorage.setItem(STORAGE_KEY, message);
}

// - Получаем значение из хранилища
// - Если там что-то было, обновлякм DOM
function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  //Если savedMessage есть то будет тру, то мы можем с ним работать,
  // там какие - то данные, в противном случае ничего не делаем
  if (savedMessage) {
    console.log(savedMessage);
    // - Берём refs.textarea и записываем ей .value
    refs.textarea.value = savedMessage;
  }
}
