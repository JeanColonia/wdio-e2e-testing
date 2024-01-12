import Page from '../page-objects/page.ts';
import chai, { use } from 'chai';
import reporter from '../helpers/reporter.ts';


class HomePage extends Page {

 constructor() {
  super();
 }

 // setting elements (Objects)


 get usernameInput() {
  return $("#user-name");
 }


 get passwordInput() {
  return $("#password");
 }

 get loginBtn() {
  return $("#login-button");
 }


 // Setting actions

 async enterUsername(testid: string, username: string) {
  if (!username) throw Error(`Error entering ${username}...`);
  username = username.trim();
  try {
   await this.typeInto(await this.usernameInput, username);
   reporter.addStep(testid, "info", `Username ${username}  entered successfuly...`);
  } catch (error) {
   error = `Username ${username} entered error, ${error.message}`;
   throw error;

  }


 }


 async enterPasswrod(testid: string, pass: string) {
  if (!pass) throw Error(`Error entering ${pass}...`);
  pass = pass.trim();
  try {
   await this.typeInto(await this.passwordInput, pass);
   reporter.addStep(testid, "info", `Password ${pass} entered successfuly...`);
  } catch (error) {

   error = `Password ${pass} entered error, ${error.message}`;
   throw error;

  }

 }


 async Login() {


  await this.click(await this.loginBtn);

 }

}


export default new HomePage();