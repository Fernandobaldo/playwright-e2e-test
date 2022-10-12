
const { chromium } = require('playwright');
const HomePage = require('../page_objects/home.page');
const LoginPage = require('../page_objects/login.page');

describe('Test Wizata Page', () => {
    jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let page = null;
    let homePage = null;
    let loginPage = null;
    let titleValue = null;
    let stockValue = null;
    let priceValue = null;
    let descriptionValue = null

    beforeAll(async () => {
        // we launch browser and navigate to the loginpage
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    afterAll(async () => {
        // closing browser
         await context.close();
         await browser.close();
    });

    it('Should be able to login', async () => {
        await loginPage.login('username@test.com', 'password');
        expect(await page.title()).not.toBeNull();
        expect(await page.title()).not.toBeNull();
        const pageBar = page.locator('.mat-toolbar')
        await page.locator(await pageBar).toBe('No Starch Press');
    })

    it('Should be able to update Stock', async () => {
        await homePage.updateStock('1');

        //await homePage.updateAssetCpt();

    })

    it('Should be able to update Price', async () => {

        await homePage.updatePrice('25');

        //await homePage.updateAssetCpt();

    })

    it('Should be able to update all fields', async () => {
        titleValue = '- update title';
        priceValue = '305';
        stockValue = '1';
        descriptionValue = 'update description'
        await homePage.updateAssetCpt(titleValue, stockValue, descriptionValue, priceValue);
        expect('#cdk-dialog-2').not.toBeNull();


    })
    it('Should be able to sorting by',  async() => {
        sortyBy = 'stock'
        await homePage.sortBy(sortyBy);

    })

});