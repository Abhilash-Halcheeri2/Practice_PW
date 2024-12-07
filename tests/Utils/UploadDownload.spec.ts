import { expect,test } from "@playwright/test";
import { createFiles, FileMimeType, FileSizeInBytes, generateRandomString } from "./constants/common";
import {  TimeOut } from "./constants/constant";

test.describe("downloadtest", async()=>{
    const fs = require('fs');
    const path = require('path');
    const fileName = "file" + generateRandomString(5)+ ".jpeg"
    const downloadPath = path.join(__dirname,fileName);
    const filePath = path.join(downloadPath, fileName);

    // test.beforeAll(async () => {
    //     if (!fs.existsSync(downloadPath)) {
    //       fs.mkdirSync(downloadPath);
    //     }
    //   });

  // Usage: Generate a random string of 10 characters
      const randomString = generateRandomString(10);
      console.log(randomString);
      

    // test.afterAll(() => {
    //    // const filePath = path.join(downloadPath, fileName);
      
    //     // Check if the file exists and delete it
    //     if (fs.existsSync(filePath)) {
    //       fs.unlinkSync(filePath); // Delete the file
    //       console.log(`${fileName} has been deleted.`);
    //     }
    //   });

test("Download", async ({page})=>{
    
    await page.goto("https://demoqa.com/upload-download");
   await page.waitForSelector("[id='app']");
  // await page.locator("[id='downloadButton']");

   const [download]= await Promise.all([
    page.waitForEvent('download'), // Wait for the download event
    page.click('#downloadButton'), // Click button to download
   ]);
  // const filePath = path.join(downloadPath, fileName);
   await download.saveAs(filePath);
   console.log("dnwld" + downloadPath);
   console.log("flpth" + filePath);

     //Read the file and validate its contents
    //  const fileContent = fs.readFileSync(filePath, fileName);
    //  console.log(fileContent);
    //  expect(fileContent).toContain('Expected content'); // Adjust validation as necessary

   });

   test.only("Upload Files", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
     const File1 =  createFiles(
       FileSizeInBytes.OneKiloByte,
       generateRandomString(5),
       FileMimeType.Pdf
     );
     const [filechooser] = await Promise.all([
       page.waitForEvent("filechooser", {timeout: Number(TimeOut.MaxTime)}),
       page.locator("#singleFileInput").click()
     ]);
   await filechooser.setFiles(File1);
    
   await page.waitForTimeout(TimeOut.MaxTime)
   });
})
