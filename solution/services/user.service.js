wiwApp.service('User', ['wiwAPI', '$cookies', '$http', '$location', function (wiwAPI, $cookies, $http, $location) {
    var self = this;
    self.viewOnly = true;
    self.currUserId = '';
    self.userObj = {
        account_id: '',
        first_name: '',
        last_name: '',
        positions: [],
        phone_number: '',
        email: ''
    };
    self.wiwToken = '';
    self.userList = {};
    self.userPosList = [];
    self.userPosIds = wiwAPI.getUserPosIds();
    self.positionList = {};

    self.newPos = function (posId) {
        return self.userPosIds.indexOf(posId) < 0;
    };

    self.getUserToken = function () {
        return new Promise(function (resolve, reject) {
            var wiwToken = $cookies.get("wiwToken");
            if (typeof(wiwToken) !== 'undefined') {
                resolve(wiwToken)
            } else {
                reject(wiwToken)
            }
        })
    };

    self.viewUser = function (userId) {
        self.currUserId = userId;
        wiwAPI.getUser(userId, self.wiwToken).then(
            function successCallback(response) {
                self.userObj = {
                    "id": response.data.user.id,
                    "account_id": response.data.user.account_id,
                    "first_name": response.data.user.first_name,
                    "last_name": response.data.user.last_name,
                    "phone_number": response.data.user.phone_number,
                    "email": response.data.user.email
                };
                self.getUserPositions(wiwAPI.getUserPosIds());
                $location.path('/user');
            }, function errorCallback() {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: 'We can\'t retrieve user info at this time. Try again later.',
                })
                return false;
            }
        )
    };
    self.getUserPositions = function (userPositions) {
        userPositions.forEach(function (id) {
            self.userPosList.push(wiwAPI.getPosition(id));
        });
    };
    self.updateUserInfo = function (userObj) {
        wiwAPI.updateUser(userObj, self.wiwToken)
            .then(
                function successCallback(response) {
                    self.getAllUsers();
                    swal(
                        '',
                        'Information updated successfully!',
                        'success'
                    );
                    self.viewOnly = true;
                }, function errorCallback() {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Can\'t update. Try again later.',
                    })
                }
            )
    };

    self.updateUserPosition = function (userObj, pos_id, action) {
        if (action === 'add') {
            self.userPosIds.push(pos_id);
        }
        else {
            var index = self.userPosIds.indexOf(pos_id);
            self.userPosIds.splice(index, 1);
        }
    };

    self.getAllUsers = function () {
        wiwAPI.getUsers(self.wiwToken).then(
            function successCallback(response) {
                console.log(response.data);
                self.userList = response.data.users;
                console.log(self.userList[0]);
            }, function errorCallback() {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: 'We can\'t retrieve the user list at this time. Try again later.',
                })
            })
    };
    self.getuser = function () {
        self.getUserToken()
            .then(
                function successCallback(result) {
                    self.wiwToken = result;
                    self.getAllUsers();
                }, function errorCallback() {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Please login to continue',
                    });
                    $location.path("/login");
                });
    };

}]);
