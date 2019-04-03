'use strict';
function one_add_next_multiply_three(collection){
  let output=[];
  for (let i=0;i<collection.length-1;i++){
    output.push((collection[i]+collection[i+1])*3);
  }
  return output;
}
module.exports = one_add_next_multiply_three;
