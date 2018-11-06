var MessageView = {
//goal: template function that renders message to html
  //render the username of the message
  //append to dom
  // .append()
  // ex) $( ".inner" ).append( "<p>Test</p>" );

  //var compiled = _.template("hello: <%= name %>");
  // compiled({name: 'moe'});
  // => "hello: moe"

  // var message = {
  //   username: 'shawndrost',
  //   text: 'trololo',
  //   roomname: '4chan'
  // };
  render: _.template(`
      <div class="chat">
        <div class="username"><%= username %></div>
        <div class="message"><%= text %></div>       
        <div></div>
      </div>
    `)

};
