
const formElem = document.querySelector('.login-form');

function onFormSubmit(e) {
    e.preventDefault();
    const data = {
        email: formElem.elements.email.value.trim(),
        password: formElem.elements.password.value.trim(),
    };

    if (data.email === '' || data.password === '') {
        alert('All form fields must be filled in')
    } else {
        console.log(data);
        formElem.reset();
    }
};
formElem.addEventListener('submit', onFormSubmit);