// https://playwright.dev/docs/pom
const BasePage = require('./base.page');
class HomePage extends BasePage {
    constructor(page) {
        // calling the parent class BasePage constructor - inheritance
        super(page);
        //selectors
        this.productTitle = ('[comp-id="538"]');
        this.stock = ('[comp-id="105"]');
        this.price = ('[comp-id="324"]');
        this.balances = '.balance-value';
        this.dialogBox = ('#cdk-dialog-2')
        this.titleField = ('#mat-input-2')
        this.descriptionField = ('#mat-input-3')
        this.priceField = ('#mat-input-4')
        this.stockField = ('#mat-input-5')
    }



    async updateAssetCpt(titleValue) {
        await this.page.dblclick(this.productTitle);
        await this.page.click(this.titleField);
        await this.page.keyboard.press('Control+A');
        await this.page.keyboard.press('Backspace');
        await this.page.type(this.titleField, titleValue);
        
        const fruits = [this.titleField, this.descriptionField, this.priceField, this.stockField];
        fruits.forEach(page.keyboard.click());

    }

    async updateStock(stockValue) {
        await this.page.dblclick(this.stock);
        await this.page.keyboard.press('Backspace');
        await this.page.type(this.stock, stockValue);
        await this.page.keyboard.press('Enter');

    }

    async updatePrice(priceValue) {
        await this.page.dblclick(this.price);
        await this.page.keyboard.press('Backspace');
        await this.page.type(this.price, priceValue);
        await this.page.keyboard.press('Enter');

    }

    async getBalance(balType) {
        let balArray = await this.page.$$(this.balances);
        if (balType == 'total') {
            // according to the DOM the first balance has an extra span
            return (await balArray[0].$('span')).innerText();
        }
        else if (balType == 'credit') {
            return (await balArray[1]).innerText();
        }
        else {
            return (await balArray[2]).innerText();
        }
    }
    /**
     * Method to navigate to home page using parent's method
     */
    async navigate() {
        await super.navigate('products');
    }
}
module.exports = HomePage;