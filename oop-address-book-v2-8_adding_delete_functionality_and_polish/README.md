Describe: addContact 
Test: "It should add contact." 
Code:
let addressBook = new AddressBook();
let contact = new Contact("Ada", "Lovelace", "503-555-0100");
let contact2 = new Contact("Grace", "Hopper", "503-555-0199");
addressBook.addContact(contact);
addressBook.addContact(contact2);
Output: 
AddressBook {
    contacts{//firstName as ID
        Ada: Contact,
        Grace: Contact
    }
}