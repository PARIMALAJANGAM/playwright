import {chromium, expect, test} from "@playwright/test"

test("Login demo", async ()=>{
  const browser = await chromium.launch();
  const context = await  browser.newContext();
  const page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,' My account')]");
  await page.click("//span[text()[normalize-space()='Login']]");

//const newContext = await browser.newContext()

  const page1 = await context.newPage();
  await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
  
  await page.locator('[placeholder="E-mail Address"]').click();
  await page.locator('[placeholder="E-mail Address"]').fill('parimalajcse@gmail.com');
  await page.locator('[placeholder="E-mail Address"]').press('Tab');
  await page.locator('[placeholder="Password"]').fill('ramarajesh@123');
  await page.locator('input:has-text("Login")').click();
  await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
  await page.locator('text=Edit your account information').click();
  await page.locator('[placeholder="First Name"]').click();
  await page.locator('[placeholder="First Name"]').fill('parimalaa');
  await page.locator('text=Continue').click();
  await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/edit");
  await page.hover("//span[text()[normalize-space()='My account']]");
  await page.locator("//span[text()[normalize-space()='Logout']]").click();
  
  await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/logout");
})