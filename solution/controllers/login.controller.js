wiwApp.controller('LoginCtrl', function (Login) {
    var self = this;
    self.devToken = false;
    self.loginServ = Login;
    self.loginObject = {
        username: '',
        password: '',
        key: ''
    };
    self.loginToken = '';

    self.login = function() {
        if(self.devToken){
            self.loginServ.devLogin(self.loginToken);
            return;
        }
        self.loginServ.login(self.loginObject);
    };

});
