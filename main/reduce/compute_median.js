'use strict';

function compute_median(collection) {
  //在这里写入代码
  let letme=collection.sort((a,b)=>a-b);
  if (letme.length%2!==0){
    return letme[Math.floor(letme.length/2)];
  } else{
    return (letme[letme.length/2]+letme[letme.length/2-1])/2;
  }
}

module.exports = compute_median;


