import { Given } from '@wdio/cucumber-framework';
import chai from 'chai';
import logger from '../../helpers/logger.ts';

import sauceHomePage from '../../page-objects/sauce.home.page.ts';
import reporter from '../../helpers/reporter.ts';
import apiHelper from '../../helpers/apiHelper.ts';
import fs from "fs";

import constants from '../../../data/constants.json' assert{ type: "json"};

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


});




Given(/^Get list of (.*) from reqres.in$/, async function (endpointRef) {


 let testid = this.testid;
 let endpoint = "";
 let relativeFileName = "api-results.json";

 try {
  if (!endpointRef) throw Error(`Given endpoint reference ${endpointRef} is not valid`);


  reporter.addStep(this.testid, "info", `Getting payload data from the endpoint: ${endpointRef}`);


  if (endpointRef.trim().toUpperCase() === "USERS") {
   endpoint = constants.REQRES.GET_USERS;
  }
  else {
   throw Error(`Error handling endpoint reference USERS`);
  }

  if (!endpoint) throw Error(`Error  getting endpoint ${endpoint}`)


  let res;


  //calling the GET method from apiHelper.ts file (superTest supported as a dependecy for that)
  await browser.call(async () => {

   res = await apiHelper.GET(testid, process.env.REQRESBASEURL, endpoint, "", constants.REQRES.QUERY_PARAMS);
   if (res.status !== 200) throw Error(`Failed getting users from endpoint ${process.env.REQRESBASEURL}${endpoint}`);

  })


  reporter.addStep(this.testid, "debug", `API response received, data ${JSON.stringify(res.body)}`);





  let data = JSON.stringify(res.body, undefined, 4);
  let absoluteFileName = `${process.cwd()}/data/api-res/${relativeFileName}`;


  fs.writeFileSync(absoluteFileName, data);

  reporter.addStep(this.testid, "info", `API response data storaged in json file ---> /data/api-res/ "file"`);

  if (data.length === 0) {
   throw Error(`Error handling request to reqres.in, endpoint reference  ${endpointRef}failed....`);
  }

 } catch (error) {

  error = `Api Request to reqres.in ERROR - path ${process.env.REQRESBASEURL}${endpoint}`;
 }

});



