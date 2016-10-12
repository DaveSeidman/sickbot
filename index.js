"use strict";

var Botkit = require('botkit'),
    controller = Botkit.slackbot({log:false}),
    secret = require('./secret.json'),
    phrases = require('./phrases/'),
    bot = controller.spawn({ token: secret.token });


bot.startRTM(function(err,bot,payload) {
    if (err) {
        throw new Error('Could not connect to Slack');
    }
    else {
        console.log("listening for direct messages or mentions")
    }
})

controller.on(['direct_message','direct_mention'], (bot, message) => {

    console.log("analyzing message");

    bot.reply(message, phrases.getPOS(message.text));
})
