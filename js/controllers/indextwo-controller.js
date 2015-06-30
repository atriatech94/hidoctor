is_open = 0 ;
var vers = 0 ;
angular.module('pooshak')
.controller('IndextwoController', function($scope,$rootScope,Category) {
            
})
.directive('indexDirtwo' , function (Category){
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
                  setTimeout(function(){$('.categories').attr('style',' ');},100);
             /*===============================================================================*/   
                    for(i=0 ; i< $('.module').length ;i++)
                    {
                            $('.module:eq('+i+')').addClass('active');
                    }
            /*===============================================================================*/ 
                    document.getElementById('swipe_color').style.display ="none";
                    $('.categories').masonry({
                                itemSelector: '.module',
                                percentPosition: true,
                                columnWidth: '.grid-sizer',
                                isOriginLeft: true,
                                transitionDuration: '.5s',
                                isFitWidth: false,
                        });
                   /* setTimeout(function(){
                        $('.categories').masonry({
                                itemSelector: '.module',
                                percentPosition: true,
                                columnWidth: '.grid-sizer',
                                isOriginLeft: true,
                                transitionDuration: '.5s',
                                isFitWidth: false,
                        });
                    },200);
                    */
                    $('.categories').append('<style>.categories{height : '+$(window).height()+'px !important}</style>');
                    document.getElementById('swipe_color').style.display = "none";
             /*===============================================================================*/ 

                });	
            }
}})
