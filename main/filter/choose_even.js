'use strict';

function choose_even(collection) {

  //在这里写入代码
  function choose(element){
    if(element%2==0)
      return true;
    //return element%2==0;
  }

  let output=collection.filter(choose);
  return output;
}

module.exports = choose_even;
