var MessagesView = {

  $chats: $('#chats'),
  $username: $('.username'),

  initialize: function() {
    MessagesView.$chats.on('submit', MessagesView.renderMessage);
  },

  render: function() {

  },

  renderMessage: function(message) {
    //uses escaping algorithm placed on app.js
    //converts username characters to a string for
    //security measures against xss attacks
    message.username = App.escape(message.username);
    message.text = App.escape(message.text);

    //renders "cleaned up" message username & text
    this.$chats.append(MessageView.render(message));
  },
    //we have message as a raw data that's not escaped
    //we want to escape username and text


};
