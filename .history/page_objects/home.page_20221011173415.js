// https://playwright.dev/docs/pom
const BasePage = require('./base.page');
class HomePage extends BasePage {
    constructor(page){
        // calling the parent class BasePage constructor - inheritance
        super(page);
        //selectors
        this.productTitle = page.locator('body > y42-root > y42-navigation > mat-sidenav-container > mat-sidenav-content > div > y42-products > div > y42-product-list > ag-grid-angular > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-animation > div.ag-center-cols-clipper > div > div > div.ag-row-even.ag-row-no-focus.ag-row.ag-row-level-0.ag-row-position-absolute.ag-row-first > div:nth-child(1)');
        this.balances = '.balance-value';
    }
    
    /**
     * Method to retrieve the username 
     * @returns {string} username logged
     */
    async getUserName(){
       await this.page.dlclick().$(this.productTitle);
     
    }
    /**
     * Method to retrieve the balance typ
     * @param {string} balType : 'total', 'credit', 'due today'
     * @returns string
     */
    async getBalance(balType){
        let balArray  = await this.page.$$(this.balances);
        if(balType == 'total'){
            // according to the DOM the first balance has an extra span
            return (await balArray[0].$('span')).innerText();
        }
        else if(balType ==  'credit'){
            return (await balArray[1]).innerText();
        }
        else {
            return (await balArray[2]).innerText();
        }
    }
    /**
     * Method to navigate to home page using parent's method
     */
    async navigate(){
        await super.navigate('products'); 
    }
}
module.exports = HomePage;