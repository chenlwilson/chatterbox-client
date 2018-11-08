var Rooms = {

    add: function(roomname) {
      var template = _.template(`
        <option value ='<%= roomname %>'><%= roomname %></option>
      `);

      RoomsView.$select.append(template({roomname: roomname}));
    },

    submitNewRoom: function(roomname) {
      Parse.create({
        username: App.username,
        text: 'This is a brand new room!',
        roomname: roomname
      });
    }

};
