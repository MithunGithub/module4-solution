/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
    'use strict';
    
    angular.module('data')
    .service('MenuDataService',MenuDataService)
    .constant('MenuCategoryPath','https://davids-restaurant.herokuapp.com/categories.json')
    .constant('MenuCategoryItemsPath','https://davids-restaurant.herokuapp.com/menu_items.json?category=');
    
    MenuDataService.$inject = ['$http','MenuCategoryPath','MenuCategoryItemsPath']
    function MenuDataService($http,MenuCategoryPath,MenuCategoryItemsPath){
        
        var service = this;
        
        service.getAllCategories = function(){
            
            var categories =[];
            var response = $http({
                method:"GET",
                url:MenuCategoryPath
            }).then(function(response){
                var result = response.data;
                //console.log(result);
                
                for(var i=0;i<result.length;i++){
                    categories.push(result[i]);
                }
                
                //console.log('Mithun' + categories);
                return categories;
            })
            
            return response;
        };
        
        service.getItemsForCategory = function(categoryShortName){
            
            var items =[];
            var response = $http({
                method:"GET",
                url:(MenuCategoryItemsPath + categoryShortName)
            }).then(function(response){
                var result = response.data.menu_items;
                //console.log(result);
                
                for(var i=0;i<result.length;i++){
                    items.push(result[i]);
                }
                
                console.log('Mithun' + items);
                return items;
            })
            
            return response;
        };
    }
    
})();
