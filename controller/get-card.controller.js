'use strict';

import { cardArray } from "../main.js";
import { createCard } from "./set-card.controller.js";

// Obtiene y retorna card segun parametro desde local storage
export const getCard = (card) => {
    const getCards = JSON.parse(localStorage.getItem('cards'));
    return getCards[card];
}

// Recorre cardArray e inserta en el DOM
export const insertCards = () => {
    for (let card in cardArray){
        createCard(card);
    }
}