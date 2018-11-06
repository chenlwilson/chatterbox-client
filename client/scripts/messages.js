// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };


var Messages = {

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
  },

  escaped: {
    username: this.escape(message.username),
    text: this.escape(message.text)
  }

};
