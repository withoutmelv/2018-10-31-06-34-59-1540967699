'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码

  function choose_a(element) {
    let flag=0;
    for (let i=0;i<collection_b.length;i++){
      if(element===collection_b[i]){
        flag=1;
      }
    }
    if (flag===0){
      return true;
    } else{
      return false;
    }
  }

  function choose_b(element) {
    let flag=0;
    for (let i=0;i<collection_a.length;i++){
      if(element===collection_a[i]){
        flag=1;
      }
    }
    if (flag===0){
      return true;
    } else{
      return false;
    }
  }

  let output_a=collection_a.filter(choose_a);
  let output_b=collection_b.filter(choose_b);
  for (let j=0;j<output_b.length;j++){
    output_a.push(output_b[j]);
  }
  return output_a;
}

module.exports = choose_no_common_elements;
