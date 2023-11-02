const { createApp } = Vue;
import { contactList } from "./data.js";

createApp({
  data() {
    return {
      contacts: contactList,

      activeContact: contactList[0],
    };
  },
  methods: {
    active(person) {
      this.activeContact = person;
    },
  },
}).mount("#app");
