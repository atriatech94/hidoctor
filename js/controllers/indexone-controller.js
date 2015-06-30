is_open = 0 ;
var vers = 0 ;
angular.module('pooshak')
.controller('IndexoneController', function($scope,$rootScope,Category) {
            
})
.directive('indexDirone' , function (Category){
		return {
			link: function($rootScope) {
                document.getElementById('swipe_color').style.display = "none";
     
                $(document).ready(function () {
                  
                  
                    /*===============================================================================*/ 
                    $('.module').click(function(){
                        localStorage.setItem("name",$(this).children('p').text());
						localStorage.setItem("cat_id",$(this).attr('id').replace('p',''));
                        window.location.hash = '#/post/'+$(this).attr('id').replace('p','');
                        
                    });
                    /*===============================================================================*/       
                   
                    /*===============================================================================*/   
                    for(i=0 ; i< $('.module').length ;i++)
                    {
                            $('.module:eq('+i+')').addClass('active');
                    }
                    /*===============================================================================*/ 
                    $(window).on("resize",function(){
						$('.categories').append('<style>.categories{height : '+$(window).height()+'px !important}</style>');
					});
					$('.categories').append('<style>.categories{height : '+$(window).height()+'px !important}</style>');
                });	
            }
}})
