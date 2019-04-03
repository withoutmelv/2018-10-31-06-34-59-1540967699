'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  let output=[];
  for (let i=0;i<collection.length;i++){
    if (collection[i]%2===0){
      let tmp=String.fromCharCode(96+collection[i]);
      output.push(tmp);
    }
  }

  return output
}

module.exports = even_to_letter;
