'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let output=[];
  let num=0;
  if(number_a==number_b){
    if(number_a%2==0){
      return [number_a];
    }else{
      return [];
    }
  }else{
    if(number_a<number_b){
      num=number_a;
      if(num%2!=0){
        num++;
      }
      for (let j=0;num<=number_b;num+=2){
        output[j]=num;
        j++;
      }
    }else{
      num=number_a;
      if(num%2!=0){
        num--;
      }
      for (let j=0;num>=number_b;num-=2){
        output[j]=num;
        j++
      }
    }
  }
  return output;
}

module.exports = get_integer_interval_2;
