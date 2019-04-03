'use strict';

function collect_all_even(collection) {
  let output=[];
  let num=0;
  for(let i=0;i<collection.length;i++){
    if(collection[i]%2==0){
      output[num]=collection[i];
      num++;
    }
  }
  return output;
}

module.exports = collect_all_even;
