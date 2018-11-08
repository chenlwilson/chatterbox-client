var Rooms = {

  add: function(roomname) {
    var template = _.template(`
    <option value ='<%= roomname %>'><%= roomname %></option>
    `);

    RoomsView.$select.append(template({roomname: roomname}));

  }

};
