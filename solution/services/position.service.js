wiwApp.service('Position', ['$cookies', '$http', '$location', 'wiwAPI', function ($cookies, $http, $location, wiwAPI) {
    var self = this;
    self.viewOnly = true;
    self.currPosId = '';
    self.positionObj = {};
    self.userList = {};
    self.userPosList = [];



    self.getUserPositions = function(userPositions) {
        userPositions.forEach(function(id) {
            self.userPosList.push(wiwAPI.getPosition(id));
        });
    };
    self.viewPosition = function (positionId) {
        self.currPosId = positionId;
        self.positionObj = wiwAPI.getPosition(positionId);
        $location.path('/position');
    };
    self.editPosition = function (positionId) {
        self.currPosId = positionId;
        self.positionObj = wiwAPI.getPosition(positionId);
        $location.path('/position');
    };
    self.updatePositionInfo = function (posObj) {
        wiwAPI.updatePosition(posObj);
    };
    self.getAllPositions = function () {
        return wiwAPI.getPositions();
    };


}]);
