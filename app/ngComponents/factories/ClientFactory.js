
// This factory will return a function whereby you may call it passing in the client _id
// and it will return the client object associated with that _id

function Client($http, $log, client_id){
  this.client = function(callback){
    $http.get('/api/client/' + client_id)
      .success(function(value){
        callback(value);
      });
  };
};

angular.factory('OneClientFactory', ['$http', '$log', function($http, $log){
  return function(client_id){
    return new Client($http, $log, client_id);
  };
}]);
