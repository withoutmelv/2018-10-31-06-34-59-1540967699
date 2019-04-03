'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  function choose(element){
    return element%3==0;
  }

  let output=collection.filter(choose);
  return output;
}

module.exports = choose_multiples_of_three;
