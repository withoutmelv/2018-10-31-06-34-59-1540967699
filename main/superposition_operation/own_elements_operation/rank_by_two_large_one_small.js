'use strict';
function rank_by_two_large_one_small(collection){
  collection.sort((a,b)=>a-b);
  for (let i=0;i<collection.length;i+=3){
    if ((i+1)<collection.length&&(i+2)<collection.length){
      let tmp=collection[i];
      collection[i]=collection[i+1];
      collection[i+1]=collection[i+2];
      collection[i+2]=tmp;
    }
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
