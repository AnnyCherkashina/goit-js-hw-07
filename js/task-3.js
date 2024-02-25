// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input) підставляє його поточне значення в span#name - output як ім’я для привітання.Обов’язково очищай значення в інпуті по краях від пробілів.Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".


// На що буде звертати увагу ментор при перевірці:

// На елементі input#name - input прослуховується подія input
// Під час набору тексту в інпуті його поточне значення підставляється в span#name - output як ім’я для привітання
// Значення в інпуті очищене від пробілів по краях
// Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous"
const inputElem = document.querySelector('#name-input');
const nameElem = document.querySelector('#name-output');


function onInput(e) {
    const nameInput = e.target.value.trim();

    nameElem.textContent = nameInput || "Anonymous"
}

inputElem.addEventListener('input', onInput);