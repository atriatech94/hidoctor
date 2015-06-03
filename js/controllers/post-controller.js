is_open = 0 ;
angular.module('pooshak')
.controller('PostController', function($scope,$rootScope) {


})
.directive('swSwipe', function (){
		return {
			link: function($scope) {
                $(document).ready(function () {
                         
                        var swiper2 = new Swiper( '.swiper1' , { slidesPerView: 'auto',  followFinger : false } );
                        swiper2.on('onTransitionStart', function () {
                            if(is_open==0){
                                $('.swipe_color').fadeIn(300);
                                is_open= 1;
                            }else{
                                $('.swipe_color').fadeOut(300);
                                is_open=0;
                            }
                            //console.log(is_open);
                        });


                      

                        $('body').delegate(".menu ","click",function(){
                            if(is_open==0){swiper2.slideNext();is_open=1;}else{swiper2.slidePrev();is_open=0;}
                        });
                    
             /*===============================================================================*/          

                });	
            }
}})
.directive('mnsView', function (){
    return {
			link: function($scope) {
                $(document).ready(function () {
                
                  
                    /*    var container = $('.product');
                        container.packery({ 
                            itemSelector: '.product_one',
                            gutter: 10 
                        });
                    */
                   
   

                });	
                    
            }
    }
});
