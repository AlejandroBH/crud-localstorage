'use strict';

import { upCard } from "../controller/up-card.controller.js";
import { formCreate } from "../main.js";

upCard();

formCreate.addEventListener('submit', (e) =>{
    e.preventDefault();
    //TODO
    console.log('guardado');
});