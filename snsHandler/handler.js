'use strict';

module.exports.handler = function(event, context, cb) {
  console.log('calling handler with event');
  console.log(JSON.stringify(event,null,'\t'));
  var msgData = event.Records[0].Sns.Message;
  var json = JSON.parse(msgData);
  if(json.isGood){
    console.log('processing complete');
    return cb(null, {
      message: 'Go Serverless! Your Lambda function executed successfully!'
    });
  }else{
    console.log('faking an error');
    return cb({error: "let's fake an error"});
  }
};
