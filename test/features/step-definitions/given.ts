import { Given } from '@wdio/cucumber-framework';
import chai from 'chai';
import logger from '../../helpers/logger.ts';
import reporter from '../../helpers/reporter.ts';

Given(/^Login to inventory Web$/, async function (table) {



 let tb = await table.hashes();

 /**** Setting and Opening Inventory page */
 await browser.url("https://www.saucedemo.com/v1/");
 await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });

 /***** Inserting login credentials */

 const username = await $("#user-name");
 const password = await $("#password");
 const loginBtn = await $("#login-button");
 await username.setValue("standard_user");
 await password.setValue("secret_sauce");

 await loginBtn.click();

 await browser.pause(2000);

 let appId = "ABC123";
 this.appId = appId;

 reporter.addStep(this.testid, "info", "Success login to inventory website...");


})