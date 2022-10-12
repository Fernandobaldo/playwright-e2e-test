// https://playwright.dev/docs/pom
class HomePage {
    constructor(page) {
        // calling the parent class BasePage constructor - inheritance
        //selectors 
        this.page = page;

        this.productTitle = ('[row-index="0"]>[col-id="title"]');
        this.stock = ('[row-index="0"]>[col-id="stock"]');
        this.price = ('[row-index="0"]>[col-id="price"]');
        this.dialogBox = ('#cdk-dialog-2');
        this.titleField = ('#mat-input-2');
        this.descriptionField = ('#mat-input-3');
        this.priceField = ('#mat-input-4');
        this.stockField = ('#mat-input-5');
        this.submmitBtn = ('text=Submit');
        this.sortByPrice = ('[role="columnheader"][col-id="price"]');
        this.sortByStock = ('[role="columnheader"][col-id="stock"]');
        this.sortByDescription = ('[role="columnheader"][col-id="description"]');
        this.sortByBrand = ('[role="columnheader"][col-id="brand"]');
        this.sortByTitle = ('[role="columnheader"][col-id="title"]');
        this.toolBarHome = page.locator('mat-toolbar:has-text("Test Wizata")');

        //.toBeVisible()


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

        expect(await this.productTitle).not.toBeNull();
        expect(await this.toolBarHome).not.toBeNull();
        expect(await this.page.title()).not.toBeNull();

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
        else if (sortBy == 'description') {
            await this.page.click(this.sortByDescription);

        }
        else if (sortBy == 'title') {
            await this.page.click(this.sortByTitle);

        }

    }

    async navigate() {
        await super.navigate('products');
    }
}
module.exports = HomePage;