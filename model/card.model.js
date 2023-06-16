'use strict';

import { generateId } from "../controller/generate-id.controller.js";

export class Card {
    constructor(name,description,image){
        this.name = name,
        this.description = description,
        this.image = image,
        this.identify = generateId();
    }
}