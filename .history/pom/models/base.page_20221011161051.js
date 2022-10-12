class BasePage{
    constructor(page){
        this.page = page;
    }

    async navigate(path){
        await this.page.goto(`http://localhost:4200/${path}`)
    }
}
module.exports = BasePage;