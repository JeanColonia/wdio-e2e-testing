import { Then } from '@wdio/cucumber-framework';
import chai from 'chai';


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


 console.log(`ARRAY CON NÚMEROS --------> ${priceNumberArr}`);

 //validar que no existan menores o iguales que cero.

 let invalidPrices = priceNumberArr.filter(ele => ele <= 0);
 chai.expect(invalidPrices.length).to.equal(0);


})  