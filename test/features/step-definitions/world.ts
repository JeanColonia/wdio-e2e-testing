import { World, setWorldConstructor } from '@wdio/cucumber-framework';
import chai from 'chai';


class WorldConstructor {

  appId: string;
  testid: string
  constructor() {

    this.appId = "",
      this.testid = ""
  }
}


setWorldConstructor(WorldConstructor);