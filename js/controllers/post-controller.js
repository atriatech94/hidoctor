is_open = 0 ;
angular.module('pooshak')
.controller('PostController', function($scope,$rootScope) {


})
.directive('swSwipe', function (){
		return {
			link: function($scope) {
                $(document).ready(function () {
          /*============================================================================================================*/                
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
           /*================================================================================================================*/          

                });	
            }
}})
.directive('mnsView', function (){
    return {
			link: function($scope) {
                $(document).ready(function () {
                
                  
                   /*===============================================================================*/    
                  setTimeout(function(){
                        $('.product').masonry({
                            // options
                            itemSelector: '.product_one',
                            percentPosition: false,
                            columnWidth: '.grid-sizer',
                            isOriginLeft: true,
                            transitionDuration: '.5s',
                            isFitWidth: false,
                        });
                    },150);
                    
                    
             /*======================================fancy=========================================*/  
                    
                $('.product').delegate('.product_one','click',function(){
                    var data  = '<div class="post_detail">';/*==== start post detail  =====*/
                    data = '<div class="controll_btn"><span class="fav_btn"></span><span class="back_btn"></span></div>';
                    data += '<div class="img_tt"><img class="post_image"  src="img-test/post_detail.jpg" ><div class="title"><span>میکاپ صورتی برای دختران نوجوان </span></div></div>';/*==== post_image + title  =====*/
                    data += '<div class="conatin">';/*====  post text =====*/
                    data += '<p>اگر هنوز  در سنین نوجوانی هستید و تازه دبیرستان را به پایان رساندید می توانید در تابستان قیافه خود را کمی عوض کنید  و با یک میکاپ ملایم صورتی خودتان را زیبا کنید</p>';/*====   =====*/
                    data += '<h3>مرحله اول</h3>';/*==== p  =====*/
                    data += '<p>برای شروع می توانید از کرم صورت رنگ دار گلاسیر استفاده کنید که پوست را شاداب می کند و با رنگ کمی که دارد چهره را شفاف نشان می دهد بدون اینکه آن را آرایش شده به نظر برساند. کار را از مرکز صورت شروع کنید و تا کناره ها و پایین گردن پیش بروید. می توانید پخش کردن کرم پودر را اول با یک ابر یا قلم آرایشی شروع کنید سپس با انگشتانتان ادامه دهید. </p> ';/*====   =====*/
                    data += '<div class="img"> <img src="img-test/1.jpg"></div>';/*====  img =====*/
                    data += '<h3>مرحله اول</h3>';/*==== p  =====*/
                    data += '<p>برای شروع می توانید از کرم صورت رنگ دار گلاسیر استفاده کنید که پوست را شاداب می کند و با رنگ کمی که دارد چهره را شفاف نشان می دهد بدون اینکه آن را آرایش شده به نظر برساند. کار را از مرکز صورت شروع کنید و تا کناره ها و پایین گردن پیش بروید. می توانید پخش کردن کرم پودر را اول با یک ابر یا قلم آرایشی شروع کنید سپس با انگشتانتان ادامه دهید. </p> ';/*====   =====*/
                    data += '<div class="img"> <img src="img-test/1.jpg"></div>';/*==== img  =====*/
                    data += ' <div class="time">تاریخ انتشار : 27 اردیبهشت 1394<div>';/*==== post date  =====*/
                    data += '</div>';/*====  End post detail =====*/
                       
                    $.fancybox.open(data ,{
                                        openEffect : 'elastic',
                                        openSpeed  : 250,
                                        closeEffect : 'elastic',
                                        closeSpeed  : 350,
                                        closeClick : true,
                                        scrolling : 'yes',
                                        autoScale: true ,
                                        closeClick: false ,
                                        padding: 0 ,
                                        helpers : {
                                            overlay : null
                                        }
                                    }
                                   );
                    return false;
                });
                    
                    
                    
             /*======================================back_btn=========================================*/          
                    $('.tags').click(function(){
                        if($.fancybox.isOpen)
                        {
                             $.fancybox.close();
                             return false;
                        }
                       
                    })
             /*======================================fancy=========================================*/          
                });	
                    
            }
    }
});
