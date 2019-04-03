'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let output={};
  let count=1;
  for (let i=0;i<collection.length;i++){
    for (let j=i+1;j<collection.length;j++){
      if(collection[i]===collection[j]){
        collection.splice(j,1);
        j--;
        count++;
        let n=collection[i].toString();
        output[n]=count;
      }
    }
    count=1;
  }
  return output;
}



module.exports = grouping_count;
