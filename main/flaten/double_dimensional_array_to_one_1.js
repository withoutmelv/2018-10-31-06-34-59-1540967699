'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let output=[];
  for (let i=0;i<collection.length;i++){
    if (typeof (collection[i])==="object"){
      for (let k=0;k<collection[i].length;k++){
        output.push(collection[i][k]);
      }

    } else if (typeof (collection[i])==="number") {
      output.push(collection[i]);
    }
  }
  return output;
}

module.exports = double_to_one;
