'use strict';
var single_element = function(collection){
  let output=[];
  let out=[];
  for (let i=0;i<collection.length;i++){
    if ((i+1)%2===0){
      output.push(collection[i]);
    }
  }

  for (let i=0;i<output.length;i++){
    let temp=output;
    if (i===0){
      if (output[i]!==output[i+1]){
        out.push(output[i]);
      }
    } else if (i===output.length-1) {
      if (output[i]!==output[i-1]){
        out.push(output[i]);
      }
    }else{
      if (output[i]!==output[i-1]&&output[i]!==output[i+1]){
        out.push(output[i]);
      }
    }
  }
  return out;
};
module.exports = single_element;
