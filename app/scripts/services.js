'use strict';

angular.module('confusionApp')
    .constant("baseURL", "http://localhost:3000/")

.service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {




    this.getDishes = function() {
        return $resource(baseURL + "dishes/:id", null, {
            'update': {
                method: 'PUT'
            }
        });
    };


    this.getPromotion = function() {
        return $resource(baseURL + "promotions/:id", null, {
            method: 'PUT'
        });
    };
    // that returns a selected promotion.


}])

.factory('corporateFactory',['$resource', 'baseURL', function($resource, baseURL) {

   var corpfac = {};

   corpfac.getLeaders = function() {
 return $resource(baseURL + "leadership/:id", null, {
                method: 'PUT'
            }
        );
    };
 

    return corpfac;
 
}]);