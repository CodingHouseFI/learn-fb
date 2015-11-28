'use strict';

// var myFirebaseRef = new Firebase("https://aoetnhuhaoeu.firebaseio.com");
// var input = $("#item"), container = $("#items");

// $("#add").click(function(event) {
//   event.preventDefault();
//   var newRef = myFirebaseRef.push(input.val());
//   console.log(newRef.key());
// });

// myFirebaseRef.on("value", function(snap) {
//   console.log("value", snap.val());
// });

// myFirebaseRef.on("child_added", function(snap) {
//   console.log("child_added", snap.val());
//   container.append($("<div>", { id: snap.key(), data: { key: snap.key() }, text: snap.val() , class: "item" }));
// });

// myFirebaseRef.on("child_removed", function(snap) {
//   console.log("child_removed", snap.key(), snap.val());
//   $(`#${snap.key()}`).remove();
// });


// container.on("click", ".item", function() {
//   var $e = $(this);
//   myFirebaseRef.child( $e.data("key") ).remove();
// });
//



var app = angular.module("sampleApp", ["firebase"]);

app.controller("MainCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://aoetnhuhaoeu.firebaseio.com");
  $scope.items = $firebaseArray(ref);
});


