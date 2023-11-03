const { createApp } = Vue;
import { contactList } from "./data.js";

createApp({
  data() {
    return {
      contacts: contactList,

      activeContact: contactList[0],
      activeChat: false,
    };
  },
  methods: {
    active(person) {
      this.activeContact = person;
    },
    displayChat() {
      this.activeChat = !this.activeChat;
      console.log(this.activeChat);
    },
  },
}).mount("#app");
