// import {test,expect} from '@playwright/test'
// import { constant } from './constants/constant';

// test.describe("Alert dailog window handling", ()=>{

//     test.beforeEach(async ({page})=>{
//       await page.goto("https://testautomationpractice.blogspot.com/");
//         await page.waitForTimeout(constant.defaultMinTimeout);
//     });

//     test.only("alert", async ({page})=>{
//         await expect ( page.locator("[class='titlewrapper']")).toBeVisible();
//         await page.waitForTimeout(constant.defaultMinTimeout);
     
//       //  await page.getByRole('button',{name:"Alert"}).click();
//         page.on('dialog', async dialog =>{
//             expect (dialog.type()).toContain('alert');
//             expect (dialog.message()).toContain("I am an alert box")
//            const type = dialog.type()
//            console.log("test:1")
//            console.log(type + "-------------")
//             dialog.accept();

//             await page.locator("[class='widget-content'] [onclick='myFunctionAlert()']").click();

//         })
//     })
// })