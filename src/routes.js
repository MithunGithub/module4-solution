/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
    
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider){
       
       $urlRouterProvider.otherwise('/');
       
       $stateProvider
       //Home Page
       .state('home',{
           url:'/',
           templateUrl:'src/menuapp/templates/home.template.html'
       })
       
       //Category List Page
       .state('categoryList',{
           url:'/categories',
           templateUrl:'src/menuapp/templates/category.template.html',
           controller:'MenuAppCategoryListController as categoryList',
            resolve:{
               categories:['MenuDataService',function(MenuDataService){
                   return MenuDataService.getAllCategories();    
               }]
           }
       })
       
       //Item List Page
       .state('items',{
           url:'/items/{categoryId}',
           templateUrl:'src/menuapp/templates/items.template.html',
           controller:'MenuAppItemListController as itemList',
           resolve:{
               items:['$stateParams','MenuDataService'
                   ,function($stateParams,MenuDataService){
                   return MenuDataService.getItemsForCategory($stateParams.categoryId);    
               }]
           }
       })
    }
})();
