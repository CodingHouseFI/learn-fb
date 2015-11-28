'use strict';

var myFirebaseRef = new Firebase("https://aoetnhuhaoeu.firebaseio.com");
var input = $("#item"), container = $("#items");

$("#add").click(function(event) {
  event.preventDefault();
  var newRef = myFirebaseRef.push(input.val());
  console.log(newRef.key());
});

// myFirebaseRef.on("value", function(snap) {
//   console.log("value", snap.val());
// });

myFirebaseRef.on("child_added", function(snap) {
  console.log("child_added", snap.val());
  container.append($("<div>", { data: { key: snap.key() }, text: snap.val() , class: "item" }));
});


container.on("click", ".item", function() {
  var $e = $(this);
  myFirebaseRef.child( $e.data("key") ).remove();
  // Remove the DOM
});
