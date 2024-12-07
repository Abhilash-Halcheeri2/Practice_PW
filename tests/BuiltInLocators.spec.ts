import { expect,test } from "@playwright/test";
import { TIMEOUT } from "dns";
test("Buil-In-Locators", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForSelector("[class='orangehrm-login-branding']");
    
    //await page.waitForTimeout(5000)

   const logo= await page.getByAltText("company-branding");
   const name= await page.getByPlaceholder("Username");
   console.log(logo);
   await expect(logo).toBeVisible();
   await name.fill("asdfg");

})

test.only("buildin abhibus", async ({page}) =>{
    await page.goto("https://www.abhibus.com/");
   const logo = await page.locator("[id='abhibus-logo']");
   await page.waitForSelector("[id='abhibus-logo']");
    await expect(logo).toBeVisible();
    await page.waitForTimeout(3000)
    // await page.locator("[title='Get Up to Rs.500 Off on 1st Booking']").click();
   //const appAndroid = await page.getByAltText("Dussehra Dhamaka: Win Free Bus Vouchers up to ₹1000!");
  
  // appAndroid.click();
//     const playstoreLogo = await page.locator("[id='abhibus-logo']");
//    await expect(playstoreLogo).toBeVisible();
//    await page.evaluate('document.querySelector("").getAttribute("")');
    await page.getByRole('link',{name:'Hotels'}).click();
    await page.goBack();
    await page.getByText("Trains").click();
    await page.waitForTimeout(3000)
})

test("bultin OrangeHRM", async ({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForSelector("[class='orangehrm-login-branding']");
    
    await expect(page.getByAltText("company-branding")).toBeVisible();
    
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByRole('textbox',{name:'password'}).fill("1234");
    await page.locator('button',{ hasText:'submit'}).click();
   
   
    //txtbx.click();
    await page.waitForTimeout(2000)
   // txtbx.clear();
   // txtbx.fill("Admin");

});