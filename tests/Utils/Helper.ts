import {expect,Page,selectors,test} from "@playwright/test";
import {homepage} from "../../Selectors/Locators";


export class signInPage{
    protected _page:Page;

    constructor(page:Page){
        this._page=page
    }

    public get Page():Page{
        return this._page
    }
    public async signin(){
        await this._page.locator(homepage.logo).waitFor();
        await this._page.locator(homepage.name).fill("admin");
        await this._page.locator(homepage.name).fill("123");



    }
}