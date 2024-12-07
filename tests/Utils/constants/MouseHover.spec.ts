import {test,expect, Locator} from '@playwright/test'
import { KeyBoardKeys } from './common';

test.describe("Actions",()=>{
    test.beforeEach(async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.waitForSelector("[id='navbar']");
    })

    test("Mouse hover", async ({page})=>{
        
        await page.getByTitle("Automation Testing Practice - Atom").getAttribute();
        expect("")

    })

    test("right click and db", async ({page})=>{
        let buttn:Locator;
     const fld= await page.locator("#field2")
      await expect(fld,"not empty").toBeEmpty()
     buttn =  await page.locator("[ondblclick='myFunction1()']")
      buttn.click({button:'right'});
      await page.waitForTimeout(2000)

      buttn.dblclick();
      await page.waitForTimeout(3000)
      const fldname = fld.textContent()
      expect(fld,"not matching").toHaveValue("Hello World!");
      await page.waitForTimeout(3000)

    })


    test("KeyBoard Key", async ({page})=>{
        
        await page.locator("#name").click();
        await page.waitForTimeout(2000);
        await page.keyboard.press(KeyBoardKeys.escapeKey);

    })
})