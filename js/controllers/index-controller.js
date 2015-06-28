is_open = 0 ;
var vers = 0 ;
angular.module('pooshak')
.controller('IndexController', function($scope,$rootScope,Category) {
            
})
.directive('indexDir' , function (Category){
		return {
			link: function($rootScope) {
                document.getElementById('swipe_color').style.display = "block";
     
                $(document).ready(function () {
                  
                
             /*===============================================================================*/ 
                    $('.module').click(function(){
                        localStorage.setItem("name",$(this).children('p').text());
						localStorage.setItem("cat_id",$(this).attr('id').replace('p',''));
                        window.location.hash = '#/post/'+$(this).attr('id').replace('p','');
                        
                    });
                
                  setTimeout(function(){$('.categories').attr('style',' ');},100);
         
                    for(i=0 ; i< $('.module').length ;i++)
                    {
                            $('.module:eq('+i+')').addClass('active');
                    }
            /*===============================================================================*/ 
                       /* 
                            var link = document.createElement('link');
                            link.setAttribute('rel', 'stylesheet');
                            link.setAttribute('type', 'text/css');
                            link.setAttribute('href', 'css/module.css');
                            document.getElementsByTagName('head')[0].appendChild(link);
                            setTimeout(function(){
                                //document.getElementById('swipe_color').style.display ="none";
                                $('.categories').masonry({
                                // options
                                itemSelector: '.module',
                                percentPosition: true,
                                columnWidth: '.grid-sizer',
                               isOriginLeft: true,
                                transitionDuration: '.5s',
                                isFitWidth: false,
                            });
                                
                            },300);
                            
                    
                            var link = document.createElement('link');
                            link.setAttribute('rel', 'stylesheet');
                            link.setAttribute('type', 'text/css');
                            link.setAttribute('href', 'css/no-module.css');
                            document.getElementsByTagName('head')[0].appendChild(link);  
                     */
                        
                    $('.categories').append('<style>.categories{height : '+$(window).height()+'px !important}</style>');
                    document.getElementById('swipe_color').style.display = "none";
            /*===============================================================================*/ 
                    document.addEventListener("deviceready", onDeviceReady, false);
                     function onDeviceReady() 
                     {
                        var element = document.getElementById('deviceProperties');
                         
                         
                        devices(device.platform,device.version);
                        
                     }
                     
                    function devices(platform,version){
                       
					
                               
									version = version.split('.');
									version = parseInt(version[0]+ version[1]);
									
									if(platform == "Android" && version < 44 )
									{
										var link = document.createElement('link');
										link.setAttribute('rel', 'stylesheet');
										link.setAttribute('type', 'text/css');
										link.setAttribute('href', 'css/no-module.css');
										document.getElementsByTagName('head')[0].appendChild(link);
                                        document.getElementById('swipe_color').style.display = "none";
										
									}// end if android 4.2
									else
									{
									   
										var link = document.createElement('link');
										link.setAttribute('rel', 'stylesheet');
										link.setAttribute('type', 'text/css');
										link.setAttribute('href', 'css/module.css');
										document.getElementsByTagName('head')[0].appendChild(link);
										setTimeout(function(){
											
											$('.categories').masonry({
												// options
												itemSelector: '.module',
												percentPosition: true,
												columnWidth: '.grid-sizer',
											   isOriginLeft: true,
												transitionDuration: '.5s',
												isFitWidth: false,
											});
											 document.getElementById('swipe_color').style.display = "none";
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
											
										},100);
									 
									}// end esle android 4.2
							 
                    }// end devices(platform,version)
                    
             /*===============================================================================*/          

                });	
            }
}})
