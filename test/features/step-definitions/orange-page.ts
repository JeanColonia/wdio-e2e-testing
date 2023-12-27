import { Given, When, Then } from '@wdio/cucumber-framework';
import chai from 'chai'

Given(/^Im in login page/, async () => {

 await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

});

When(/^I insert username: <username> and password: <password>(.*)/, async (username_, password_) => {

 const username = await $("input[name='username']");
 const password = await $("input[name='password']");

 await username.setValue(username_);
 await password.setValue(password_);

});

When(/^clicked on Login button/, async () => {

 const loginBtn = await $("button*=' Login ']");

 await loginBtn.click();
});

Then(/^Im in the home page and it match with this url (.*)/, (expectedURL) => {

});