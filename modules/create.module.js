'use strict';

import { setCard } from "../controller/set-card.controller.js";
import { formCreate, inputDescription, inputImage, inputName } from "../main.js";

// debug
inputName.value = 'Iphone 14';
inputDescription.value = 'Descripcion Iphone 14';
inputImage.value = 'https://www.digitaltrends.com/wp-content/uploads/2022/10/iPhone-14-Plus-Back-Logo-Bright.jpg';
// debug

formCreate.addEventListener('submit', (e) => {
    e.preventDefault();
    setCard(inputName.value, inputDescription.value, inputImage.value);
});