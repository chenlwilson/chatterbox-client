var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll();
  },

  render: function() {

  },

  renderMessage: function(message) {
    this.$chats.append(MessageView.render);
  },

};
