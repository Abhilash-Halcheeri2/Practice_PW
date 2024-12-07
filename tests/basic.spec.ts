import { expect,test} from "@playwright/test";
import { TIMEOUT } from "dns";


test.describe('Basic Test', () =>{
  

    // test.beforeEach(async({context, page})=>{
    //    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //    await page.waitForSelector("[class='orangehrm-login-branding']");
    //    const title = await page.title()
    //     await expect(title,'failed due to assertion').toContain("OrangeHRM")
   

    // })

    test.beforeEach(async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.waitForSelector("[id='navbar']");

    })
    test.afterEach(async({page})=>{
        await page.close();
    })
       
    test("test1", async ( {page} ) =>{   
        const btnName = await page.locator(".name");
        await page.waitForSelector()

        btnName.clear();
        
        btnName.fill("Alberto")

        // await page.locator(".name").fill("");
        await page.locator(".email").fill("Alberto@email.com");
        await page.locator("#form-control").click();
        // await page.getAttribute(class:"radio");
      const  radioButton ="[type='radio']";
    //   radioButton.
    //   await expect()
    //     await page.locator("[type='radio']").click()
        
    });

    test("Drop down",async ({page})=>{
        

    })
});
