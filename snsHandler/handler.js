'use strict';

module.exports.handler = function(event, context, cb) {
  console.log('calling handler with event');
  console.log(JSON.stringify(event,null,'\t'));
  return cb(null, {
    message: 'Go Serverless! Your Lambda function executed successfully!'
  });
};
