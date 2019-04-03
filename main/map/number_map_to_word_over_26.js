'use strict';
var number_map_to_word_over_26 = function(collection){
  function change(element){
    if (element>26){
      let n=element/26;
      if (element%26!=0)
        return String.fromCharCode(96+n)+String.fromCharCode(96+element%26);
      else
        return String.fromCharCode(96+n)+String.fromCharCode(96+26);
    } else{
      return String.fromCharCode(96+element);
    }
  }

  let output=collection.map(change);
  return output;
};

module.exports = number_map_to_word_over_26;
