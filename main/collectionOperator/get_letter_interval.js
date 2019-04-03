'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let output=[];
  if(number_a==number_b){
    return [String.fromCharCode(96+number_a)];
  }else{
    if(number_a<number_b){
      for(let i=0;number_a<=number_b;i++){
        output[i]=String.fromCharCode(96+number_a);
        number_a++;
      }
    }else{
      for(let i=0;number_a>=number_b;i++){
        output[i]=String.fromCharCode(96+number_a);
        number_a--;
      }
    }
  }
  return output;
}

module.exports = get_letter_interval;
