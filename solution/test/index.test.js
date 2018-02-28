/*global describe, it, beforeEach, inject, expect*/
(function () {
    'use strict';

    describe('Index Controller', function () {
        var ctrl;

        beforeEach(angular.mock.module('wiwApp'));

        beforeEach(inject(function ($controller) {
            ctrl = $controller('IndexCtrl', {
            });
        }));

        it('should have a working hexToRgba converter',
            function() {

                // test cases - testing for success
                var validConversions = [
                    {
                        'hex': '#26a526',
                        'rgba': 'rgba(38,165,38,0.5)'
                    },
                    {
                        'hex': '#5415a5',
                        'rgba': 'rgba(84,21,165,0.5)'
                    }
                ];

                // test cases - testing for failure
                var invalidConversions = [
                    {
                        'hex': '#20a526',
                        'rgba': 'rgba(18, 165, 38. .5)'
                    },
                    {
                        'hex': '#2e2f30',
                        'rgba': 'rgba(8, 112, 8, .5)'
                    }
                ];

                for (var i in validConversions) {
                    expect(ctrl.hexToRgba(validConversions[i].hex)).toEqual(validConversions[i].rgba);
                }
                for (var j in invalidConversions) {
                    expect(ctrl.hexToRgba(invalidConversions[j].hex)).not.toEqual(invalidConversions[j].rgba);

                }

            });
    });
}());