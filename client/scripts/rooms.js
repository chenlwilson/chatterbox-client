var Rooms = {

  add: function() {
    var roomname = prompt('Enter a new room')
    RoomsView.renderRoom({roomname: roomname});
    Parse.create({
      username: App.username,
      text: 'This is a brand new room!',
      roomname: roomname
    });
  },
  roomnames: {

  }

};
