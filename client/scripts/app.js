var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Friends.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    //auto refresh every minute
    setInterval(function() {
      location.reload();
    }, 60000);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      console.log(data);
      // examine the response from the server request:
      //use for loop to parse message
      var uniqRooms = RoomsView.uniqRooms(data.results);
      uniqRooms.unshift('Lobby');

      uniqRooms.forEach(function(room) {
        Rooms.add(room);
      });

      for(var i=0; i<data.results.length; i++){
        //call upon renderMessage func of class MessagesView
        //extracts data from renderMessage output (aka the message)
        MessagesView.renderMessage(data.results[i]);
      };

      callback();
    });
  },



  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  //escaping solution
  escape: function(string) {
    var entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    };
    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
      return entityMap[s];
    });
  }

};
