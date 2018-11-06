var MessagesView = {

  $chats: $('#chats'),
  $username: $('.username'),

  initialize: function() {

  },

  render: function() {

  },

  renderMessage: function(message) {
    var escapedMessage = {
      username: this.escape(message.username),
      text: this.escape(message.text)
    };
    this.$chats.append(MessageView.render(escapedMessage));
    this.$username.on('click', Friends.toggleStatus());
  },

  escape: function(string) {
    var entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    };
    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
      return entityMap[s];
    });
  }

};
