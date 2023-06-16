'use strict';

import { generateId } from "../controller/generate-id.controller.js";

export class Card {
    constructor(name,description,image){
        this.name = name.trim(),
        this.description = description.trim(),
        this.image = image.trim(),
        this.identify = generateId();
    }
}