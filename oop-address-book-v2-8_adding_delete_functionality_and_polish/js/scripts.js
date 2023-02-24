// Business Logic for AddressBook ---------
//TODO: AddressBook constructor
function AddressBook() {
  this.contacts = {};//AddressBook objects contain a property: An empty object called contacts// all of the Contact objects will be stored in the contacts property
  this.currentId = 0;//update the AddressBook constructor to instantiate new AddressBooks with a currentId property
}
//create a prototype method to add new Contacts to an AddressBook//takes a Contact object as an argument
//this.contacts, it means we're accessing the contacts property of the address book instance.
AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();//call this new AddressBook.prototype.assignId() method whenever we add a new Contact
  this.contacts[contact.id] = contact;//using a Contact's new id property as a key when we add the Contact to AddressBook
//Once an ID is assigned to the Contact object, the Contact is added to the address book's contacts property,
  //creating a new key in the address book's contacts property, and assigning it a value:

// this.contacts[contact.firstName] = contact;//Generally, a contact in a real database will have a unique ID to locate it. Soon, we'll refactor our code to do this. For now, we're using the Contact object's firstName property as an ID.
//bracket notation to create the key, because contact.id is a variable.
//= contact; is the Contact object that we pass into the method
};
/*
AddressBook.prototype.addContact = function(contact) {
  contact.id = this.currentId + 1;//call this new AddressBook.prototype.assignId() method whenever we add a new Contact
  this.contacts[contact.id] = contact;
}
*/
//TODO: AddressBook constructor + Contact constructor + addContact
//method will increment the this.currentId property on the AddressBook object by 1 and return the updated value.
AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function(id) {//takes an id as an argument
  if (this.contacts[id] !== undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

// Business Logic for Contacts ---------
//TODO: Contact constructor
//AddressBooks can only do one thing right now: store a list of contacts in key-value pairs
function Contact(firstName, lastName, phoneNumber, email, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.email = email;
  this.address = address;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

// User Interface Logic ---------
let addressBook = new AddressBook();//create a new AddressBook object named addressBook. This is a global variable

function listContacts(addressBookToDisplay) {
  let contactsDiv = document.querySelector("div#contacts");//we save the div that will contain our contacts in a variables called contactsDiv
  contactsDiv.innerText =  null; //ensures that the user can submit the form to create a new contact over and over and no duplicate contacts will be listed.
  const ul = document.createElement("ul");
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {//use Object.keys() to get all the keys from addressBookToDisplay.contacts
    //Object.keys() returns an array, so we can call any array method on the returned value
    //Array.prototype.forEach() to loop through the object keys.
    const contact = addressBookToDisplay.findContact(key);//grab a contact object by using our AddressBook.prototype.findContact() method.
    const li = document.createElement("li");
    li.append(contact.fullName());//create a new list item element for the contact. The text of the list item is set to the contact's full name,
    li.setAttribute("id", contact.id);//add an id attribute that is equal to the contact's id property
    ul.append(li);
  });
  contactsDiv.append(ul);
}

function displayContactDetails(event) {
  const contact = addressBook.findContact(event.target.id);
  document.querySelector(".first-name").innerText = contact.firstName;
  document.querySelector(".last-name").innerText = contact.lastName;
  document.querySelector(".phone-number").innerText = contact.phoneNumber;
  document.querySelector(".email").innerText = contact.email;
  document.querySelector(".address").innerText = contact.address;
  document.querySelector("button.delete").setAttribute("id", contact.id);
  document.querySelector("div#contact-details").removeAttribute("class");
}

function handleDelete(event) {
  addressBook.deleteContact(event.target.id);
  document.querySelector("button.delete").removeAttribute("id");
  document.querySelector("div#contact-details").setAttribute("class", "hidden");
  listContacts(addressBook);
}

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedFirstName = document.querySelector("input#new-first-name").value;
  const inputtedLastName = document.querySelector("input#new-last-name").value;
  const inputtedPhoneNumber = document.querySelector("input#new-phone-number").value;
  const inputtedEmail = document.querySelector("input#new-email").value;
  const inputtedAddress = document.querySelector("input#new-address").value;
//Gather user-provided input from the form fields for first name, last name, and phone number, and assign them to the variables inputtedFirstName, inputtedLastName, and inputtedPhoneNumber
  let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail, inputtedAddress);//Create a new Contact object, passing in this gathered information as arguments, and saving the new Contact object in the variable newContact.
  addressBook.addContact(newContact);//Add the newContact to our AddressBook using the AddressBook.prototype.addContact()
  // console.log(addressBook.contacts);
  listContacts(addressBook);
  document.querySelector("input#new-first-name").value = null;
  document.querySelector("input#new-last-name").value = null;
  document.querySelector("input#new-phone-number").value = null;
  document.querySelector("input#new-email").value = null;
  document.querySelector("input#new-address").value = null;
}

window.addEventListener("load", function (){
  document.querySelector("form#new-contact").addEventListener("submit", handleFormSubmission);
  document.querySelector("div#contacts").addEventListener("click", displayContactDetails);
  document.querySelector("button.delete").addEventListener("click", handleDelete);
});