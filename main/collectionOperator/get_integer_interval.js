'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  let output=[];
  if(number_a==number_b){
    return [number_a];
  }else{
    if(number_a<number_b){
      for (let i=0;number_a<=number_b;number_a++){
        output[i]=number_a;
        i++;
      }
    }else{
      for (let i=0;number_a>=number_b;number_a--){
        output[i]=number_a;
        i++;
      }
    }
  }
  return output;
}

module.exports = get_integer_interval;

