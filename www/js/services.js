var services = angular.module('starter.services', ['ngResource']);

services.factory('ItemsFactory', function ($resource) {
    return $resource('/starter/web/items', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
});
services.factory('ItemFactory', function ($resource) {
    return $resource('/starter/web/items/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});
