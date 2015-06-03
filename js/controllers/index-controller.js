is_open = 0 ;
angular.module('pooshak')
.controller('IndexController', function($scope,$rootScope) {


})
.directive('indexDir', function (){
		return {
			link: function($scope) {
                $(document).ready(function () {
                    
                   
             /*===============================================================================*/ 
                    $('.module').click(function(){
                        
                        window.location.href = $(this).attr('href');
                    });
         /*===============================================================================*/       
                    
             /*===============================================================================*/          

                });	
            }
}})
