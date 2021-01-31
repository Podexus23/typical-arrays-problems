
exports.min = function min (array) {
    if(Array.isArray(array) == false || array.length == 0) {return 0}

    return array.reduce((a,b) => {
      return (a<b)?a:b;
    });}


exports.max = function min (array) {
    if(Array.isArray(array) == false || array.length == 0) {return 0}
    return array.reduce((a,b) => {
      return (a>b)?a:b;
    });}


exports.avg = function avg (array) {
    if(Array.isArray(array) == false || array.length == 0) {return 0}
    return array.reduce((a,b)=> a + b)/array.length;
}
