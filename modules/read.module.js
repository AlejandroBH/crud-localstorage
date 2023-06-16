'use strict';

import { delCard } from "../controller/del-card.controller.js";
import { insertCards } from "../controller/get-card.controller.js";

insertCards();

const cardsBtnDelete = document.querySelectorAll('[data-btn-delete]');

cardsBtnDelete.forEach((item, id) => {
    item.addEventListener('click', () => {
        delCard(id);
    });
});