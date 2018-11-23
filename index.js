var doc = require('aws-sdk');
var dynamo = new doc.DynamoDB();

exports.handler = function(event, context) {
    var getParams = {
        TableName:'User'
   };
    //Add some comment.. to test jenkins webhook.
    // another comment for test jenkins lambda plugin..
    dynamo.scan(getParams, function(err, data){
        if (err) console.log(err, err.stack); // an error occurred
        else {
             context.succeed(data);
        }
    });
};
