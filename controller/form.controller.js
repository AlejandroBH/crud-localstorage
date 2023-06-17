'use strict';

// Valida informacion de input segun expresion regular
export const validateInput = (input, regex) => {
    const expression = regex;
    if (expression.test(input.value)) {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        return true;
    } else {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        return false;
    }
}