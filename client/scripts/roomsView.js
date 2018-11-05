var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },

  renderRoom: function(room) {
    this.$select.append('<option>room</option>');
  },

  addRoom: function(room) {
    this.$button.click()
  }

};
