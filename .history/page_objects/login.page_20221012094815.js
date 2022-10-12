const { expect } = require('@playwright/test');

const BasePage = require('./base.page');
class LoginPage extends BasePage {
    constructor(page){
        super(page);

        // selectors
        this.userNameTxt =  '#mat-input-0';
        this.passwordTxt =  '#mat-input-1';
        this.loginBtn = '.mat-button-wrapper';
        this.headerValue = page.locator('mat-card-header:has-text("Login")');
        this.toolBar = page.locator('mat-toolbar:has-text("Test Wizata")');

    }
 
    async navigate(){
       await super.navigate('login'); 
    }

    async login(username, password){
        await this.page.fill(this.userNameTxt,username);
        await this.page.fill(this.passwordTxt,password);
        await this.page.click(this.loginBtn);
        expect(await this.page.title()).not.toBeNull();
        expect(await page.locator('mat-card-header:has-text("Login")')).not.toBeNull();
        expect(await page.locator('mat-toolbar:has-text("Test Wizata")')).not.toBeNull();
    }
}
module.exports = LoginPage;