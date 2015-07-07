
angular.module('pooshak')
.controller('PostController', function($scope,$rootScope) {


})
.directive('swSwipe', ['$routeParams' ,  function ($routeParams,$scope){
		return {
			link: function($scope) {
            is_open = 0 ;
            $('.header_text').text(localStorage.getItem("name"));
			
			$('a[class=mu]').click(function(){
				var cat_id = ($(this).attr("href").split("/"));
				cat_id = cat_id[cat_id.length - 1];
				localStorage.setItem("name",$(this).text());
				localStorage.setItem("cat_id",cat_id);
				
            });
			
			
          /*=======================================varibales=============================================================*/    
                var post_data =[] ; 
          /*============================================================================================================*/                
                var snapper = new Snap({
                    element: document.getElementById('content'),
                    disable: 'left'
                });
           /*=============================================================================================================*/     
               
                $('.menu').click(function(){
					
                        snapper.open('right');
                });
               
                    
           /*=============================================================================================================*/        
           /*=============================================================================================================*/        

                 
             /*======================================fancy=========================================*/  
                $(window).on('resize',function(){
                    var hei = $(window).height() - 70 ;
                    $('#style').html('<style>.fancybox-inner{height : '+hei+'px !important}</style>');
                });
             /*======================================fancy=========================================*/  
                  var head_cat = '';
                $('.product').delegate('.product_one','click',function(){
                    var pid = $(this).attr('p_id');
                    
                    arr = jQuery.grep(post_data, function( a ) {
                          return a.ID == pid;
                        });
                    
                    console.log(arr);
                    $('.menu').hide();
                    $('.header_text').text(arr[0].post_title);
                    $('.buys .tags img').attr('src','img/close-btn.png');
                    var hei = $(window).height() - 70 ;
                    var data  = '<div class="post_detail">';/*==== start post detail  =====*/
                    data = '<div class="controll_btn"><span class="fav_btn"></span><span class="back_btn"></span></div>';
                    data += '<div class="conatin">'+arr[0].post_content.replace(/(?:\n|\n)/g, '<br />')+'';/*====  post text =====*/
                    data += '<div id="style"><style>.fancybox-inner{height : '+hei+'px !important}</style></div><div class="time">تاریخ انتشار :  '+moment((arr[0].post_date).valueOf()).format(' jD  jMMMM jYYYY ')+'<div>';/*==== post date  =====*/
                    data += '</div>';/*====  End post detail =====*/
                    $.fancybox.open(data ,{
                                        overlayShow : false ,
                                        scrolling : 'yes',
                                        autoScale: true ,
                                        closeClick: false ,
                                        transitionIn : 'none',
                                        transitionOut :'none',
                                        showCloseButton : true ,
                                        openOpacity : false,
                                        openEffect : 'none',
                                        closeEffect : 'none',
                                        closeOpacity : false,
                                        padding: 0 ,
                                        helpers : {
                                            overlay : null
                                        }
                                    }
                                   );
                    snapper.disable();
                    return false;
                });
             /*======================================back_btn=========================================*/          
                    $('.tags').click(function(){
                        if($.fancybox.isOpen)
                        {
                             $.fancybox.close();
                            $('.menu').show();
                            $('.buys .tags img').attr('src','img/icon_left_w.png');
							$('.header_text').text(localStorage.getItem("name"));
                            snapper.enable();
                            return false;
                            
                        }
                       
                    });
                
             /*======================================a disable detail=========================================*/     
                $('body').delegate("a",'click',function(){
                    var href = $(this).attr("href");
                    
                    if( href.indexOf('http') >= 0)
                    {
                       return false;
                    }
                    
                });
             /*======================================reuqest=========================================*/          
                var offset = 0 ; 
				var scr = 0;
                var cat = localStorage.getItem("cat_id") ;
                 FetchDataFromServer(offset);

                        $('.content').scroll(function () {
                            if ( $('.product').height() < $('.content').scrollTop() + ($(window).height())+((0.7)*($(window).height())) ) {
								if(scr == 0)
								{
      
                                   FetchDataFromServer(offset);
								}
                            }
                        });
             /*======================================fancy=========================================*/          
                    function FetchDataFromServer(ofs){
						scr = 1;
                        $('.loading_two').show();
                       $.getJSON("http://hidoctor.ir/app/post.php?offset="+ofs+"&limit=15&cat_id="+$routeParams.cat+"&pass=hamidhidoctor9423",function(data){
                           
                           for(i=0;i< data.length;i++)
                           {
							   if(data[i].cat_id == localStorage.getItem("cat_id") )
							   {
                                var $content ='<div href="" p_id = "'+data[i].ID+'" class="product_one" >';
								 if(data[i].thumbnail == null)
								 {
									  $content +='<img src="img/img.jpg">';
								 }
								 else
								 {
									 $content +='<img src="'+data[i].thumbnail+'">';
								 }
                                
                                 $content +='<div class="detail">';
                                 $content +='<span class="product_name">'+data[i].post_title+'</span>';
                                 $content +='<span class="product_time">'+moment((data[i].post_date).valueOf()).format(' jD  jMMMM jYYYY HH:mm:ss ')+'</span>';
                                 $content +='</div></div>';
                                 $('.product').append( $content );
								 post_data.push(data[i]);
                                 if(i == 0 && offset < 15 ){mns()}
							   }

                           }
                               $('.loading_two').hide();
                           
                               console.log(data);
							   scr = 0;
                               							   
                               $('.product').masonry( 'reloadItems');
                               $('.product').masonry('layout');
                           
						      setTimeout(function(){ $('.product').masonry( 'reloadItems');
							   $('.product').masonry('layout');},300);
							   
							   setTimeout(function(){ $('.product').masonry( 'reloadItems');
							   $('.product').masonry('layout');},600);
							   
							   setTimeout(function(){ $('.product').masonry( 'reloadItems');
							   $('.product').masonry('layout');},1800);
                               
							    setTimeout(function(){ $('.product').masonry( 'reloadItems');
							   $('.product').masonry('layout');},3000);
							   
							   setTimeout(function(){ $('.product').masonry( 'reloadItems');
							   $('.product').masonry('layout');},5000);
							   
							   setTimeout(function(){ $('.product').masonry( 'reloadItems');
							   $('.product').masonry('layout');},8000);
							   
							   setTimeout(function(){ $('.product').masonry( 'reloadItems');
							   $('.product').masonry('layout');},11000);
							   
							   setTimeout(function(){ $('.product').masonry( 'reloadItems');
							   $('.product').masonry('layout');},16000);
                            
                               offset+=15;
                           
                        }).fail(function() {
                               $.fancybox.open("<p class='alerts'> لطفا اینترنت گوشی خود را فعال کنید </p><span class='ref_btn'><button class='refresh'>تلاش مجدد</button><button class='exit'>بازگشت</button></span>",{modal:true, height: 50,width:100 ,padding : 0});
                          });
                       
                       
                    }
             /*======================================fancy=========================================*/      
                 function mns(){
                     $('.product').masonry({
                         itemSelector: '.product_one',
                         percentPosition: false,
                         columnWidth: '.product .product_one',
                         gutter: 10,
                         isOriginLeft: true,
                         transitionDuration: '0s',
                         isFitWidth: false,
                     });
                 }
                
           /*======================================fancy=========================================*/  
           /*======================end  click interneti link ===================================*/
                $('body').delegate(".refresh","click",function(){
                    $.fancybox.close();
                    FetchDataFromServer(offset);
					
                }); 
                $('body').delegate(".exit","click",function(){
                    $.fancybox.close();
                    $('.loading_two').hide();
                    $('.refresh_ico').show();
                            
                });
                $('body').delegate(".refresh_ico","click",function(){
                    $('.refresh_ico').hide();
                    FetchDataFromServer(offset);
                }); 
           /*======================chech dobare net===================================*/
            }
}}])

