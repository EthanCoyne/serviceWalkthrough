var app = angular.module('myApp', []);

app.controller('GifController', function (GifGetter) {
  console.log('connected?');

var vm = this;



GifGetter.randomGif().then(function(res) {
  console.log('from the controller: ', res);
  vm.randomGifUrl = res.data.image_url;
});

// console.log('test:', GifGetter.randomGif());


//searching for gifs
vm.searchGif = function(searchQuery) {
GifGetter.searchGif(searchQuery).then(function(res) {
  vm.searchGifUrl = res.data;
});
}







}); // end app.controller
