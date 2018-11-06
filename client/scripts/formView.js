var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', this.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    var message = {
      username: App.username,
      text: $('input[type=text]').val(),
      roomname: RoomsView.$select.val()
    };
    event.preventDefault();
    Parse.create(message);
    console.log('click!');
    App.fetch();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
