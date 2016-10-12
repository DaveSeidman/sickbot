"use strict";

var sentences = require('./sentences.json'),
    words = require('./words.json'),
    WordPOS = require('wordpos'), // library used to identify parts of speech
    wordpos = new WordPOS(),
    utils = require('../utils'); 

module.exports = (() => {

    var module = { }

    module.getPOS = (text) => {

        wordpos.getPOS(text, (result) => {

            console.log(result);
        })

        return "here's a reply";
    }


    module.createPhrase = () => {

        var randomPhrase = rand(phrases.sick);
        var phraseArray = randomPhrase.split(' ');

        for(var i = 0; i < phraseArray.length; i++) {

            if(phraseArray[i] == '{sal}') phraseArray[i] = rand(words.salutations);
            if(phraseArray[i] == '{adj}') phraseArray[i] = rand(words.adjectives);
            if(phraseArray[i] == '{noun}') phraseArray[i] = rand(words.nouns);

        }

        return "here's your phrase";
    }

    return module;
})();
