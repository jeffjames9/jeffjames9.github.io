// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {

// create a function "makeContact(id, nameFirst, nameLast)" that will 
// return the information as an object:
// => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
  
  var contact = {
    "id": id,
    "nameFirst": nameFirst,
    "nameLast": nameLast
  }; 
  return contact;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
     // create a makeContactList factory function
     // return an object that manages contacts variable 
     // length() should return the number of contacts
     // addContact(contact) should take a contact object and add it to contact-list
     // findContact(fullname) should take fullname and return contact object
     // if found or undefined if not
     // removeContact(contact) removes contact from contact list
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            return contacts.push(contact);
        },
        // iterate through the contacts array and see if any objects match
        // return object or undefined
        findContact: function(fullName) {
            for (var i = 0; i <= contacts.length - 1; i++) {
                if (contacts[i].nameFirst + " " + contacts[i].nameLast == fullName) {
                    return contacts[i];
                } else {return undefined;}
            }
            
        },
        removeContact: function(contact) {
            for (var i = 0; i <= contacts.length - 1; i++) {
                if (contact === contacts[i]) {
                    contacts.splice(i,1);
            }
        }
        },
        
        // create a printAllContactNames function which returns a string
        // which has each person's first and last name on one line
        // remember newline breaks.  no newline break after the last name.
        
        printAllContactNames: function() {
            var fullname1;
            var newString = "";
            for (let i = 0; i <= contacts.length - 1; i++) {
                fullname1 = contacts[i].nameFirst + " " + contacts[i].nameLast
                newString += fullname1;
                if (i != contacts.length - 1) {
                    newString += "\n";
                }
            };
            return newString;  
        }
            
        }
};



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
