const Promise = require('bluebird');

module.exports = {
    error: function(error) {
        return Promise.reject(new Error(error.message));
    },
    build: function(args){
        return {
            text: "Legal heim, vamos buildar o :" + args
        };
    }
};