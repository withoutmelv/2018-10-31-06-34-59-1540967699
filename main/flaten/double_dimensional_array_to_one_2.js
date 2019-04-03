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
  for (let m=0;m<output.length;m++){
    for (let p=m+1;p<output.length;p++){
      if (output[m]===output[p]){
        output.splice(p,1);
        p--;
      }
    }
  }
  return output;
}

module.exports = double_to_one;
