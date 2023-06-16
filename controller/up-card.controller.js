'use strict';

import { cardArray, inputDescription, inputImage, inputName } from "../main.js";

export const upCard = () => {
    const valuesSearch = window.location.search;
    const urlParams = new URLSearchParams(valuesSearch);
    const idItem = urlParams.get('id');
    const result = cardArray.find( item => item.identify == idItem );
    inputName.value = result.name;
    inputImage.value = result.image;
    inputDescription.value = result.description;
    // TODO
}