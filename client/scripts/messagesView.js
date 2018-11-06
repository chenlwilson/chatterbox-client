var MessagesView = {

  $chats: $('#chats'),
  $username: $('.username'),

  initialize: function() {

  },

  render: function() {

  },

  renderMessage: function(message) {
    var escapedMessage = {
      username: App.escape(message.username),
      text: App.escape(message.text)
    };
    this.$chats.append(MessageView.render(escapedMessage));
  },

};
