var MessageView = {
//goal: template function that renders message to html
//MessageView DIFFERENT fromMessagesView
//Stick to format for message on learn

  //render the username of the message?
  //append to dom?
  // .append()
  // ex) $( ".inner" ).append( "<p>Test</p>" );

  //var compiled = _.template("hello: <%= name %>");
  // compiled({name: 'moe'});
  // => "hello: moe"

  // Josh's Notes:
  // key is variable (hello)
  // input is the whole object you want to put in
  // the arguement is the value of the key we made
  // render gets the value of these keys

  // Changes we made:
  // added line 26 (copied from line 25 og)
  // changed message to username (25)
  // changed message to text (26)
  render: _.template(`
      <div class="chat">
        <div class="username"><%= username %></div>
        <div class="text"><%= text %></div>
        <div></div>
      </div>
    `)

};
