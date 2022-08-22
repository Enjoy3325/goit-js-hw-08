import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  input: document.querySelector('input'),
};

const STORAGE_KEY = 'feedback-form-state';

document.addEventListener('DOMContentLoaded', setInputs);
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(setLocalStorage, 500));

let formDataParse = null;
setInputs();

const formData = {
  email: formDataParse?.email ? formDataParse.email : '',
  message: formDataParse?.message ? formDataParse.message : '',
};

function setLocalStorage(e) {
  let valueInput = e.target.value;
  let nameInput = e.target.name;

  formData[nameInput] = valueInput;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function setInputs() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  formDataParse = JSON.parse(savedMessage);

  if (formDataParse) {
    if (formDataParse.email) {
      refs.input.value = formDataParse.email;
    }
    if (formDataParse.message) {
      refs.textarea.value = formDataParse.message;
    }
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Заповніть всі поля, будь-ласка');
  }
  refs.form.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}
