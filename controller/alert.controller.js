'use strict';

const submitAlert = document.querySelector('[data-submit-alert]');

export const createAlert = (info, style) => {
    submitAlert.innerHTML = `${info}`;
    submitAlert.setAttribute('class', `alert mt-4 alert-${style}`);
    submitAlert.style.display = 'block';

    setTimeout(()=>{
        submitAlert.style.display = 'none';
    },1000)
}