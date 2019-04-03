'use strict';
var even_group_calculate_average = function(collection){
  let output_1=[];
  let output_2=[];
  let output_3=[];
  let ave_1=0;
  let ave_2=0;
  let ave_3=0;
  let count_1=0;
  let count_2=0;
  let count_3=0;
  let out=[];
  for (let i=0;i<collection.length;i++){
    if ((i+1)%2===0){
      if (collection[i]%2===0) {
        if (collection[i].toString().length === 1) {
          output_1.push(collection[i]);
          count_1++;
        }
        else if (collection[i].toString().length === 2) {
          output_2.push(collection[i]);
          count_2++;
        } else if (collection[i].toString().length === 3) {
          output_3.push(collection[i]);
          count_3++;
        }
      }
    }
  }

  if (count_1===0&&count_2===0&&count_3===0){
    return [0];
  }
  if (count_1!==0) {
    for (let i=0;i<output_1.length;i++) {
      ave_1+=output_1[i];
    }
    ave_1=ave_1/output_1.length;
    out.push(ave_1);
  }

  if (count_2!==0){
    for (let i=0;i<output_2.length;i++) {
      ave_2+=output_2[i];
    }
    ave_2=ave_2/output_2.length;
    out.push(ave_2);
  }

  if (count_3!==0){
    for (let i=0;i<output_3.length;i++) {
      ave_3+=output_3[i];
    }
    ave_3=ave_3/output_3.length;
    out.push(ave_3);
  }

  return out;
};
module.exports = even_group_calculate_average;
