 const elForm = document.querySelector('.form');
 const elNameInput = document.querySelector('.name__input');
 const elEmailInput = document.querySelector('.email__input');
 const elTelInput = document.querySelector('.tel__input');
 const elTextInput = document.querySelector('.text__input');
 const elFormName = document.querySelector('.form__name');
 const elFormTel = document.querySelector('.form__tel');
 const elFormEmail = document.querySelector('.form__email');
 const elFormMassage = document.querySelector('.form__massage');

 elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  const nameValue = elNameInput.value.trim();
  const telValue = elTelInput.value.trim();
  const emailValue = elEmailInput.value.trim();
  const textValue = elTextInput.value.trim();

  if(!nameValue && !telValue && !emailValue && !textValue) {
    elNameInput.textContent = "Enter your name"
    elNameInput.classList.add("invalid-name")
    elTelInput.textContent = "Enter your phone"
    elTelInput.classList.add("invalid-tel")
    elEmailInput.textContent = "Enter your email"
    elEmailInput.classList.add("invalid-email")
    elTelInput.textContent = "Enter your message"
    elTextInput.classList.add("invalid-message")
    elNameInput.classList.add("invalid-value")
    elTelInput.classList.add("invalid-value")
    elEmailInput.classList.add("invalid-value")
    elTextInput.classList.add("invalid-value")
    return
}

if(!nameValue) {
    elNameInput.textContent = "Enter your name"
    elNameInput.classList.add("invalid-name")
    elNameInput.classList.add("invalid-value")
    return
}
if (nameValue.length < 2) {
    elNameInput.textContent = "Enter your name"
    elNameInput.classList.add("invalid-name")
    elNameInput.classList.add("invalid-value")
    return
} else if (nameValue.length > 50) {
    elNameInput.textContent = "Enter your not exceed fifty letters"
    elNameInput.classList.add("invalid-name")
    elNameInput.classList.add("invalid-value")
    return
} else {
    elNameInput.style.display = "none";
    elNameInput.classList.add("valid-value")
}

if(!telValue) {
    elTelInput.textContent = "Enter your tel"
    elTelInput.classList.add("invalid-tel")
    elTelInput.classList.add("invalid-value")
    return
}

if (telValue.length < 13 && !telValue.startsWith("+998")) {
    elTelInput.textContent = "Enter your tel"
    elTelInput.classList.add("invalid-tel")
    elTelInput.classList.add("invalid-value")
    return
} else {
    elTelInput.style.display = "none";
    elTelInput.classList.add("valid-value")
}

if(!emailValue) {
    elEmailInput.textContent = "Enter your mail"
    elEmailInput.classList.add("invalid-email")
    elEmailInput.classList.add("invalid-value")
    return
}
if (emailValue !== emailValue.toLowerCase()) {
    elEmailInput.textContent = "Email must be lowercase";
    elEmailInput.classList.add("invalid-email");
    elEmailInput.classList.add("invalid-value");
    return;
} else if (!emailValue.endsWith("@gmail.com")  && !emailValue.endsWith("@mail.ru")) {
    elEmailInput.textContent = "Email must end with @gmail.com  or @mail.ru";
    elEmailInput.classList.add("invalid-email");
    elEmailInput.classList.add("invalid-value");
    return;
} else {
    elEmailInput.style.display = "none";
    elEmailInput.classList.add("valid-value");
}


if(!textValue) {
    elTelInput.textContent = "Enter your message"
    elTelInput.classList.add("invalid-message")
    elTextInput.classList.add("invalid-value")
}

if(textValue.length < 5) {
    elTextInput.textContent = "Message must be at least five letters"
    elTextInput.classList.add("invalid-message")
    elTextInput.classList.add("invalid-value")
    return
} else if(textValue.length > 50) {
    elTextInput.textContent = "Message must not exceed fifty letters"
    elTextInput.classList.add("invalid-message")
    elTextInput.classList.add("invalid-value")
    return
} else {
    elTextInput.style.display = "none"
    elTextInput.classList.add("valid-value")
}
 }) 
