var Friends = {

  toggleStatus: function(username) {
    var friend = username.text();
    if(username.hasClass('friend')) {
      username.removeClass('friend');
      $('.'+friend).removeClass('friend');
    } else {
      username.addClass('friend');
      $('.'+friend).addClass('friend');
    }
  }
};
