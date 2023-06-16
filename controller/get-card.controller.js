'use strict';

// Obtiene y retorna card segun parametro desde local storage
export const getCard = (card) => {
    const getCards = JSON.parse(localStorage.getItem('cards'));
    return getCards[card];
}