const { expect } = require('@wdio/globals');
const LoginPage = require('../../po/pages/login.page');
const loginPage = new LoginPage();
const testData = require('../testData/testData');
const ProductsPage = require('../../po/pages/products.page');
const productsPage = new ProductsPage();
import logger from '../../utils/logger.js';

describe('Saucedemo login functionality', () => {
    beforeEach(async () => {
        await loginPage.open();
    });

    describe('UC-1: Test Login form with empty credentials', () => {
        it(`Given the user is on the login page, 
            When user enters credentials 
            And the user clears the inputs
            And clicks on the "Login" button,
            Then an error message "Username is required" should be displayed`, async () => {

            logger.info('Type any credentials in username and password fields');
            await loginPage.loginBox.item('username').setValue(testData.CONSTANTS.INVALID_CREDENTIALS.userName);
            await loginPage.loginBox.item('password').setValue(testData.CONSTANTS.INVALID_CREDENTIALS.password);

            logger.info('Clear the inputs');
            await loginPage.loginBox.clearField('username');
            await loginPage.loginBox.clearField('password');

            logger.info('Click on "Login" button');
            await loginPage.loginBox.item('loginbutton').click();

            logger.info('Verify error message "Epic sadface: Username is required" is displayed');
            const textError = await loginPage.loginBox.item('texterror').getText();
            await expect(textError).toEqual(testData.CONSTANTS.MESSAGES.errorUserNameRequired);
        });
    });

    describe('UC-2: Test Login form with credentials by passing Username', () => {
        it(`Given the user is on the login page,
            When the user enters the username,
            And the password field is left empty,
            And the user clicks the "Login" button,
            Then an error message "Password is required" should be displayed`, async () => {

            logger.info('Type any credential in username field');
            await loginPage.loginBox.item('username').setValue(testData.CONSTANTS.VALID_CREDENTIALS.userName);
            await loginPage.loginBox.item('password').setValue(testData.CONSTANTS.VALID_CREDENTIALS.password);

            logger.info('Clear password input');
            await loginPage.loginBox.clearField('password');

            logger.info('Click on the "Login" button');
            await loginPage.loginBox.item('loginbutton').click();

            logger.info('Verify error message "Epic sadface: Password is required" is displayed');
            const textError = await loginPage.loginBox.item('texterror').getText();
            await expect(textError).toEqual(testData.CONSTANTS.MESSAGES.errorPasswordRequired);
        });
    });

    describe('UC-3: Test Login form with credentials by passing Username & Password', () => {
        it(`Given the user is on the login page,
            And the user enters a valid username and password,
            When the user clicks the "Login" button,
            Then the user should be redirected to the dashboard,
            And the dashboard title "Swag Labs" should be displayed`, async () => {

            logger.info('Login with valid username and password');
            await loginPage.loginBox.item('username').setValue(testData.CONSTANTS.VALID_CREDENTIALS.userName);
            await loginPage.loginBox.item('password').setValue(testData.CONSTANTS.VALID_CREDENTIALS.password);

            logger.info('Click on the "Login" button');
            await loginPage.loginBox.item('loginbutton').click();

            logger.info('Verify the dashboard contains "Swag Labs" title');
            const dashboardTitle = await productsPage.getDashboardTitle();
            await expect(dashboardTitle).toEqual(testData.CONSTANTS.TITTLES.dashBoardTitle);
        });
    });
});
