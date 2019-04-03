'use strict';
var calculate_median = function(collection){
  let output=[];

  for (let i=0;i<collection.length;i++){
    if ((i+1)%2===0){
      output.push(collection[i]);
    }
  }
  if (output.length%2!==0){
    return output[Math.floor(output.length/2)];
  } else{
    return (output[output.length/2]+output[output.length/2-1])/2;
  }
};
module.exports = calculate_median;
