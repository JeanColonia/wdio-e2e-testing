import { Given, When, Then } from '@wdio/cucumber-framework';
import chai from 'chai';


Given(/^a Web is opened/, async function () {

 await browser.url("https://the-internet.herokuapp.com/");
});

When(/^perform web Interactions/, async function () {

 await browser.debug();
});

