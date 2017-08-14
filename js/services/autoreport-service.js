'use strict';

angular.module('app').service('autoReportService', ['$http', function ($http) {

    var get = function (accountDomainId,  callback) {
        var params = {
            _ajax_nonce: my_ajax_obj.nonce,
            action: "angular_proxy",
            type: "autoreport",
            Id: accountDomainId
        };

        $http.post(my_ajax_obj.ajax_url, jQuery.param(params), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).success(function (n) {
            callback && callback(n)
        })
    };

    var post = function (accountDomainId, model, callback) {
        var params = {
            _ajax_nonce: my_ajax_obj.nonce,
            action: "angular_proxy",
            type: "autoreport_edit",
            AccountDomainId: accountDomainId,
            SendInterval: model.SendInterval,
            DayOfWeekToSend: model.DayOfWeekToSend,
            SendTo: model.SendTo,
            LogoId: model.LogoId,
            Enabled: model.Enabled,
            Filter: model.Filter
        };

        $http.post(my_ajax_obj.ajax_url, jQuery.param(params), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).success(function (n) {
            callback && callback(n)
        })
    };
    return {
        get: get,
        post: post
    };
}]);


