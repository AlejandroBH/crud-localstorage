'use strict';

import { createCard } from "../controller/set-card.controller.js";
import { cardArray } from "../main.js";

for (let card in cardArray){
    createCard(card);
}