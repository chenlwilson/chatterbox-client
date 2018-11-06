var Friends = {

  makeFriends: function(event) {
    $('.username').on('click', this.toggleStatus());
  },

  toggleStatus: function() {
    $('.username').addClass('friend');
    //this.list.push()
  },

  list:[]
};
