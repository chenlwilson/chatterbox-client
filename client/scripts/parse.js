var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  //We need to understand how callBacks work
  create: function(message, successCB, errorCB = null) {
    //save a message to the server
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      // if invoking multiple functions upon success,
      // function(data) {
      //   successCB(data);
      //   console.log(data);
      // },
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  readRoom: function(roomname, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: {
        order: '-createdAt',
        where: `{"roomname": "${roomname}"}`
        //where: '{"roomname":"' + roomname + '"}'
        //where: `{'roomname':'ROOMII'}`
      },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};
