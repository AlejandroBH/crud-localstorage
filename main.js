'use strict';

export const formCreate = document.querySelector('[data-form-create]');
export const inputName = document.querySelector('[data-input-name]');
export const inputImage = document.querySelector('[data-input-image]');
export const inputDescription = document.querySelector('[data-input-description]');
export const feedName = document.querySelector('[data-feedback-name]');
export const feedImage = document.querySelector('[data-feedback-image]');
export const feedDescription = document.querySelector('[data-feedback-description]');
export const submitAlert = document.querySelector('[data-submit-alert]');
export const cardArray = JSON.parse(localStorage.getItem('cards')) || [];

export const containerCards = document.querySelector('[data-container-cards]');