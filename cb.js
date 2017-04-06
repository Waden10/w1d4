function findWaldo(arr, found) {
  arr.forEach(function(name, index) {
    if(name === 'Waldo') {
      found(index);
    }
  });
}

// function findWaldo(arr, found) {
//   for (var index = 0; index < arr.length; i++) {
//     if (arr[index] === "Waldo") {
//       found(index);   // execute callback
//     }
//   }
// }

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);