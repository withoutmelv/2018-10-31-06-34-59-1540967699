'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  let sum=0;
  for (let i=0;i<collection.length;i++){
    sum+=3*collection[i]+2;
  }
  //let su=collection.reduce((acc,cur)=>acc+3*cur+2,3*collection[0]+2);
  return sum;
}

module.exports = hybrid_operation;

