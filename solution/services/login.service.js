wiwApp.service('Login', ['$http', 'wiwAPI', '$cookies', '$location', function ($http, wiwAPI, $cookies, $location) {

    var self = this;
    self.wiwAPI = wiwAPI;

    self.login = function (loginObj) {
        var data = {"username": loginObj.username, "password": loginObj.password};
        var key = loginObj.key;
        self.wiwAPI.login(data, key).then(
                function successCallback(response) {
                    $cookies.put('wiwToken', response.data.token);
                    $location.path("/index");
                }, function errorCallback() {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Username or password is incorrect. Try again later.',
                    })
                });
    };
    self.devLogin = function (token) {
        wiwAPI.devLogin(token).then(
                function successCallback() {
                    $cookies.put('wiwToken', token);
                    $location.path("/index");
                }, function errorCallback() {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Developer token incorrect.',
                    })
                });
    };
}]);
