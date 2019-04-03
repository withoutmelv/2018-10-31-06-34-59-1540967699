'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  let mid=0;
  if (collection.length%2!==0){
    mid=collection[Math.floor(collection.length/2)];
  } else{
    mid=(collection[collection.length/2]+collection[collection.length/2-1])/2;
  }
  mid=Math.ceil(mid);
  if (mid<=26){
    return String.fromCharCode(96+mid);
  } else{
    if (mid%26===0){
      return String.fromCharCode(96+Math.floor(mid/26))+String.fromCharCode(96+26);
    } else
    return String.fromCharCode(96+Math.floor(mid/26))+String.fromCharCode(96+mid%26);
  }
}

module.exports = median_to_letter;
