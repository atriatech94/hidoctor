is_open = 0 ;
var vers = 0 ; 
angular.module('pooshak')
.controller('IndexController', function($scope,$rootScope,Category) {
            
})
.directive('versionAndroid',['$location' , function (location){
		return {
			link: function($rootScope) {
               
               window.addEventListener('load', function() {
					new FastClick(document.body);
				}, false);
			   
                document.addEventListener("deviceready", onDeviceReady, false);
                
                     function onDeviceReady() 
                     {
                        var element = document.getElementById('deviceProperties');
                         
                         
                         platform = device.platform;
                         version = device.version;
                         version = version.split('.');
                         version = parseInt(version[0]+ version[1]);
                         
                         if(platform == "Android" && version < 44 )
                         {
                             var link = document.createElement('link');
                             link.setAttribute('rel', 'stylesheet');
                             link.setAttribute('type', 'text/css');
                             link.setAttribute('href', 'css/no-module.css');
                             document.getElementsByTagName('head')[0].appendChild(link);
                             
                             
							 
							 if(!localStorage.getItem("version"))
							 {
								 localStorage.setItem("version", 42);
								 setTimeout(function(){
								 window.location.hash = "#/android-down";
								  var ch = 0;
								  },2000);   
							 }
							 else
							 {
								window.location.hash = "#/android-down"; 
							 }                          
                         }//end android 42
                         else{
                             
                             var link = document.createElement('link');
                             link.setAttribute('rel', 'stylesheet');
                             link.setAttribute('type', 'text/css');
                             link.setAttribute('href', 'css/module.css');
                             document.getElementsByTagName('head')[0].appendChild(link);
                             
                            
							 
							 if(!localStorage.getItem("version"))
							 {   
							     localStorage.setItem("version", 44);
								 setTimeout(function(){
									 window.location.hash = "#/android-up";
									  var ch = 0;
									},2000);
							 }
							 else
							 {
								window.location.hash = "#/android-up"; 
							 }
                             
                             
                         }//end esle 44 up
                        
                     }//onDeviceReady
                     
            }
        }
}])