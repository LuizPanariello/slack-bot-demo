const Promise = require('bluebird');

module.exports = {
    error: function(error) {
        return Promise.reject(new Error(error.message));
    },
    build: function(args){
        return {
            text: "Buildando a aplicação: " + args
        };
    }
};