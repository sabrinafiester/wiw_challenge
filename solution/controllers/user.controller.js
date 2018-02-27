wiwApp.controller('UserCtrl', function (User, $location) {
    var self = this;
    self.devToken = false;
    self.user = User;
    self.userObject = User.userObj;

    self.updateUser = function () {
        self.user.updateUserInfo(self.userObject);

    };

    self.viewUser = function (user_id) {
        self.user.viewOnly = true;
        self.user.viewUser(user_id);

    };

    self.editUser = function (user_id) {
        self.user.viewOnly = false;
        self.user.viewUser(user_id);
    };

    self.updateUser = function () {
        self.user.updateUserInfo(self.userObject);

    };

    self.addUserPosition = function (position_id) {
        self.user.updateUserPosition(self.userObject, position_id, 'add');
    };

    self.deleteUserPosition = function (position_id) {
        self.user.updateUserPosition(self.userObject, position_id, 'delete');
    };

    self.hexToRgba = function (hex) {
        hex = hex.replace("#", "");
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);

        return 'rgba(' + r + ',' + g + ',' + b + ',' + .5 + ')';
    };

    if (self.user.currUserId < 1) {
        swal({
            type: 'error',
            title: 'Oops...',
            text: 'We can\'t retrieve user\'s info at this time. Try again later.',
        })
        $location.path('/index');
    }


});
