var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on('click', Rooms.add);
    //this.$select.on('change', this.render);
  },

  render: function() {

  },

  //var compiled = _.template("hello: <%= name %>");
  // compiled({name: 'moe'});
  // => "hello: moe"
  renderRoom: function(message) {
    var template = _.template(`
      <option value ='<%= roomname %>'><%= roomname %></option>
    `)
    var escapedRoom = {
      roomname: App.escape(message.roomname),
    };
    this.$select.append(template(escapedRoom));
  },

};
