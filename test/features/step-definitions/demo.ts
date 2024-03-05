import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from 'chai'
Given(/^Google page is opened/, async function () {
 await browser.url("https://www.google.com")

})

When(/^Search with (.*)/, async function (searchItem) {

 console.log(`>>>>> searchItem:  ${searchItem}`)

 let element = await $(".gLFyf")
 await element.setValue(searchItem)
 await browser.pause(5000);
 await browser.keys("\uE007");

});


Then(/^Click on the first search result/, async function () {


 const title = await $("h3[class='LC20lb MBeuO DKV0Md']");
 await browser.pause(5000);
 await title.click();
});

Then(/^URL should match (.*)/, async function (expectedResult) {

 await browser.pause(5000);
 let url = await browser.getUrl();
 chai.expect(url).to.equal(expectedResult);

});

