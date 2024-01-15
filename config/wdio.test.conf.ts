import { config as baseConfig } from '../wdio.conf.ts';

export const config = Object.assign(baseConfig, {

 environment: "TEST",
 sauceDemoURL: "https://www.saucedemo.com/v1",
 reqresBaseURL: "https://reqres.in"
})