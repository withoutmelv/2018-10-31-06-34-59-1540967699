'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  let output=collection.reverse();
  let num=output.indexOf(element);
  return output.length-1-num;
}

module.exports = calculate_elements_sum;
