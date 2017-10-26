import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {first: 'Phillip', last: 'Johnson', address: '1680 East-West Rd.', telephone: '808-956-3489', email: 'pjohnson@hawaii.edu',},
  {first: 'Henri', last: 'Johnson', address: '1680 East-West Rd.', telephone: '808-956-4489', email: 'hjohnson@hawaii.edu',},
  {first: 'Kim', last: 'Johnson', address: '1680 East-West Rd.', telephone: '808-956-3429', email: 'kjohnson@hawaii.edu',},
  {first: 'David', last: 'Johnson', address: '1680 East-West Rd.', telephone: '808-956-3389', email: 'djohnson@hawaii.edu',},

];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
