'use strict';
var rank_desc = function(collection){
  let output=collection.sort((a,b)=>a-b);
  return output;
};

module.exports = rank_desc;
