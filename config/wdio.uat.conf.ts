
import { config as baseConfig } from '../wdio.conf.ts';


export const config = Object.assign(baseConfig, {
 environment: "UAT",
 saucedemoURL: "https://www.saucedemo.com/v1/"
})