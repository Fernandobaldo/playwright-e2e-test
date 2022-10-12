// https://playwright.dev/docs/pom
const BasePage = require('./base.page');
class HomePage extends BasePage {
    constructor(page){
        // calling the parent class BasePage constructor - inheritance
        super(page);
        //selectors
        this.productTitle = ('[comp-id="102"]');
        this.balances = '.balance-value';
    }
    
    /**
     * Method to retrieve the username 
     * @returns {string} username logged
     */
    async getUserName(){
       await this.page.dblclick(this.productTitle);
     
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