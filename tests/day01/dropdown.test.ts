import { test } from "@playwright/test";
// test("handling dropdown", async({ page })=>{
//     await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
//     await page.selectOption("#select-demo",{
//        // label:"Tuesday"
//      //  value:"Friday"
//      index:4
//     })

//     await page.waitForTimeout(3000);

//     await page.selectOption("#multi-select",[
//         {
//         label:"Texas"
//          },
//         {
//         index:2
//         },
//         {
//         value:"Washington"
//         }
//     ])
// })

test.only("Bootstap", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await page.click("//span[@class='selection']//following::span[@class='select2-selection select2-selection--single']");
    await page.locator("//ul[@id='select2-country-results']",{
            has: page.locator("li",{
            hasText: "American Samoa"
            })
        }).click();
        await page.waitForTimeout(4000)

})