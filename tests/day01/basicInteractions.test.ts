import { expect, test } from "@playwright/test";

test("", async ({ page })=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const message = page.locator("input#user-message");
    await message.scrollIntoViewIfNeeded();
    //screen length is not visible so we can use the above func
    console.log(await message.inputValue());
    console.log(await message.getAttribute("placeholder"));
    expect(message).toHaveAttribute("placeholder","Please enter your Message");
    await message.type("hi pari");
})