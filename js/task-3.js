const userNameInput = document.querySelector('.js-input');
const userNameSpan = document.querySelector('.js-script');

userNameInput.addEventListener('input', onUserNameInput);

function onUserNameInput() {
    const userName = userNameInput.value.trim() || 'Anonymous';

    userNameSpan.textContent = userName;
}

