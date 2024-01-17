import { Then } from '@wdio/cucumber-framework';
import chai from 'chai';
import reporter from '../../helpers/reporter.ts';
import fs from "fs";

import nopcommerceCustlistPage from '../../page-objects/nopcommerce.custlist.page.ts';
import customerPage from '../../page-objects/nopcommerce.custlist.page.ts';


Then(/^inventory page should list (.*) products$/, async function (numberOfProducts) {


 if (!numberOfProducts) throw Error(`Invalid number of products provided ${numberOfProducts}`);

 let arrProducts = await $$(".inventory_item_name");

 chai.expect(arrProducts.length).to.equal(parseInt(numberOfProducts));

});


Then(/^validate all products have a valid price$/, async () => {


 let pricesStr = await $$(".inventory_item_price");

 let priceStrArr: string[] = [];
 let priceNumberArr = [];


 for (let i = 0; i < pricesStr.length; i++) {
  let eleStr = await pricesStr[i].getText();

  priceStrArr.push(eleStr);


 }

 //cambiar a numerico


 priceNumberArr = priceStrArr.map(ele => parseInt(ele.replace("$", "")));



 //validar que no existan menores o iguales que cero.

 let invalidPrices = priceNumberArr.filter(ele => ele <= 0);
 chai.expect(invalidPrices.length).to.equal(0);



});




Then(/^Verify if all users exist in customers list$/, async function () {

 try {


  await customerPage.customersMenu();


  reporter.addStep(this.testid, "info", `Navigating to Customers page`);


  //Getting Customer data values from json file before storaged with API.

  let file = `${process.cwd()}/data/api-res/api-results.json`;

  let data = fs.readFileSync(file, "utf8");

  let dataObject = JSON.parse(data);



  let numberDataObject = dataObject.data.length;
  let arr = [];

  for (let i = 0; i < numberDataObject; i++) {

   let firstname = dataObject.data[i].first_name;
   let lastname = dataObject.data[i].last_name;

   let obj = {};

   let customerNotFound = await nopcommerceCustlistPage.searchNameAndConfirm(this.testid, firstname, lastname);

   if (customerNotFound) {

    obj["firstname"] = firstname;
    obj["lastname"] = lastname;

    arr.push(obj);
   }

  }


  if (arr.length > 1) {

   //creamos el file json a guardar con la data de customers


   let data = JSON.stringify(arr, undefined, 4);
   let filePath = `${process.cwd()}/results/customer-list-not-found.json`;


   fs.writeFileSync(filePath, data);

  }

 } catch (error) {

  error = `Error on customer validation, ${error.message}`;

  throw error;
 }


})