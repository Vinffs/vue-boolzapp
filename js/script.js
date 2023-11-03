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
    scrollToLastMsg() {
      const chatContainer = document.querySelector(".chat");
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    },
    sendMsg() {
      this.activeContact.messages.push({
        date: new Date().toLocaleString(),
        message: this.msgToSend,
        status: "sent",
      });
      this.msgToSend = "";
      setTimeout(() => {
        this.scrollToLastMsg();
      }, 10);

      setTimeout(() => {
        this.userAnswer();
      }, 1000);
    },

    userAnswer() {
      this.activeContact.messages.push({
        date: new Date().toLocaleString(),
        message: "ok",
        status: "received",
      });
      setTimeout(() => {
        this.scrollToLastMsg();
      }, 10);
    },
  },
}).mount("#app");
