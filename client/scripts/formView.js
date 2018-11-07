var FormView = {
  //grabs form element in index.html (utilizing jquery $ symbol)
  $form: $('form'),
  //when submit is clicked, handleSubmit function is run (invoked)
  initialize: function() {
    FormView.$form.on('submit', this.handleSubmit);
  },
  //jquery has .on function that can be given a "click", "mouseover", etc
  //event is the submit (input)
  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    //right now, it automatically submits the form, and
    //event.preventDefault stops this default action
    event.preventDefault();

    var message = {
      username: App.username,
      text: $( 'input[type=text]').val(),
      roomname: $('select').val()
    }

    var clearAfterSubmit = function() {
      $('#message').val('');
      RoomsView.renderRoom($('select').val());
    };

    //create event that follows the click
    Parse.create(message, clearAfterSubmit());

    console.log('click!');
    App.fetch();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    //attr can be toggled? from active to not active?
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
