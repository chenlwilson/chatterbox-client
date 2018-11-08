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
    RoomsView.renderRoom(RoomsView.$select.val());
  },

  render: function() {

  },

  renderRoom: function(roomname) {
    //$('.chat').not($('.'+roomname)).remove();

  }

};
