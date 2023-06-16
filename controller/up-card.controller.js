'use strict';

import { cardArray, inputDescription, inputImage, inputName } from "../main.js";

// Obtiene la informacion de la tarjeta a partir del parametro id mediante la url y retorna su respectivo objeto
export const getDataCard = () => {
    const valuesSearch = window.location.search;
    const urlParams = new URLSearchParams(valuesSearch);
    const idItem = urlParams.get('id');
    const result = cardArray.find( item => item.identify == idItem );
    const imageAside = document.querySelector('[data-aside-image]');
    imageAside.setAttribute('src', result.image);
    document.title += ` - Modificar a ${result.name}`;
    inputName.value = result.name;
    inputImage.value = result.image;
    inputDescription.value = result.description;
    return result;
}

// Modifica la informacion del objeto recibido y actualiza el Local Storage
export const setDataCard = (data) => {
    data.name = inputName.value.trim();
    data.image = inputImage.value.trim();
    data.description = inputDescription.value.trim();
    localStorage.setItem('cards', JSON.stringify(cardArray));
}