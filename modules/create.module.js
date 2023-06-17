'use strict';

import { createAlert } from "../controller/alert.controller.js";
import { validateInput } from "../controller/form.controller.js";
import { randomSet } from "../controller/random-set.controller.js";
import { setCard } from "../controller/set-card.controller.js";
import { formCreate, inputDescription, inputImage, inputName } from "../main.js";
import { regex } from "../model/regex.model.js";

// debug
randomSet();
// debug

inputName.addEventListener('keyup', () => {
    validateInput(inputName, regex.rGname);
});

inputImage.addEventListener('keyup', () => {
    validateInput(inputImage, regex.rGImage);
});

formCreate.addEventListener('submit', (e) => {
    e.preventDefault();
    setCard(inputName.value, inputDescription.value, inputImage.value);
    createAlert('Ingresado con éxito, espere a ser redirigido.','success');

    // debug
    randomSet();
    // debug
});