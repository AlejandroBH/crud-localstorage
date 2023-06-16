'use strict';

import { createAlert } from "../controller/alert.controller.js";
import { getDataCard, setDataCard } from "../controller/up-card.controller.js";
import { formCreate } from "../main.js";

const dataCard = getDataCard();

formCreate.addEventListener('submit', (e) =>{
    e.preventDefault();
    setDataCard(dataCard);
    createAlert('Modificado con exito','success');
});