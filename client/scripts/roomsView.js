var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.click(Rooms.add);
  },

  render: function() {
  },

  renderRoom: function(room) {
    this.$select.append('<option>room</option>');
  },

};
