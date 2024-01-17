import reporter from "../helpers/reporter.ts";
import Page from "./page.ts";




class NopCommerce extends Page {

 constructor() {
  super();
 }


 get UsernameInput() {
  return $("#Email");
 }

 get passwordInput() {
  return $("#Password");
 }


 get btn() {
  return $("button[type='submit']");
 }



 async enterUsername(testid: string, username: string) {
  if (!username) throw Error(`Error entering ${username}`);

  try {

   await this.typeInto(await this.UsernameInput, username);
   reporter.addStep(testid, "info", `Username entered successfuly...`);
  } catch (error) {

   error = `Username ${username} entered error, ${error.message}`;

   throw error;
  }
 }


 async enterPassword(testid: string, password: string) {
  if (!password) throw Error(`Error entering ${password}`);

  try {

   await this.typeInto(await this.passwordInput, password);
   reporter.addStep(testid, "info", `Password: ${password} entered successfuly...`);
  } catch (error) {

   error = `Password entered ${password} error, ${error.message}`;
   throw error;
  }

 }



 async login() {

  try {

   await this.click(await this.btn);

  } catch (error) {
   error = `Error click button to login...., ${error.message}`;
   throw error;
  }
 }




}



export default new NopCommerce();