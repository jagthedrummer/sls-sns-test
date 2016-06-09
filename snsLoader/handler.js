'use strict';

const AWS = require('aws-sdk');

module.exports.handler = function(event, context, cb) {

  const sns = new AWS.SNS({params: {TopicArn: process.env.TOPIC_ARN}});

  sns.publish({Message: 'oh hai!'}, function (err, data) {
    if(err){
      console.log('Error:', err);
      return cb({ err });
    }else{
      console.log('Message published. Resp:',data);
      return cb({ data });
    }
  });

  return cb(null, {
    message: 'Go Serverless! Your Lambda function executed successfully!'
  });
};
