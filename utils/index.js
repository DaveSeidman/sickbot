"use strict";

module.exports = (() => {

    var module = {};

    module.rand = (array) => {

        return array[Math.floor(Math.random() * array.length)];
    }

    return module;

})();
