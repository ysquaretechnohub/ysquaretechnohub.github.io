const navToggle = document.querySelector('.nav__toggle');
const emailField = document.querySelector('.email-field');
const emailError = document.querySelector('.email-error');
const submitButton = document.querySelector('.submit-button');
const messageField = document.querySelector('.message-field');
const messageError = document.querySelector('.message-error');
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i;

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

submitButton.addEventListener('click', () => {
  const emailValidityStatus = checkEmailValidity(emailField.value);
  let errorFieldList = [];
  if(!emailValidityStatus.isValid){
    addErrorMessageForField(emailValidityStatus.message, emailError);
    errorFieldList.push("email");
  } else {
    removeErrorMessageForField(emailError);
    errorFieldList = errorFieldList.filter(e => e === "email");
  }
  if(isEmptyString(messageField.value)){
    addErrorMessageForField("message field cannot be empty", messageError);
    errorFieldList.push("message");
  } else {
    removeErrorMessageForField(messageError);
    errorFieldList = errorFieldList.filter(e => e === "message");
  }
});

const checkEmailValidity = (email) => {
  if(!isEmptyString(email)){
    if(emailRegex.test(email)){
      return { isValid: true, message: ''};
    } else {
      return { isValid: false, message: 'Invalid email format'};
    }
  } else {
    return { isValid: false, message: 'Email cannot be empty'};
  }
};

const isEmptyString = (stringArg) => {
  return !(stringArg && stringArg.length > 0);
};

const addErrorMessageForField = (message, fieldName) => {
    fieldName.classList.add('error');
    fieldName.innerHTML = message;
};

const removeErrorMessageForField = (fieldName) => {
    fieldName.classList.remove('error');
    fieldName.innerHTML = '';
};
