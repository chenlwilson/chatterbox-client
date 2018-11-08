var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //event handler that add a new room when clicked
    RoomsView.$button.on('click', RoomsView.handleAddButton);
    //event handler that changes message display based on the room selected
    RoomsView.$select.on('change', RoomsView.selectRoom);
  },

  handleAddButton: function() {
    //the new roomname is the input of the prompt
    var roomname = prompt('Enter a new room')
    Rooms.add(roomname);
    Rooms.submitNewRoom(roomname);
  },

  selectRoom: function() {
    //when a room is selected
    //fetch data from server
    //render only messages with the selected roomname
    Parse.readAll((data) => {
      RoomsView.renderRoom(RoomsView.$select.val(), data)
    });
  },

  uniqRooms: function(data) {
    //create a list of unique rooms for rendering in the select dropdown
    return _.uniq(_.map(data, function(message) {
      return message.roomname;
    }));
  },

  renderRoom: function(roomname, data) {
    //first clear all children div in #chats
    //if Lobby is selected, display all messages
    //if a roomname is selected, display messages with the selected roomname
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
