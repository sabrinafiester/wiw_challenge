/*global describe, it, beforeEach, inject, expect*/
(function () {
    'use strict';

    describe('Login Controller', function () {
        var ctrl;

        beforeEach(angular.mock.module('wiwApp'));

        beforeEach(inject(function ($controller) {
            ctrl = $controller('LoginCtrl', {
            });
        }));

        it('should have a login service',
            function() {
                expect(ctrl.loginServ).toBeDefined();
            });
    });

    describe('Login Service', function () {
        var Login;

        // Load the module containing the app, only 'ng' is loaded by default.
        beforeEach(angular.mock.module('wiwApp'));

        beforeEach(inject(function(_Login_) {
            Login = _Login_;
        }));

        it('should have a wiw API service',
            function() {
                expect(Login.wiwAPI).toBeDefined();
            });
        it('should have a login function',
            function() {
                expect(Login.login).toBeDefined();
            });
        it('should have a dev login function',
            function() {
                expect(Login.devLogin).toBeDefined();
            });
    });
}());