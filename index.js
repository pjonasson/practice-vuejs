/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
    };
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "Hello Vue.js!",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    message: "Click Here!",
  },
});
