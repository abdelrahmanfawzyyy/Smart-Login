let userNameInput = document.getElementById('userNameInput');
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
let signUpBtn = document.getElementById('signUpBtn');
let message = document.getElementById('message');
let userContainer = [];

if (localStorage.getItem('Users') != null) {
    userContainer = JSON.parse(localStorage.getItem('Users'));
}


function signUp() {
    let data = {
        userName: userNameInput.value,
        email: emailInput.value,
        passwrod: passwordInput.value
    }
    if (inputsEmpty() == true) {

        alertmessage('All Inputs Are Required', 'red');
    }
    else {
        if (checkEmailExistence() == true) {
            alertmessage('Email Already Exist', 'red');
        }
        else {
            userContainer.push(data);
            localStorage.setItem('Users', JSON.stringify(userContainer));
            alertmessage('Success', 'green');

            clearForm();
        }
    }
}
function alertmessage(text, color) {
    message.classList.replace('d-none', 'd-block');
    message.style.color = color;

    message.innerHTML = text;
}
function clearForm() {
    userNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}
function inputsEmpty() {
    if (userNameInput.value == '' || emailInput.value == '' || passwordInput.value == '')
        return true;
    else
        return false;
}
function checkEmailExistence() {
    for (let i = 0; i < userContainer.length; i++) {
        if (userContainer[i].email == emailInput.value)
            return true;
    }
}
signUpBtn.addEventListener('click', signUp)