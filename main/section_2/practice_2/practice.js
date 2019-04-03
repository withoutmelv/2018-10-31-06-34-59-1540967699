function count_same_elements(collection) {
  //在这里写入代码
  let output=[];
  let out={};
  for (let i=0;i<collection.length;i++){
    if (collection[i].length===1){
      if (i===collection.length-1) {
        if (!out.key){
          out.key=collection[i];
          out.count=1;
          output.push(out);
        } else if(out.key===collection[i]){
          out.count++;
          output.push(out);
        }else if(out.key!==collection[i]){
          output.push(out);
          out={};
          i--;
        }
      }
      else if (!out.key){
        out.key=collection[i];
        out.count=1;
      } else if(out.key===collection[i]){
        out.count++;
      }else if(out.key!==collection[i]){
        output.push(out);
        out={};
        i--;
      }
    } else {
      if (i===collection.length-1) {
        if (!out.key){
          out.key=collection[i].split("-")[0];
          out.count=Number(collection[i].split("-")[1]);
          output.push(out);
        } else if(out.key===collection[i].split("-")[0]){
          out.count+=Number(collection[i].split("-")[1]);
          output.push(out);
        }else if(out.key!==collection[i].split("-")[0]){
          output.push(out);
          out={};
          i--;
        }
      }else{
        if (!out.key){
          out.key=collection[i].split("-")[0];
          out.count=Number(collection[i].split("-")[1]);
        } else if (out.key===collection[i].split("-")[0]) {
          out.count+=Number(collection[i].split("-")[1]);
        }else if (out.key!==collection[i].split("-")[0]){
          output.push(out);
          out={};
          i--;
        }
      }


    }
  }
  return output;
}

module.exports = count_same_elements;
