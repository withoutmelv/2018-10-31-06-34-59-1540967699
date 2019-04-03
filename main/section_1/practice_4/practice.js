function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  // function choose(acc,cur) {
  //   for (let i=0;i<object_b.value.length;i++){
  //     if (cur.key===object_b.value[i]){
  //       return acc.push(cur.key);
  //     }
  //   }
  // }
  //
  // let output=collection_a.reduce(choose,[]);
  let output=[];
    for (let i=0;i<collection_a.length;i++) {
      for (let j = 0; j < object_b.value.length; j++) {
        if (collection_a[i].key === object_b.value[j]) {
          output.push(collection_a[i].key);
        }
      }
    }
  return output;
 }

module.exports = collect_same_elements;
