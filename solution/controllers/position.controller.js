wiwApp.controller('PositionCtrl', function (Position) {
    var self = this;
    self.position = Position;
    self.positionObject = Position.positionObj;

    self.updatePosition = function () {
        self.position.updatePositionInfo(self.positionObject);
    };
    self.viewPosition = function (position_id) {
        self.position.viewOnly = true;
        self.position.viewPosition(position_id);
    };
    self.editPosition = function (position_id) {
        self.position.viewOnly = false;
        self.position.viewPosition(position_id);
    };
    self.updatePosition = function () {
        self.position.updatePositionInfo(self.positionObject);
    };
    if (self.position.currPosId < 1) {
        swal({
            type: 'error',
            title: 'Oops...',
            text: 'We can\'t retrieve position info at this time. Try again later.',
        })
        $location.path('/index');
    }
});
