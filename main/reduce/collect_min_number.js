'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  function inc(a,b) {
    return a-b;
  }

  let output=collection.sort(inc);
  return output[0];

  // let min=100;
  // for (let i=0;i<collection.length;i++){
  //   if(min>collection[i]){
  //     min=collection[i];
  //   }
  // }
  //
  // return min;
}

module.exports = collect_min_number;

