function count_same_elements(collection) {
  //在这里写入代码
  let output=[];
  let out={};
  for (let i=0;i<collection.length;i++){
    if(!out.key){
      out.key=collection[i];
      out.count=1;
    }else{
      if (out.key===collection[i]){
        out.count++;
      }
      if (out.key!==collection[i]||i===collection.length-1){
        output.push(out);
        out={};
        if (i!==collection.length-1)
        i--;
      }
    }
  }

  return output;
}

module.exports = count_same_elements;
