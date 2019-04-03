'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let output=[];
  number=number*10;
  interval=interval*10;
  output.push(number/10);
  while (number>0){
    number-=interval;
    output.push(number/10);
  }
  return output;
}

module.exports = spilt_to_zero;
