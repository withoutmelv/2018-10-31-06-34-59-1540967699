function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码

  function choose(el) {
    for (let i=0;i<collection_b.length;i++){
      for (let j=0;j<collection_b[i].length;j++){
        if (el===collection_b[i][j]){
          return el;
        }
      }
    }
  }

  let output=collection_a.filter(choose);
  return output;
}

module.exports = collect_same_elements;
