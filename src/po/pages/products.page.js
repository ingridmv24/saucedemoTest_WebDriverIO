class ProductsPage{

    get dashboardTitle() {
        return $('.app_logo');
    }


    async getDashboardTitle() {
        await browser.waitUntil(async () => {
            return (await this.dashboardTitle.isDisplayed());
        }, {
            timeout: 5000, // Espera hasta 5 segundos
            timeoutMsg: 'Dashboard title not found'
        });
        return await this.dashboardTitle.getText();
    }
}

module.exports = ProductsPage;