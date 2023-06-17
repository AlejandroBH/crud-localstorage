'use strict';

import { submitBtn } from "../main.js";

const submitAlert = document.querySelector('[data-submit-alert]');

// Crea y muestra alerta personalizada por parametro, ademas bloquea el boton submit
export const createAlert = (info, style, lock) => {
    submitAlert.innerHTML = `${info}`;
    submitAlert.setAttribute('class', `alert mt-4 alert-${style}`);
    submitAlert.style.display = 'block';
    if (lock) {
        submitBtn.classList.add('disabled');
        setTimeout(()=>{
            submitAlert.style.display = 'none';
            location.href = '../';
        }, 1500);
    } else {
        setTimeout(()=>{
            submitAlert.style.display = 'none';
        }, 1500);
    }
}