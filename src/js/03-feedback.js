import throttle from 'lodash.throttle';

const FEEDBACK_FORM_KEY = 'feedback-form-state';

const refs = {
  formRef: document.querySelector('form'),
  emailRef: document.querySelector('input'),
  messageRef: document.querySelector('textarea'),
};

refs.formRef.addEventListener('submit', handleFormSubmit);
refs.formRef.addEventListener('input', throttle(handleFormInput, 500));

handleReloadPage();

function handleFormInput() {
  const inputInfoObject = {
    email: refs.emailRef.value,
    message: refs.messageRef.value,
  };

  localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(inputInfoObject));
}

function handleReloadPage() {
  const formStorage = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY));

  if (formStorage) {
    refs.emailRef.value = formStorage.email;
    refs.messageRef.value = formStorage.message;
  }
}

function handleFormSubmit(e) {
  e.preventDefault();

  if (refs.emailRef.value === '' || refs.messageRef.value === '') {
    return alert(`Please fill in all the fields!`);
  }

  console.log({
    email: refs.emailRef.value,
    message: refs.messageRef.value,
  });

  localStorage.removeItem(FEEDBACK_FORM_KEY);
  e.currentTarget.reset();
}
