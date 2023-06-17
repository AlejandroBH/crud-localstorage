'use strict';

import { createAlert } from "../controller/alert.controller.js";
import { validateInput } from "../controller/form.controller.js";
import { getDataCard, setDataCard } from "../controller/up-card.controller.js";
import { formCreate, inputImage, inputName } from "../main.js";
import { regex } from "../model/regex.model.js";

let nameValid = false;
let imageValid = false;

const dataCard = getDataCard();

inputName.addEventListener('keyup', () => {
    nameValid = validateInput(inputName, regex.rGname);
});

inputImage.addEventListener('keyup', () => {
    imageValid = validateInput(inputImage, regex.rGImage);
});

formCreate.addEventListener('submit', (e) =>{
    e.preventDefault();

    nameValid = validateInput(inputName, regex.rGname);
    imageValid = validateInput(inputImage, regex.rGImage);

    if (nameValid && imageValid) {
        setDataCard(dataCard);
        createAlert('Modificado con éxito, espere a ser redirigido.', 'success', true);
    } else {
        createAlert('Los datos ingresados no son validos.', 'danger', false);
    }
});