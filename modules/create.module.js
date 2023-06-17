'use strict';

import { createAlert } from "../controller/alert.controller.js";
import { validateInput } from "../controller/form.controller.js";
import { randomSet } from "../controller/random-set.controller.js";
import { setCard } from "../controller/set-card.controller.js";
import { formCreate, inputDescription, inputImage, inputName } from "../main.js";
import { regex } from "../model/regex.model.js";
const activeRandomSet = false;

let nameValid = false;
let imageValid = false;

randomSet(activeRandomSet);

inputName.addEventListener('keyup', () => {
    nameValid = validateInput(inputName, regex.rGname);
});

inputImage.addEventListener('keyup', () => {
    imageValid = validateInput(inputImage, regex.rGImage);
});

formCreate.addEventListener('submit', (e) => {
    e.preventDefault();

    nameValid = validateInput(inputName, regex.rGname);
    imageValid = validateInput(inputImage, regex.rGImage);

    if (nameValid && imageValid) {
        setCard(inputName.value, inputDescription.value, inputImage.value);
        createAlert('Ingresado con éxito, espere a ser redirigido.', 'success', true);
    } else {
        createAlert('Los datos ingresados no son validos.', 'danger', false);
    }

    randomSet(activeRandomSet);
});