import { Template } from 'meteor/templating';
import { Contacts } from '../../api/contacts/contacts.js';

Template.List_Contacts_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  contactsList() {
    console.log(Contacts.find());
    return Contacts.find();
  },
});