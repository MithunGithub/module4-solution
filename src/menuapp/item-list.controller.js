/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
    
    'use strict';
    
    angular.module('data')
    .controller('MenuAppItemListController',MenuAppItemListController);
    
    MenuAppItemListController.$inject=['items'];
    
    function MenuAppItemListController(items){
        
        var itemList = this;
        
        itemList.itemDetails = items
    }
})();
