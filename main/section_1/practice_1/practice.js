function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  function choose(el) {
    for (let i=0;i<collection_b.length;i++){
      if (el===collection_b[i]){
        return el;
      }
    }
  }

  let output=collection_a.filter(choose);
  return output;
}

module.exports = collect_same_elements;
