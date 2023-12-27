import { Given, When, Then } from '@wdio/cucumber-framework';
import chai from 'chai';


Given(/^a Web is opened/, async function () {

 await browser.url("https://the-internet.herokuapp.com/dropdown");
});

When(/^perform web Interactions/, async function () {

 let ele = await $("//select/option[@selected='selected']");

 let val = await ele.getText();

 chai.expect(val).to.equal("Please select an option");




});

