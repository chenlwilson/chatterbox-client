var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  //this function renders whatever is written in the renderRoom
  //input is what is selected (the dropdown of rooms)
  initialize: function() {
    //event handler that manipulates button upon click
    //refers to line 3
    RoomsView.$button.on('click', RoomsView.handleAddButton);
    //event handler that changes the room
    RoomsView.$select.on('change', RoomsView.selectRoom);
  },

  handleAddButton: function() {
    var roomname = prompt('Enter a new room')
    Rooms.add(roomname);
    Rooms.submitNewRoom(roomname);
  },

  selectRoom: function() {
    Parse.readAll((data) => {
      RoomsView.renderRoom(RoomsView.$select.val(), data)
    });
  },

  uniqRooms: function(data) {
    return _.uniq(_.map(data, function(message) {
      return message.roomname;
    }));
  },

  renderRoom: function(roomname, data) {
    $('#chats').empty();
    if(roomname === 'Lobby') {
      for(var i=0; i<data.results.length; i++) {
        MessagesView.renderMessage(data.results[i]);
      }
    } else {
      for(var i=0; i<data.results.length; i++){
        if(data.results[i].roomname === roomname) {
          MessagesView.renderMessage(data.results[i]);
        }
      }
    }
  }

};
