'use strict';

// Genera codigo de identificacion unico
export const generateId = () => {
    return Math.random().toString(30).substring(2);
}