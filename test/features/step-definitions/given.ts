import { Given } from '@wdio/cucumber-framework';
import chai from 'chai';
import logger from '../../helpers/logger.ts';

import sauceHomePage from '../../page-objects/sauce.home.page.ts';
import reporter from '../../helpers/reporter.ts';

Given(/^Login to inventory Web$/, async function (table) {

 let tb = table.hashes();


 let username = tb[0].username;

 let password = tb[0].password;
 await sauceHomePage.navigateTo(process.env.SAUCE_DEMO_URL);
 /***** Inserting login credentials */


 await sauceHomePage.enterUsername(this.testid, username);
 await sauceHomePage.enterPasswrod(this.testid, password);
 await sauceHomePage.Login();

 reporter.addStep(this.testid, "info", "Success login to inventory website...");


})