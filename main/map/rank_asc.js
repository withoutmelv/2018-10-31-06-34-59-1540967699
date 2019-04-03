'use strict';
var rank_asc = function(collection){
  let output=collection.sort(function (a,b) {
    return b-a;
  });
  return output;
};

module.exports = rank_asc;
