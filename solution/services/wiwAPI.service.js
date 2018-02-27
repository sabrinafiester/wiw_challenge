wiwApp.service('wiwAPI', ['$http', 'positionInfo', function ($http, positionInfo) {
    console.log('wiwAPI');
    var self = this;
    var urlBase = 'https://api.wheniwork.com/2/';

    self.login = function(loginObj, token) {
        return $http.post(urlBase + 'login', loginObj, {headers: {"W-Token": token}});
    };
    self.devLogin = function(token) {
        return $http.get(urlBase + 'users', {headers: {"W-Token": token}});
    };
    self.getPositions = function() {
        return positionInfo.allPositions;
    };
    self.getPosition = function(positionId) {
        return positionInfo.allPositions[positionId.toString()];
    };
    self.updatePosition = function(positionObj) {
        positionInfo.allPositions[positionObj.id.toString()] = positionObj;
        return self.getPosition(positionObj.id.toString());
    };
    self.getUser = function(id, token) {
        return $http.get(urlBase + 'users/' + id, {headers: {"W-Token": token}});
    };
    self.updateUser = function(userObj, token) {
        return $http.put(urlBase + 'users/' + userObj.id, userObj, {headers: {"W-Token": token}});
    };
    self.getUsers = function(token) {
        return $http.get(urlBase + 'users', {headers: {"W-Token": token}});
    };
    self.getUserPosIds = function() {
        return positionInfo.userPosIds;
    };
    self.updateUserPosIds = function(posIdList) {
        positionInfo.userPosIds = posIdList;
    };

}]);