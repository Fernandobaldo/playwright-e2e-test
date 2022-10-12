const { expect } = require('@playwright/test');

const BasePage = require('./base.page');
class LoginPage extends BasePage {
    constructor(page) {
        super(page);

        // selectors
        this.userNameTxt = await page.locator('mat-card-content div:has-text("email *")').nth(4);
        this.passwordTxt = page.locator('mat-card-content div:has-text("Password *")').nth(4);
        this.loginBtn = '.mat-button-wrapper';
        this.headerValue = page.locator('mat-card-header:has-text("Login")');
        this.toolBar = page.locator('mat-toolbar:has-text("Test Wizata")');

    }

    async navigate() {
        await super.navigate('login');
    }

    async login(username, password) {
        if (password.length > 2) {
            await this.page.fill(this.userNameTxt, username);
            await this.page.fill(this.passwordTxt, password);
            await this.page.click(this.loginBtn);
            expect(await this.page.title()).not.toBeNull();
            expect(await this.headerValue).not.toBeNull();
            expect(await this.toolBar).not.toBeNull();
            expect(await this.userNameTxt).not.toBeNull();
            expect(await this.passwordTxt).not.toBeNull();
        } else {
            
            console.log('should be greather than 2')
   
        
        }
    }
}
module.exports = LoginPage;