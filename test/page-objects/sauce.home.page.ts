import Page from '../page-objects/page.ts';
import chai from 'chai';
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

  if (!username) throw Error(`Error entering ${username}`);
  username = username.trim();

  try {
   await this.typeInto(await this.usernameInput, username);
   reporter.addStep(testid, "info", `Username ${username} entered successfuly`);
  } catch (error) {
   error = `Error entering ${username}, ${error.message}`;
   throw error;

  }
 }


 async enterPasswrod(testid: string, password: string) {
  if (!password) throw Error(`Error entering ${password}`);
  password = password.trim();

  try {
   await this.typeInto(await this.passwordInput, password);
   reporter.addStep(testid, "info", `Password ${password} entered successfuly.`);
  } catch (error) {
   error = `Error entering password ${password}, ${error.message}`;
   throw error;
  }
 }


 async Login(testid: string) {

  try {
   await this.click(await this.loginBtn);
   reporter.addStep(testid, "info", `Button ${this.loginBtn} clicked successfuly.`);
  } catch (error) {
   error = `Error clicking ${this.loginBtn}, ${error.message}`;
   throw error;
  }
 }

}