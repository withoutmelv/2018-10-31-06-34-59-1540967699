'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let sum=0;
  for (let i=0;i<collection.length;i++){
    if (collection[i]%2!==0){
      sum+=collection[i];
    }
  }
  return sum*2/collection.length;
}

module.exports = average_uneven;
