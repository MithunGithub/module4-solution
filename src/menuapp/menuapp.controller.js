/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
    
    'use strict';
    
    angular.module('data')
    .controller('MenuAppCategoryListController',MenuAppCategoryListController);
    
    MenuAppCategoryListController.$inject = ['categories']
    function MenuAppCategoryListController(categories){
        
        var categoryList = this;
        
        categoryList.items = categories;
    }
})();
