let welcomeMessage = document.getElementById('welcomeMessage');
let logOutBtn = document.getElementById('logOutBtn');

if (localStorage.getItem('userName') != null) {
    welcomeMessage.innerHTML = `Welcome ${localStorage.getItem('userName')}`
}


logOutBtn.addEventListener('click', function () {
    window.location.href = 'index.html';
    localStorage.removeItem('userName');
})