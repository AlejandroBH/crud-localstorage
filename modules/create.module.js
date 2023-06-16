'use strict';

import { randomSet } from "../controller/random-set.controller.js";
import { setCard } from "../controller/set-card.controller.js";
import { formCreate, inputDescription, inputImage, inputName } from "../main.js";

// debug
randomSet();
// debug

formCreate.addEventListener('submit', (e) => {
    e.preventDefault();
    setCard(inputName.value, inputDescription.value, inputImage.value);

    // debug
    randomSet();
    // debug
});