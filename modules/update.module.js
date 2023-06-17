'use strict';

import { createAlert } from "../controller/alert.controller.js";
import { validateInput } from "../controller/form.controller.js";
import { getDataCard, setDataCard } from "../controller/up-card.controller.js";
import { formCreate, inputImage, inputName } from "../main.js";
import { regex } from "../model/regex.model.js";

const dataCard = getDataCard();

inputName.addEventListener('keyup', () => {
    validateInput(inputName, regex.rGname);
});

inputImage.addEventListener('keyup', () => {
    validateInput(inputImage, regex.rGImage);
});

formCreate.addEventListener('submit', (e) =>{
    e.preventDefault();
    setDataCard(dataCard);
    createAlert('Modificado con éxito, espere a ser redirigido.','success');
});