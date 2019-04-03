'use strict';
var even_asc_odd_desc = function(collection){
  let even=[];
  let odd=[];
  for (let i=0;i<collection.length;i++){
    if (collection[i]%2===0){
      even.push(collection[i]);
    } else{
      odd.push(collection[i]);
    }
  }

  even.sort(function (a,b) {
    return a-b;
  });

  odd.sort(function (a,b) {
    return b-a;
  });

  let output=even.concat(odd);
  return output;
};
module.exports = even_asc_odd_desc;
