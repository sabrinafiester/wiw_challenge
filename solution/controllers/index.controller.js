wiwApp.controller('IndexCtrl', function (User, Position) {
    var self = this;
    self.user = User;
    self.position = Position;
    self.positionList = self.position.getAllPositions();

    self.viewUser = function(user_id) {
        self.user.viewOnly = true;
        self.user.viewUser(user_id);
    };
    self.editUser = function (user_id) {
        self.user.viewOnly = false;
        self.user.viewUser(user_id);
    };

    self.viewPosition = function(pos_id) {
        self.position.viewOnly = true;
        self.position.viewPosition(pos_id);
    };
    self.editPosition= function (pos_id) {
        self.position.viewOnly = false;
        self.position.editPosition(pos_id);
    };
    self.hexToRgba = function(hex) {
        hex = hex.replace("#", "");
        r = parseInt(hex.substring(0,2), 16);
        g = parseInt(hex.substring(2,4), 16);
        b = parseInt(hex.substring(4,6), 16);

        return 'rgba('+r+','+g+','+b+','+.5+')';
    };
});
