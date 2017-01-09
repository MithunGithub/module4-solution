/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
    
    'use strict';
    
    angular.module('data')
    .component('itemList',{
        templateUrl:'src/menuapp/templates/items-list.template.html',
        bindings:{
            items:'<'
        }
    })
        
})();
