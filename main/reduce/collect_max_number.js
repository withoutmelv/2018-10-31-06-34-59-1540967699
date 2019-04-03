'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  // let max=0;
  // for (let i=0;i<collection.length;i++){
  //   if(max<collection[i]){
  //     max=collection[i];
  //   }
  // }
  // return max;
  function inc(a,b) {
    return a-b;
  }

  let output=collection.sort(inc);
  return output[output.length-1];
}

module.exports = collect_max_number;
