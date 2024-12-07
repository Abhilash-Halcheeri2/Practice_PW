import { expect,test } from "@playwright/test";

test("Select Tag", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#country").selectOption({label:"Brazil"})
  await page.waitForTimeout(2000);
  await page.locator("#country").selectOption("Japan");
  await page.waitForTimeout(2000);
  await page.locator("#country").selectOption({value:"usa"});
//    counta.selectOption({lable:"Brazil"});
//    console.log(counta)
})

test.only("BootStrap DD",async ({page}) =>{
    await page.goto("https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree");
    await page.locator("#justAnInputBox").click()
    const options = await page.$$("[class='comboTreeDropDownContainer'] li");
   
    
})