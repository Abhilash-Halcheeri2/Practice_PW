import { test, expect } from "@playwright/test";
import { TimeOut } from "./constants/constant";

test.describe("Drag and drop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
    );
    await page.waitForSelector("#header");
  });

  test("drag and drop", async ({ page }) => {
    const source = page.locator("[class='dragableBox'][id='box5']");
    await source.hover();
    await page.mouse.down(); //long click

    const des = await page.locator("[id='box106']");
    await des.hover();
    await page.mouse.up(); // mouse click release
  });

  test("aproch 2", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dragloc = await page.locator("#draggable");
    const drop = await page.locator("#draggable");
    await dragloc.dragTo(drop,{timeout:Number(TimeOut.MaxTime)});
  });

  test.only("draganddrop", async ({ page })=> {
    const source = page.locator("[class='dragableBox'][id='box5']");
    const des = await page.locator("[id='box106']");
    await source.dragTo(des);

    
  })
});
