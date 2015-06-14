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
                    $('.categories').masonry({
                        // options
                        itemSelector: '.module',
                        percentPosition: true,
                        columnWidth: '.grid-sizer',
                        isOriginLeft: true,
                        transitionDuration: '.5s',
                        isFitWidth: false,
                    });
             /*===============================================================================*/   
           
                    for(i=0 ; i< $('.module').length ;i++)
                    {
                            $('.module:eq('+i+')').addClass('active');
                    }
             /*===============================================================================*/          

                });	
            }
}})
