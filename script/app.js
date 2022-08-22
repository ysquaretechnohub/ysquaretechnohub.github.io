const navToggle = document.querySelector('.nav__toggle');
const emailField = document.querySelector('.email-field');
const emailError = document.querySelector('.email-error');
const submitButton = document.querySelector('.submit-button');
const openFloatingMenu = document.querySelector('.open-menu');
const closeFloatingMenu = document.querySelector('.closed-menu');
const messageField = document.querySelector('.message-field');
const messageError = document.querySelector('.message-error');
const messageSuccess = document.querySelector('.message-success');
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i;
const postRequestCredentials = {
  'method': 'POST',
  'mode': 'cors',
  'cache': 'no-cache',
  'credentials': 'same-origin',
  'headers': {
    'Content-Type': 'application/json'
  }
};

const isFabOpen = true;
// navToggle.addEventListener('click', () => {
//   document.body.classList.toggle('nav-open');
// });

submitButton && submitButton.addEventListener('click', () => {
  submitButton.disabled = true;
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
    addErrorMessageForField("Message cannot be empty", messageError);
    errorFieldList.push("message");
  } else {
    removeErrorMessageForField(messageError);
    errorFieldList = errorFieldList.filter(e => e === "message");
  }
  if(errorFieldList.length === 0){
    const data = {
      email: emailField.value,
      message: messageField.value
    };
    postData('https://blooming-wave-70183.herokuapp.com/sendemail', data)
  .then(data => {
    addSuccessMessageForField('Thank You For Your Interest, We will get in touch with you shortly', messageSuccess);
    setTimeout(() => {
      submitButton.disabled = false;
      removeSuccessMessageForField(messageSuccess);
    }, 5000);
  });
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


const addSuccessMessageForField = (message, fieldName) => {
  fieldName.classList.add('success');
  fieldName.innerHTML = message;
};

const removeSuccessMessageForField = (fieldName) => {
  fieldName.classList.remove('success');
  fieldName.innerHTML = '';
};


async function postData(url = '', data = {}) {
  const response = await fetch(url, 
  { 
    ... postRequestCredentials, 
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

openFloatingMenu.addEventListener('click', () => {
  openFloatingMenu.classList.add('fab-hide');
  closeFloatingMenu.classList.remove('fab-hide');
});


closeFloatingMenu.addEventListener('click', () => {
  closeFloatingMenu.classList.add('fab-hide');
  openFloatingMenu.classList.remove('fab-hide');
});