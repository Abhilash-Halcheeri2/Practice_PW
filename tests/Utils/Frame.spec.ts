import {expect,test,Frame,FrameLocator}  from '@playwright/test'
import { TimeOut } from './constants/constant';
import { TIMEOUT } from 'dns';

test.describe("Frame",()=>{
    

    test.beforeEach(async({page})=>{
       await page.goto("https://ui.vision/demo/webtest/frames/");
       //await page.waitForSelector("[name='name1']",{timeout:Number(constant.defaultMinTimeout)})
       expect(await page.title(),"Title miss mathed").toContain("Frames - Web Automation Test")


    });

    test("frames using link or url", async ({ page }) => {
      let frm: Frame | null;
      const fr = page.frames();
      console.log(fr.length);

      //src atribute value=link or url
      frm =  page.frame({
        url: "https://ui.vision/demo/webtest/frames/frame_1.html",
      });
      await frm
        ?.locator("[name='mytext1']")
        .click({ timeout: Number(TimeOut.defaultMinTimeout) });
      await frm?.locator("[name='mytext1']").fill("Name234");
      //await frm?.fill();
    });

    test("Frames using locator", async({page})=>{
       const frm = page.frameLocator("[src='frame_2.html']")
      await frm.locator("[name='mytext2']").fill("Frame aproach2");
       
    })

    // test("Inner/Nested Frames", async ({page})=>{
    //  const frm =  await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
    //   const childFrames = frm.childFrames();
    //   await childFrames[0].locator("[class='docssharedWizToggleLabeledContainer Yri8Nb'][for='i19']").click();
    //   await page.waitForTimeout(constant.defaultMinTimeout)

    // })

})