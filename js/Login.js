let emailLoginInput = document.getElementById('emailLoginInput');
let passwordLoginInput = document.getElementById('passwordLoginInput');
let loginBtn = document.getElementById('loginBtn');
let Message = document.getElementById('Message');
let userContainer = [];
if (localStorage.getItem('Users') != null) {
    userContainer = JSON.parse(localStorage.getItem('Users'));
}
function logIn() {
    if (inputsEmpty() == true) {
        printMessage('All Inputs Required', 'red')
    }
    else {
        if (checkEmailPassword() == true) {
            window.location.href = 'home.html';
        }
        else {
            printMessage('Email or Password is Not Correct', 'red');
        }
    }

}
function checkEmailPassword() {
    for (let i = 0; i < userContainer.length; i++) {
        if (userContainer[i].email == emailLoginInput.value && userContainer[i].passwrod == passwordLoginInput.value) {
            localStorage.setItem('userName', userContainer[i].userName)
            return true;
        }
    }
}
function printMessage(text, color) {
    Message.classList.replace('d-none', 'd-block');
    Message.style.color = color;

    Message.innerHTML = text;
}
function inputsEmpty() {
    if (emailLoginInput.value == '' || passwordLoginInput.value == '')
        return true;
    else
        return false;
}
loginBtn.addEventListener('click', logIn);