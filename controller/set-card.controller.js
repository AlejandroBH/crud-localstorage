'use strict';

import { cardArray, containerCards } from "../main.js";
import { Card } from "../model/card.model.js";
import { getCard } from "./get-card.controller.js";

// Guarda dentro de un array de objetos en local storage
export const setCard = (name, description, image) => {
    const cardItem = new Card(name, description, image);
    cardArray.push(cardItem);
    localStorage.setItem('cards',JSON.stringify(cardArray));
}

// Crea y pinta la card en el DOM
export const createCard = (card) => {
    const cardInfo = getCard(card);
    containerCards.innerHTML += `
    <div class="card p-0" data-card-item>
        <img src="${cardInfo.image}" class="card-img-top card-img-aspect" alt="${cardInfo.name}">
        <div class="card-body">
            <h5 class="card-title">${cardInfo.name}</h5>
            <p class="card-text">${cardInfo.description}</p>
            <a href="#" class="btn btn-primary disabled" data-btn-update>Modificar</a>
            <button class="btn btn-danger" data-btn-delete>Eliminar</button>
        </div>
    </div>
    `;
}
