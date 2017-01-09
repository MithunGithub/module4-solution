/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
    
    'use strict';
    
    angular.module('data')
    .component('categoryList',{
        templateUrl:'src/menuapp/templates/categorylist.template.html',
        bindings:{
            categories:'<'
        }
    })
})();

