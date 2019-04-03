'use strict';

function average_to_letter(collection) {

  let average=Math.ceil((collection.reduce((acc,cur)=>acc+cur))/collection.length);
  return String.fromCharCode(96+average);

}

module.exports = average_to_letter;

