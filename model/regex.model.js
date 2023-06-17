'use strict';

export const regex = {
    rGname: /^[a-zA-Z 0-9\ ]{5,20}$/,
    rGImage: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
    rGdescription: /^[a-zA-Z 0-9\., ]{5,500}$/,
}