import { expect, Page, test } from "playwright/test";
import { constant } from "./constants/constant";

test.describe("WindowHandle",()=>{
    
    

    test.beforeEach(async({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
    })

    test("Multiple window", async ({ page }) => {
        let popUpPage: any;
       // let popupPage: Page;
      const beforeCount = page.context().pages().length;
      console.log(beforeCount)

     [popUpPage] = await Promise.all([
        page.waitForEvent('popup', { timeout: Number(constant.MaxTime )}),
         page.locator("//a[contains(text(),'OrangeHRM, Inc')]").click()
      ]);

      console.log(page.context().pages().length)
        // await popUpPage.waitForSelector("[type='email']")
        //await popUpPage.waitForTimeout(3000)
      const email =await popUpPage.locator("[type='email']")
      
    
     await popUpPage.locator(email).click();
      await popUpPage.locator(email).fill("masdahbfjadhbvkjbdkvjb")




    });

})