class LoginBoxComponent {
    get rootElement() {
        return $('#login_button_container');
    }

    item(param) {
        const selectors = {
            username: '[data-test="username"]',
            password: '[data-test="password"]',
            loginbutton: '[data-test="login-button"]',
            texterror: '[data-test="error"]'
        };

        return this.rootElement.$(selectors[param.toLowerCase()]);
    }

    async clearField(param) {
        await this.item(param).click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Delete');
    }
}

module.exports = LoginBoxComponent;