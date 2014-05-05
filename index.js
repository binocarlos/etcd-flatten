module.exports = function (node){
  var ret = {}
  if(!node) return ret
  function flatten(d){
    if(d.dir){
      (d.nodes || []).forEach(flatten)
    }
    else{
      ret[d.key] = d.value
    } 
  }
  flatten(node)
  return ret
}