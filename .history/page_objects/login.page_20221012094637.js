const { expect } = require('@playwright/test');

const BasePage = require('./base.page');
class LoginPage extends BasePage {
    constructor(page){
        super(page);

        // selectors
        this.userNameTxt =  '#mat-input-0';
        this.passwordTxt =  '#mat-input-1';
        this.loginBtn = '.mat-button-wrapper';
    }
 
    async navigate(){
       await super.navigate('login'); 
    }

    async login(username, password){
        await this.page.fill(this.userNameTxt,username);
        await this.page.fill(this.passwordTxt,password);
        await this.page.click(this.loginBtn);
        expect(await this.page.title()).not.toBeNull();
    }
}
module.exports = LoginPage;