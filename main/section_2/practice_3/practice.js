function count_same_elements(collection) {
  let out={};
  let output=[];
  for (let i=0;i<collection.length;i++){
    if (collection[i].length===1){
      if (collection.length-1===i){
        if (!out.name){
          out.name=collection[i];
          out.summary=1;
          output.push(out);
        } else if (out.name===collection[i]){
          out.summary++;
          output.push(out);
        } else if (out.name!==collection[i]){
          output.push(out);
          out={};
          i--;
        }
      } else{
        if (!out.name){
          out.name=collection[i];
          out.summary=1;
        } else if (out.name===collection[i]){
          out.summary++;
        } else if (out.name!==collection[i]){
          output.push(out);
          out={};
          i--;
        }
      }
    } else{
      let name=collection[i][0];
      let sum=Number(collection[i].replace(/[^0-9]/ig,""));
      if (collection.length-1===i){
        if (!out.name){
          out.name=name;
          out.summary=sum;
          output.push(out);
        } else if (out.name===name){
          out.summary+=sum;
          output.push(out);
        } else if (out.name!==name){
          output.push(out);
          out={};
          i--;
        }
      } else{
        if (!out.name){
          out.name=name;
          out.summary=sum;
        } else if (out.name===name){
          out.summary+=sum;
        } else if (out.name!==name){
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
