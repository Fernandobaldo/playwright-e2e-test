
    async function navigate() {
        await this.page.goto('http://localhost:4200/login');
    }

    async function login(username, password) {
        if (password.length > 3) {
            await this.page.fill(this.userNameTxt, username);
            await this.page.fill(this.passwordTxt, password);
            await this.page.click(this.loginBtn);
            expect(await this.page.title()).not.toBeNull();
            expect(await this.headerValue).not.toBeNull();
            expect(await this.toolBar).not.toBeNull();
            expect(await this.userNameTxt).not.toBeNull();
            expect(await this.passwordTxt).not.toBeNull();
            
        } else {
            console.log('Password should be greather than 2') 
            this.page.close();      
        }
    }