angular.module('pooshak')
.factory('Rent', function($http){
return {
        all : function(){
            return $http.get("http://app.shoooma.com?callback1=rtyyttg46687hd")
        }
        
    }   
})
.factory('Sale', function($http){
    return {
        all : function(){
            return $http.get("http://app.shoooma.com?callback2=sdfsdfds432343")
        }
        
    }   
 
})
.factory('Special', function($http){
    return {
        all : function(){
            return $http.get("http://app.shoooma.com?callback3=sdrtee6QWfg343")
        }
        
    }   
 
})


  