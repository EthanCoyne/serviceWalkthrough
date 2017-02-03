app.service('GifGetter', function($http) {
  var publicAPIkey = 'dc6zaTOxFJmzC';
  var giphyUrl = 'http://api.giphy.com/v1/gifs/';

  //  get random gif function:
  this.randomGif = function () {
    return $http({
      type: "GET",
      url: giphyUrl + 'random?api_key=' + publicAPIkey
    }).then(function(response) {
      // console.log(response);
      return response.data;
    }).catch(function(error) {
      console.log('error: ', error);
    });

  }


  //searched gif function
  this.searchGif = function (query) {
    return $http({
      type: "GET",
      url: giphyUrl + 'search?q=' + query + '&api_key=' + publicAPIkey
    }).then(function(response) {
      // console.log(response);
      return response.data;
    }).catch(function(error) {
      console.log('error: ', error);
    });

  }

});// end app.service
