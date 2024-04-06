const feedback = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const {email, message} = feedback.elements;

feedback.addEventListener('submit', onSubmit);
feedback.addEventListener('input',onInput)

local ();

function onSubmit(e){
e.preventDefault();
const emailValue = email.value;
const messageValue = message.value;
if(emailValue === "" || messageValue ===""){
  return  alert("Please fill all fields ")
}
e.target.reset();
localStorage.removeItem(localStorageKey);
}

function local (){
let parsedValue = JSON.parse(localStorage.getItem(localStorageKey)) || "";
if(parsedValue){
    email.value = parsedValue.email || "";
  message.value = parsedValue.message || "";
}
}

function onInput(){
  const  formData = {email:email.value, message:message.value};
  console.log(formData);
localStorage.setItem(localStorageKey, JSON.stringify(formData));
};
