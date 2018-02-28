/*global describe, it, beforeEach, inject, expect*/
(function () {
    'use strict';

    describe('Position Service', function () {
        var Position;

        beforeEach(angular.mock.module('wiwApp'));

        beforeEach(inject(function(_Position_) {
            Position = _Position_;
        }));

        it('should exist',
            function() {
                expect(Position).toBeDefined();
            });

    });
}());