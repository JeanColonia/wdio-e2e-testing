import Page from "./page.ts";
import reporter from "../helpers/reporter.ts";


class CustList extends Page {


 constructor() {
  super();
 }

 get firstNameInput() {
  return $("#SearchFirstName");
 }

 get lastNameInput() {
  return $("#SearchLastName");
 }

 get searchButton() {
  return $("#search-customers");
 }

 get noResultsMessage() {
  return $("td=No data available in table");
 }



 get getCustomersMenu() {
  return $("(//i[@class='nav-icon far fa-user'])[1]");
 }


 get getCustomerSubMenuItem() {
  return $("(//a[@href='/Admin/Customer/List'])[1]")
 }

 async searchNameAndConfirm(testid: string, firstname_: string, lastname_: string): Promise<boolean> {


  let notExists = false;
  if (!firstname_ || !lastname_) throw Error(`Firstname ${firstname_} or lastname ${lastname_} is not valid...`);

  firstname_ = firstname_.trim();
  lastname_ = lastname_.trim();

  reporter.addStep(testid, "info", `Searching user:  ${firstname_} ${lastname_}`);
  try {

   await this.typeInto(await this.firstNameInput, firstname_);
   await this.typeInto(await this.lastNameInput, lastname_);
   await this.click(await this.searchButton);

   await browser.pause(1000);

   let noResults = await this.noResultsMessage.isDisplayed();

   noResults ? notExists = true : false;
  } catch (error) {

   error = `Error searching user ${firstname_} ${lastname_}, ${error.message}`;

   throw error;

  }

  return notExists;
 }



 async customersMenu() {
  try {
   await this.click(await this.getCustomersMenu);

   await browser.pause(1000);
   await this.click(await this.getCustomerSubMenuItem);

   await browser.pause(10000);
  } catch (error) {
   throw error;
  }
 }


}


export default new CustList();