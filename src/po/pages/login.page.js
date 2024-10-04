const LoginBoxComponent = require("../components/loginBox.component");

class LoginPage {

    constructor() {
        this.loginBox = new LoginBoxComponent();
    }

    async open() {
        await browser.url('https://www.saucedemo.com/');
        await browser.maximizeWindow();
    }
}

module.exports = LoginPage;
