var express = require('express');
var router = express.Router();

router.post('/assign',function(request, response){
  request.accepts('application/json');

  var accessKey = 'YOUR_ACCESS_KEY';
  var accessSecret = 'YOUR_ACCESS_SECRET';
  var botName = 'YOUR_BOT_NAME'; // ex) assignBot
  var keyword = 'YOUR_KEYWORD';
  var managerId = 'MANAGER_TO_ASSIGN';
  var url = "http://api.channel.io/open/user_chats/";

  var body = request.body;
  if (body.event == 'push' && body.type == 'UserChat') {
    var userChat = body.entity;
    var message = body.refers.message.message;
    if (message.includes(keyword)) {
      var Client = require('node-rest-client').Client;
      var client = new Client();

      var args = {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-Access-Key": accessKey,
          "X-Access-Secret": accessSecret
        }
      };

      client.put(url + userChat.id + "/invite?" +
      "botName=" + botName + "&managerIds=" + managerId,
        args,
        function (data, res) {
          // parsed response body as js object
          console.log(data);

          response.status(res.statusCode).send();
        });
      }
    } else {
      response.status(200).send();
    }

    // input message handling
    console.log(body);
});

module.exports = router;
