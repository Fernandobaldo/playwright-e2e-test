const BasePage = require('./base.page');
class LoginPage extends BasePage {
    constructor(page){
        super(page);

        // selectors
        this.userNameTxt =  page.selector('#mat-input-0');
        this.passwordTxt =  page.selector('#mat-input-1');
        this.loginBtn = 'button', { name: 'Submit' };
    }
 
    async navigate(){
       await super.navigate('login'); 
    }

    async login(username, password){
        await this.page.fill(this.userNameTxt,username);
        await this.page.fill(this.passwordTxt,password);
        await this.page.click(this.loginBtn);
    }
}
module.exports = LoginPage;