var Rooms = {

    //add a new room option to the select dropdown
    add: function(roomname) {
      var template = _.template(`
        <option value ='<%= roomname %>'><%= roomname %></option>
      `);
      RoomsView.$select.append(template({roomname: roomname}));
    },

    //when a new room is created
    //send the new room name to the server
    //send the first message created in this room
    submitNewRoom: function(roomname) {
      Parse.create({
        username: App.username,
        text: 'This is a brand new room!',
        roomname: roomname
      });
    }

};
