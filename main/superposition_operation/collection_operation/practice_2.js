'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let output=[];
  for (let i=0;i<collection.length;i++){
    if (collection[i]%2!==0){
      output.push(3*collection[i]+2);
    }
  }
  return output;
}

module.exports = hybrid_operation_to_uneven;

