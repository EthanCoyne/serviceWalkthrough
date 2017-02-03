var app = angular.module('myApp', []);

app.controller('GifController', function (GifGetter) {
  console.log('connected?');

GifGetter.randomGif();









}); // end app.controller
