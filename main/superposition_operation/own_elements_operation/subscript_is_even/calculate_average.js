'use strict';
var calculate_average = function(collection){
  let average=0;
  for (let i=0;i<collection.length;i++){
    if ((i+1)%2===0){
      average+=collection[i];
    }
  }
  return average*2/collection.length;
};
module.exports = calculate_average;
