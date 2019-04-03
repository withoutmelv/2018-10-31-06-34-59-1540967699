'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  let flag=0;
  function choose(element){
    for (let i=0;i<collection_b.length;i++){
      if (element===collection_b[i]){
        return true;
      }
    }
    return false;
  }
  let output=collection_a.filter(choose);
  return output;
}

module.exports = choose_common_elements;
