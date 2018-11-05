var MessagesView = {

  $chats: $('#chats'),
  $username: $('.username'),

  initialize: function() {

  },

  render: function() {

  },

  renderMessage: function(message) {
    this.$chats.append(MessageView.render(message));
    this.$username.on('click', Friends.toggleStatus());
  },

};
