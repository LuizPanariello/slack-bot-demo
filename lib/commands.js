const Promise = require('bluebird');

module.exports = {
    error: function(error) {
        return Promise.reject(new Error(error.message));
    },
    "99challenge": function(args){
        var random = ['AWESOME!', 'BAD!', 'OK!', 'ON GOING!', 'PFFFF!'];
        var number = Math.round(Math.random() * random.length);

        if(args === "luiz"){
            number = 0;
        }

        return {
            text: "Status: " + args + " is " + random[number] 
        };
    }
};