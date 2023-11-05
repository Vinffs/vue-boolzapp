const { createApp } = Vue;
import { contactList } from "./data.js";

createApp({
  data() {
    return {
      contacts: contactList,

      contactIndex: 0,
      activeChat: false,
      collapse: false,
      msgToSend: "",
      searchBar: "",
    };
  },
  methods: {
    active(id) {
      const index = this.contacts.findIndex((contact) => contact.id === id);
      return index !== -1 ? (this.contactIndex = index) : null;
    },

    // function that toggles this.activeChat based on what's clicked
    displayChat() {
      this.activeChat = !this.activeChat;
    },

    // function that scrolls the chat to the bottom
    scrollToLastMsg() {
      const chatContainer = this.$refs.chat;
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    },

    // creates a new SENT message and pushes it into the array of messages
    sendMsg() {
      this.activeContact.messages.push({
        date: new Date().toLocaleString(),
        message: this.msgToSend,
        status: "sent",
      });
      this.msgToSend = "";

      // scrollbar goes to bottom of chat in 10ms
      setTimeout(() => {
        this.scrollToLastMsg();
      }, 10);

      // calculated answer has a delay of 1 second
      setTimeout(() => {
        this.userAnswer();
      }, 1000);
    },

    // creates a new RECEIVED message and pushes it into the array of messages
    userAnswer() {
      this.activeContact.messages.push({
        date: new Date().toLocaleString(),
        message: "ok",
        status: "received",
      });
      // scrollbar goes to bottom of chat in 10ms
      setTimeout(() => {
        this.scrollToLastMsg();
      }, 10);
    },

    // gives the class "lastMsg" to the last message of the array
    isLastMsg() {
      const contact = this.activeContact;
      const lastMessage = contact.messages.length - 1;
      return lastMessage ? "lastMsg" : null;
    },

    // gives the d-flex justify-content (start or end) based on condition
    chatPosition(message) {
      let start = "justify-content-start";
      let end = "justify-content-end";
      return message.status === "sent" ? end : start;
    },

    // gives CSS class to message box based on condition
    isMessage(message) {
      return message.status === "sent" ? "sentMsg" : "receivedMsg";
    },

    // gives class "col-12" or "d-none" depending on condition (mobile version)
    isChatActive(collapse) {
      const condition = collapse ? !this.activeChat : this.activeChat;
      return condition ? "col-12" : "d-none";
    },

    // filters user input in the searchbar and returns user names that matches
    filterSearch(searchBar) {
      searchBar = searchBar.trimStart(" ").toUpperCase();
      this.contacts.forEach((contact) => {
        return contact.name.toUpperCase().includes(searchBar)
          ? (contact.visible = true)
          : (contact.visible = false);
      });
    },

    // gives last message sent
    lastMsg(id) {
      const contact = this.contacts.find((contact) => contact.id === id);
      let msgLength = contact.messages.length;
      return msgLength > 0
        ? contact.messages[msgLength - 1].message
        : "Non ci sono messaggi";
    },

    // gives back only the hour (2 digits hour, 2 digits min)
    lastHour(id) {
      const contact = this.contacts.find((contact) => contact.id === id);
      let msgLength = contact.messages.length;
      let lastDate = contact.messages[msgLength - 1].date;
      let lastHour = lastDate.slice(11, -3);
      return msgLength > 0 ? lastHour : "Orario non disponibile";
    },
  },
  computed: {
    // returns contact at position contactIndex
    activeContact() {
      const contact = this.contacts[this.contactIndex];
      return contact;
    },
    // Gives date and hour of last access
    lastDate() {
      const length = this.activeContact.messages.length;
      let lastDate = this.activeContact.messages[length - 1].date;
      return length > 0
        ? `Ultimo accesso il ${lastDate.slice(0, -9)} alle ore ${lastDate.slice(
            11,
            -3
          )}`
        : "Informazione non disponibile";
    },
  },
}).mount("#app");
