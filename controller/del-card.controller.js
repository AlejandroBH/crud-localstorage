'use strict';

import { cardArray, containerCards } from "../main.js";

// Eliminar card de Local Storage y DOM
export const delCard = (id, item) => {
    const delItem = item.parentElement.parentElement;
    cardArray.splice(id, 1);
    localStorage.setItem('cards', JSON.stringify(cardArray));
    containerCards.removeChild(delItem);
}