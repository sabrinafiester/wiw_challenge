/*global describe, it, beforeEach, inject, expect*/
(function () {
    'use strict';

    describe('wiwAPI Service', function () {
        var wiwAPI;

        var posList = {
            32: {
                "id": "32",
                "account_id": 3,
                "name": "Stocker",
                "color": "#1174a6",
                "created_at": "Thu, 06 Mar 2014 21:12:14 -0600",
                "updated_at": "Thu, 06 Mar 2014 22:17:14 -0600"
            },
            82: {
                "id": "82",
                "account_id": 3,
                "name": "Manager",
                "color": "#efc23b",
                "created_at": "Thu, 06 Mar 2014 21:12:14 -0600",
                "updated_at": "Thu, 06 Mar 2014 22:17:14 -0600"
            },
            19: {
                "id": "19",
                "account_id": 3,
                "name": "Software Engineer",
                "color": "#33c474",
                "created_at": "Thu, 06 Mar 2014 21:12:14 -0600",
                "updated_at": "Thu, 06 Mar 2014 22:17:14 -0600"
            }
        };

        beforeEach(angular.mock.module('wiwApp'));

        beforeEach(inject(function(_wiwAPI_) {
            wiwAPI = _wiwAPI_;
        }));

        it('should exist',
            function() {
                expect(wiwAPI).toBeDefined();
            });

        describe('.getPosition(id)', function() {
            it('should exist', function() {
                expect(wiwAPI.getPosition).toBeDefined();
            });
            it('should return given hardcoded position', function() {
                expect(wiwAPI.getPosition("19")).toEqual(posList["19"]);
            });
            it('should return given hardcoded position', function() {
                expect(wiwAPI.getPosition(82)).toEqual(posList["82"]);
            });
            it('should not return pos 5 when we ask for 19', function() {
                expect(wiwAPI.getPosition("19")).not.toEqual(posList["5"]);
            });
            it('should not be defined', function() {
                expect(wiwAPI.getPosition('abc')).not.toBeDefined();
            });
        });

        describe('.getPositions', function() {
            it('should exist', function() {
                expect(wiwAPI.getPositions()).toBeDefined();
            });
            it('should include given position', function() {
                expect(wiwAPI.getPositions()["19"]).toEqual(posList["19"]);
            });
        });

        describe('.getUserPosIds', function() {
            it('should exist', function() {
                expect(wiwAPI.getUserPosIds()).toBeDefined();
            });
            it('should return array', function() {
                expect(typeof(wiwAPI.getUserPosIds())).toEqual('object');
            });
        });
    });
}());