var Friends = {

  initialize: function() {
    //when clicking on the username div, toggles friend status
    //apply css to all friends
    $('#chats').on('click', '.username', function() {
      Friends.toggleStatus($(this));
      Friends.highlightFriends();
    });

  },

  toggleStatus: function(username) {
    var friend = username.text();

    if(App.friendList[friend]) {
      App.friendList[friend] = !App.friendList[friend];
    } else {
      App.friendList[friend] = true;
    }

  },

  highlightFriends: function() {
    for (var friend in App.friendList) {
      if (App.friendList[friend] === true) {
        $('.'+friend).addClass('friend');
      } else {
        $('.'+friend).removeClass('friend');
      }
    }
  }

    //input (username) is any child element of #chats that contains username class
    //var friend is such element's text value, aka the username string

    // if(username.hasClass('friend')) {
    //   username.removeClass('friend');
    //   $('.'+friend).removeClass('friend');
    //   //if already a friend => no longer friend
    //   //remove friend class for other messages with the same username
    // } else {
    //   username.addClass('friend');
    //   $('.'+friend).addClass('friend');
    //   //if not a friend => add friend class
    //   //add friend class for other messages with the same username
    //   //.friend css displays username in blue
  //   }
  // }

};
