'use strict';
var number_map_to_word = function(collection){
  // function word(element) {
  //   return String.fromCharCode(96+element);
  // }
  let output=collection.map(x=>String.fromCharCode(96+x));
  return output;
};

module.exports = number_map_to_word;
