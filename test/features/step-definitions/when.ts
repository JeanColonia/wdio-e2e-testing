import { When } from '@wdio/cucumber-framework';
import chai from 'chai';
import logger from '../../helpers/logger.ts';

import nopcommerceHomePage from '../../page-objects/nopcommerce.home.page.ts';




When(/^An as (.*) user login to nopcommerce site$/, async function (user) {

 if (!user) throw Error(`Inserterd user: ${user} is not valid`);
 user = user.trim().toUpperCase();
 try {

  await nopcommerceHomePage.navigateTo(`${process.env.TEST_NOP_BASEURL}${process.env.TEST_NOP_LOGIN}`);
  await nopcommerceHomePage.enterUsername(this.testid, process.env[`TEST_NOP_${user}_USERNAME`]);
  await nopcommerceHomePage.enterPassword(this.testid, process.env[`TEST_NOP_${user}_PASSWORD`]);

  await nopcommerceHomePage.login();

 } catch (error) {
  error = `Error trying to login to NOPCOMMERCE PAGE, ${error.message}`;
  throw error;
 }


 await browser.pause(10000);
});

