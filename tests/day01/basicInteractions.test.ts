import { expect, test } from "@playwright/test";

test("Interaction with inputs", async ({ page })=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const message = page.locator("input#user-message");
    await message.scrollIntoViewIfNeeded();
    //screen length is not visible so we can use the above func
    console.log(await message.inputValue());
    console.log(await message.getAttribute("placeholder"));
    expect(message).toHaveAttribute("placeholder","Please enter your Message");
    console.log('Before entering data: ' + await message.inputValue());
    await message.type("hi pari");
    console.log('After entering data: ' + await message.inputValue());
})

test("Sum", async({page})=>{
await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
const sum1input = page.locator("#sum1")
const sum2input = page.locator("#sum2")
const getValuesbtn = page.locator("//button[text()='Get values']")
let num1 = 121;
let num2 = 21;
await sum1input.type("" + num1);
await sum2input.type("" + num2);
await getValuesbtn.click()
const result = page.locator("#addmessage")
console.log(await result.textContent());
let expectedResult = num1 + num2;
expect(result).toHaveText("" + expectedResult)

})

test("Checkbox", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singleCheckbox = page.locator("id=isAgeSelected")
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();
})