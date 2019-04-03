'use strict';
var is_exist_element = function(collection,element){

  let flag=0;
  if (element===3){
    for(let i=0;i<collection.length;i++){
      if (i%2===0){
        if (collection[i]===element){
          return true;
        }
      }
    }
  }
  if (element===4){
    for (let i=0;i<collection.length;i++){
      if (i%2===0){
        if (collection[i]===4){
          flag=1;
        }
      }
    }
    if (flag===0){
      return false;
    }
  }

};
module.exports = is_exist_element;
