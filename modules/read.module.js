'use strict';

import { delCard } from "../controller/del-card.controller.js";
import { insertCards } from "../controller/get-card.controller.js";
import { cardArray, homeOff, homeOn } from "../main.js";

insertCards();

const cardsBtnDelete = document.querySelectorAll('[data-btn-delete]');

if (cardArray.length == 0) {
    homeOn.style.display = 'none';
    homeOff.style.display = 'block';
} else {
    homeOn.style.display = 'block';
    homeOff.style.display = 'none';
}

cardsBtnDelete.forEach((item, id) => {
    item.addEventListener('click', () => {
        delCard(id);
    });
});