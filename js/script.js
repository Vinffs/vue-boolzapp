const { createApp } = Vue;
import { contactList } from "./data.js";

createApp({
  data() {
    return {
      contacts: contactList,

      activeContact: contactList[0],
      activeChat: false,
      msgToSend: "",
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
    sendMsg() {
      this.activeContact.messages.push({
        date: new Date().toLocaleString(),
        message: this.msgToSend,
        status: "sent",
      });
      this.msgToSend = "";
    },
  },
}).mount("#app");
