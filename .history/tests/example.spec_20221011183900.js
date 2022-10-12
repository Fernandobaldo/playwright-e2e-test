
const { chromium } = require('playwright');
const HomePage = require('../page_objects/home.page');
const LoginPage = require('../page_objects/login.page');

describe('Applitools demo page', () => {
    jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let page = null;
    let homePage  = null;
    let loginPage  = null;
    let titleValue = null;
    let brandValue = null;
    let descriptionValue = null

    beforeAll( async ()=>{
        // we launch browser and navigate to the loginpage
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    afterAll( async ()=>{
        // closing browser
      //  await context.close();
      //  await browser.close();
    });
    
    it('Should be able to login', async() => {
       await loginPage.login('username@test.com','password');
       expect(await page.title()).not.toBeNull();
    })

    it('Should be able to update Stock', async() => {
        await homePage.updateStock('301');        
             
        //await homePage.updateAssetCpt();

    })

    it('Should be able to update Price', async() => {     
        await homePage.updatePrice('21'); 

        //await homePage.updateAssetCpt();

    })

    it('Should be able to update all fields', async() => {  
        //titleValue = 'update title';
       // brandValue = 'update brand';
        //descriptionValue = 'update description'
        await homePage.updateAssetCpt();
        expect('#cdk-dialog-2').toBeNull();


    })
    // it('Should have total balance of $350',  async() => {
    //    expect(await homePage.getBalance('total')).toBe('$300');
    // })

    // it('Should have credit available of $17800',  async() => {
    //     expect(await homePage.getBalance('credit')).toBe('$17800');
    // })

    // it('Should have due today of $180',  async() => {
    //     expect(await homePage.getBalance('due')).toBe('$180');
    // })
});