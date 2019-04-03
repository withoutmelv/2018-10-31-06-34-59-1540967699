'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let test=collection.split("->");
  test=test.map(Number);
  let output=test.sort((a,b)=>a-b);
  if(output.length%2!==0){
    return output[Math.floor(output.length/2)];
  }else{
    return (output[output.length/2]+output[output.length/2-1])/2;
  }
}

module.exports = compute_chain_median;
