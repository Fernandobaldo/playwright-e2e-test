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
        this.dialogBox = ('#cdk-dialog-2');
        this.titleField = ('#mat-input-2');
        this.descriptionField = ('#mat-input-3');
        this.priceField = ('#mat-input-4');
        this.stockField = ('#mat-input-5');
        this.submmitBtn = ('.mat-button-wrapper');
        this.sortByStock = ('[col-id="stock"]');
        this.sortByDescription = ('[col-id="description"]');
        this.sortByBrand = ('[col-id="brand"]');
        this.sortByTitle = ('[col-id="title"]');

        
    }



    async updateAssetCpt(titleValue, stockValue, descriptionValue, priceValue) {
        await this.page.dblclick(this.productTitle);

        await this.page.click(this.titleField);
        await this.page.keyboard.press('Control+A');
        await this.page.type(this.titleField, titleValue);
        
        await this.page.click(this.descriptionField);
        await this.page.keyboard.press('Control+A');
        await this.page.type(this.descriptionField, descriptionValue);

        await this.page.click(this.priceField);
        await this.page.keyboard.press('Control+A');
        await this.page.type(this.priceField, priceValue);

        await this.page.click(this.stockField);
        await this.page.keyboard.press('Control+A');
        await this.page.type(this.stockField, stockValue);

        await this.page.click(this.submmitBtn);
       
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

    async sortBy(sortBy) {
        
        if (sortBy == 'stock') {
            await this.page.click(this.sortByStock);

        }
        else if (sortBy == 'brand') {
            await this.page.click(this.sortByBrand);

        }
        else if(sortBy == 'description') {
            await this.page.click(this.sortByDescription);

        }
        else if(sortBy == 'title') {
            await this.page.click(this.sortByTitle);

        }

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