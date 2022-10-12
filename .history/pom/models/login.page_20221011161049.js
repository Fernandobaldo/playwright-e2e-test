const BasePage = require('./Base.page');
class LoginPage extends BasePage {
    constructor(page){
        super(page);

        // selectors
        this.userNameTxt =  'mat-card-content div:has-text("email *")';
        this.passwordTxt =  'mat-card-content div:has-text("Password *")';
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