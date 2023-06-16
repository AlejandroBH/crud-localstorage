'use strict';

import { cardArray, containerCards } from "../main.js";

// Eliminar card de Local Storage y DOM
export const delCard = (id) => {
    const dataItem = document.querySelectorAll('[data-card-item]');
    cardArray.splice(id, 1);
    localStorage.setItem('cards', JSON.stringify(cardArray));
    containerCards.removeChild(dataItem[id]);
    location.reload();
}