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
                  
                    var link = document.createElement('link');
                    link.setAttribute('rel', 'stylesheet');
                    link.setAttribute('type', 'text/css');
                    link.setAttribute('href', 'css/no-module.css');
                    document.getElementsByTagName('head')[0].appendChild(link);
                    $('.categories').height($(window).height());
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
                    
                });	
            }
}})
