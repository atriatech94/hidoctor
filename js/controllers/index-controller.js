is_open = 0 ;
angular.module('pooshak')
.controller('IndexController', function($scope,$rootScope,Category) {
            
})
.directive('indexDir',['Category' , function (Category){
		return {
			link: function($rootScope) {
                
                 Category.all()
                .success(function(data){
                   console.log( data) ; 
                });
                
                $(document).ready(function () {
                  
                
             /*===============================================================================*/ 
                    $('.module').click(function(){
                        window.location.href = $(this).attr('href');
                    });
                    
            /*===============================================================================*/       
                  setTimeout(function(){$('.categories').attr('style',' ');},100);
             /*===============================================================================*/   
                    for(i=0 ; i< $('.module').length ;i++)
                    {
                            $('.module:eq('+i+')').addClass('active');
                    }
            /*===============================================================================*/ 
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
            /*===============================================================================*/ 
                    document.addEventListener("deviceready", onDeviceReady, false);
                     function onDeviceReady() 
                     {
                        var element = document.getElementById('deviceProperties');
                        devices(device.platform,device.version);
                        document.getElementById('swipe_color').style.display ="block";
                     }
                    function devices(platform,version){
                       
                        version = version.split('.');
                        version = parseInt(version[0]+ version[1]);
                        if(platform== "Android" && version < 44 )
                        {
                            var link = document.createElement('link');
                            link.setAttribute('rel', 'stylesheet');
                            link.setAttribute('type', 'text/css');
                            link.setAttribute('href', 'css/no-module.css');
                            document.getElementsByTagName('head')[0].appendChild(link);
                            
                        }// end if android 4.2
                        else
                        {
                            
                            var link = document.createElement('link');
                            link.setAttribute('rel', 'stylesheet');
                            link.setAttribute('type', 'text/css');
                            link.setAttribute('href', 'css/module.css');
                            document.getElementsByTagName('head')[0].appendChild(link);
                            setTimeout(function(){
                                document.getElementById('swipe_color').style.display ="none";
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
                             
                        }// end esle android 4.2
                       
                    }// end devices(platform,version)
                    
             /*===============================================================================*/          

                });	
            }
}}])
