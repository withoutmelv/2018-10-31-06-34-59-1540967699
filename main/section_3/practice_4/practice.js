function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let out={};
  let output=[];
  for (let i=0;i<collection_a.length;i++) {
    if (collection_a[i].length===1){
      if (i===collection_a.length-1){
        if (!out.key){
          out.key=collection_a[i];
          out.count=1;
          output.push(out);
        } else if (out.key===collection_a[i]){
          out.count++;
          output.push(out);
        } else if (out.key!==collection_a[i]){
          output.push(out);
          out={};
          i--;
        }
      } else{
        if (!out.key){
          out.key=collection_a[i];
          out.count=1;
        } else if (out.key===collection_a[i]){
          out.count++;
        } else if (out.key!==collection_a[i]){
          output.push(out);
          out={};
          i--;
        }
      }
    } else {
      let key=collection_a[i].split("-")[0];
      let count=Number(collection_a[i].split("-")[1]);
      if (i===collection_a.length-1){
        if (!out.key){
          out.key=key;
          out.count=count;
          output.push(out);
        } else if (out.key===key){
          out.count+=count;
          output.push(out);
        } else if (out.key!==key){
          output.push(out);
          out={};
          i--;
        }
      } else{
        if (!out.key){
          out.key=key;
          out.count=count;
        } else if (out.key===key){
          out.count+=count;
        } else if (out.key!==key){
          output.push(out);
          out={};
          i--;
        }
      }
    }
  }

  for (let i=0;i<output.length;i++){
    for (let j=0;j<object_b.value.length;j++){
      if (output[i].key===object_b.value[j]){
        output[i].count-=Math.floor(output[i].count/3);
      }
    }
  }

  return output;
}

module.exports = create_updated_collection;
