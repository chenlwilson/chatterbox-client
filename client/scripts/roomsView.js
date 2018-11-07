var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  //this function renders whatever is written in the renderRoom
  //input is what is selected (the dropdown of rooms)
  handleAddButton: function() {
    RoomsView.renderRoom(RoomsView.$select.val());
  },

  selectRoom: function() {
    RoomsView.renderRoom(RoomsView.$select.val());
  },

  initialize: function() {
    //event handler that manipulates button upon click
    //refers to line 3
    RoomsView.$button.on('click', RoomsView.handleAddButton);
    //event handler that changes the room
    RoomsView.$select.on('change', RoomsView.selectRoom);
  },

  render: function() {

  },

  renderRoom: function(room) {
    //template roomname
    //escape roomname
    //goal: fetch data from server
    //only display messages from chose chatroom
    //array.filter(function(item) {})
    //$( "li" ).filter( ":even" ).css( "background-color", "red" );
    //_.filter(message, Paser.readAll().results, function(result) {});
    //if message has property roomname && message has property username
    //&& message.roomname === roomname, render the message

    //Chen's idea:
    //remove messages that don't belong in current chat room
    //Do we even need to do this? ->
    //Josh's Idea:
    //remove ALL current messages in the chat box
    this.$select.append('<option>room</option>');
  }

};
