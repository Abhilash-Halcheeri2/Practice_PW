import {expect, test} from "@playwright/test";

test.describe("assertion",()=>{
    test.beforeEach(async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.waitForSelector("[id='navbar']");
    })

    test("soft assertion", async ({page})=>{
        await page.getByTitle("Automation Testing Practice - Atom").getAttribute(type);
        expect("")

    })
})