function collect_same_elements(collection_a, object_b) {
  //在这里写入代码

  function choose(el) {
    for (let i=0;i<object_b.value.length;i++){
      if (el===object_b.value[i]){
        return el;
      }
    }
  }

  let output=collection_a.filter(choose);
  return output;
}

module.exports = collect_same_elements;
