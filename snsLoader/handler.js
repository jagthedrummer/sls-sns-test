'use strict';

const AWS = require('aws-sdk');

module.exports.handler = function(event, context, cb) {

  const sns = new AWS.SNS({params: {TopicArn: process.env.TOPIC_ARN}});

  for(var i = 0; i < 2; i++){
    const message = { msg: 'oh hai!', foo: 'bar', isGood: i === 0 };

    sns.publish({Message: JSON.stringify(message)}, function (err, data) {
      if(err){
        console.log('Error:', err);
        //return cb({ err });
      }else{
        console.log('Message published. Resp:',data);
        //return cb({ data });
      }
    });
  }

  return cb(null, {
    message: 'Go Serverless! Your Lambda function executed successfully!'
  });
};
