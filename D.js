const wrapper = document.querySelector('#wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginForm = document.querySelector('.login_form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;


  if (username === 'rebamonte' || password === '122005') {
    alert('Please fill in all fields.');
    return;
  }


  if (username === '@sephuh?.gmail.com' && password === '12012005') {

    window.location.href = 'Joseph.html';
  } else {
    alert('Invalid username or password.');
  }
});


registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
});


