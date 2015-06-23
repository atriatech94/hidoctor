is_open = 0 ;
angular.module('pooshak')
.controller('PostController', function($scope,$rootScope) {


})
.directive('swSwipe', function (){
		return {
			link: function($scope) {
                $(document).ready(function () {
          /*============================================================================================================*/                
                        var snapper = new Snap({
                            element: document.getElementById('content'),
                            disable: 'left'
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
                            columnWidth: '.product .grid-sizer',
                            gutter: 10,
                            isOriginLeft: true,
                            transitionDuration: '.5s',
                            isFitWidth: false,
                        });
                    },150);
                  
                    
             /*======================================fancy=========================================*/  
                $(window).on('resize',function(){
                    var hei = $(window).height() -50 ;
                    //$('#style').html('<style>.fancybox-inner{height : '+hei+'px !important}</style>');
                });
             /*======================================fancy=========================================*/  
                  var head_cat = '';
                $('.product').delegate('.product_one','click',function(){
                    
                    $('.menu').hide();
                    head_cat = $('.header_text').text();
                    $('.header_text').text('میکاپ صورتی برای دختران نوجوان');
                    $('.buys .tags img').attr('src','img/close-btn.png');
                    var hei = $(window).height() -50 ;
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
                    data += '<div class="img"> <img src="img-test/1.jpg"></div><div id="style"><style>.fancybox-inner{height : '+hei+'px !important}</style></div>';/*==== img  =====*/
                    data += ' <div class="time">تاریخ انتشار : 27 اردیبهشت 1394<div>';/*==== post date  =====*/
                    data += '</div>';/*====  End post detail =====*/
                    $.fancybox.open(data ,{
                                        scrolling : 'yes',
                                        autoScale: true ,
                                        closeClick: false ,
                                        transitionIn : 'none',
                                        transitionOut :'none',
                                        showCloseButton : true ,
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
                            $('.menu').show();
                            $('.header_text').text(head_cat);
                            $('.buys .tags img').attr('src','img/icon_left_w.png');
                             return false;
                        }
                       
                    });
             /*======================================fancy=========================================*/          

                

     
                    
                    
             /*======================================fancy=========================================*/          
                });	
                    
            }
    }
});
