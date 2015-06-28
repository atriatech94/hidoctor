is_open = 0 ;
angular.module('pooshak')
.controller('PostController', function($scope,$rootScope) {


})
.directive('swSwipe', ['$routeParams' ,  function ($routeParams,$scope){
		return {
			link: function($scope) {
				
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
           /*=============================================================================================================*/        
           /*=============================================================================================================*/        

                 
             /*======================================fancy=========================================*/  
                $(window).on('resize',function(){
                    var hei = $(window).height() -50 ;
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
                    var hei = $(window).height() -50 ;
                    var data  = '<div class="post_detail">';/*==== start post detail  =====*/
                    data = '<div class="controll_btn"><span class="fav_btn"></span><span class="back_btn"></span></div>';
                    data += '<div class="img_tt"><img class="post_image"  src="'+arr[0].thumbnail+'" ><div class="title"><span>'+arr[0].post_title+' </span></div></div>';/*==== post_image + title  =====*/
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
                             return false;
                        }
                       
                    });
             /*======================================reuqest=========================================*/          
                var offset = 0 ; 
                var cat = localStorage.getItem("cat_id") ;
                 FetchDataFromServer(offset);
                        // http://hidoctor.ir/app/post.php?offset=1&limit=12&cat_id=402&pass=hamidhidoctor9423
        
                
                        $('.content').scroll(function () {
                            
                          // console.log(" $('.content').scrollTop() = "+$('.content').scrollTop());
                          // console.log(" $('.content').height() "+$('.content').height());
                          // console.log(" $(document).height() "+$('.product').height());
                            
                            
                            if ( $('.product').height() < $('.content').scrollTop() + ($(window).height()) ) {
                                FetchDataFromServer(offset);
                            }
                            
                        });
                  
                        
                    
             /*======================================fancy=========================================*/          
                    function FetchDataFromServer(ofs){
                       $.getJSON("http://hidoctor.ir/app/post.php?offset="+ofs+"&limit=12&cat_id="+$routeParams.cat+"&pass=hamidhidoctor9423",function(data){
                           
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
                                 if(i == 0 && offset < 12 ){mns()}
							   }

                           }
                               console.log(data);
                               							   
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
                            
                               offset+=12;
                           
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
            }
}}])

