//o que são vetores ou arrays

// como declarar arrays
/*let array = ['string', 1, true];
console.log(array); */

// pode guardar vários tipos de dados
let array = ['String', 1, true, ['array1'],['array2'], ['array3'], ['array4']];
console.log(array);

// foreach
array.forEach(function(item, index){console.log(item, index)});