'use strict';

function get_union(collection_a, collection_b) {
  let output=collection_a;
  let flag=0;
  for (let i=0;i<collection_b.length;i++){
    for (let j=0;j<collection_a.length;j++){
      if(collection_b[i]==collection_a[j]){
        flag=1;
      }
      if(flag==0&&j==collection_a.length-1){
        output.push(collection_b[i]);
      }
    }
    flag=0;
  }
  return output;
}

module.exports = get_union;

