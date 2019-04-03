'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let output=[];
  let num=0;
  let m=1;
  if(number_a==number_b){
    if(number_a<=26){
      return [String.fromCharCode(96+number_a)];
    }else{
      let k=Math.floor(number_a/26);
      if(number_a%26!=0)
        return [String.fromCharCode(k+96)+String.fromCharCode(96+(number_a%26))];
      else
        return [String.fromCharCode(k+96)+String.fromCharCode(96+26)];
    }
  }else{
    if(number_a<number_b){
      if(number_a<=26&&number_b>26){
        for(let i=0;number_a<=26;i++){
          output[i]=String.fromCharCode(96+number_a);
          number_a++;
        }
        num=Math.floor(number_b/26);
        for(let i=1;m<=num;i++){
          if(m!=num){
            output.push(String.fromCharCode(96+m)+String.fromCharCode(96+i));
          }else if(m==num){
            if(i<=number_b%26){
              output.push(String.fromCharCode(96+m)+String.fromCharCode(96+i));
            }
          }
          if(i%26==0){
            m++;
            i=0;
          }
        }
      }else if(number_a<=26&&number_b<=26){
        for(let i=0;number_a<=number_b;i++){
          output[i]=String.fromCharCode(96+number_a);
          number_a++;
        }
      }
    }else if(number_a>number_b){
      if(number_b<=26&&number_a>26){
        for(let i=0;number_b<=26;i++){
          output[i]=String.fromCharCode(96+number_b);
          number_b++;
        }
        num=Math.floor(number_a/26);
        for(let i=1;m<=num;i++){
          if(m!=num){
            output.push(String.fromCharCode(96+m)+String.fromCharCode(96+i));
          }else{
            if(i<=number_a%26){
              output.push(String.fromCharCode(96+m)+String.fromCharCode(96+i));
            }
          }
          if(i%26==0){
            m++;
            i=0;
          }
        }
      }else if(number_a<=26&&number_b<=26){
        for(let i=0;number_b<=number_a;i++){
          output[i]=String.fromCharCode(96+number_b);
          number_b++;
        }
      }
      output.reverse();
    }
  }
  return output;
}

module.exports = get_letter_interval_2;

