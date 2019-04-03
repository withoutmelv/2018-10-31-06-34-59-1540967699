'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  let flag=0;
  if (collection_a.length===collection_b.length){
    for (let i=0;i<collection_b.length;i++){
      if(collection_a[i]!==collection_b[i]){
        flag=1;
      }
    }
    if (flag===0){
      return true;
    } else{
      return false;
    }
  } else{
    return false;
  }

}

module.exports = compare_collections;


