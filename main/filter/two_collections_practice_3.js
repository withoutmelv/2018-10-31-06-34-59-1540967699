'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码

  function choose(element){
    for (let i=0;i<collection_b.length;i++){
      if (element%collection_b[i]===0){
        return true;
      }
    }
    return false;
  }

  let output=collection_a.filter(choose);
  return output;
}

module.exports = choose_divisible_integer;
