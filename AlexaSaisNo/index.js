const script = require('./script');

const Alexa = require('alexa-sdk');
const _ = require('lodash');

const handlers = {
    LaunchRequest() {
        this.response.speak('Hello, what can I do for you?');
        this.response.shouldEndSession(false);
        this.emit(':responseReady');
    },
    actOutScenarioOne(){
        let person = this.event.request.intent.slots.Sentence.value;
        let exchange = script.find(
            exchange =>
            exchange.person.replace(/\W/g, '').toLowerCase() === person.replace(/\W/g, '').toLowerCase()
        );
        if (!exchange) {
            let match = getClosestMatch(person, script.map(exchange => exchange.person));
            if (match) {
                exchange = script.find(
                    exchange =>
                    exchange.person === match
                );
            }
        }
        if (exchange) {
            this.response.speak(exchange.echo.replace(/(\r\n|\n|\r)/gm, ""));
            this.response.shouldEndSession(exchange.last ? true : false);
        } else {
            this.response.speak('Sorry..?');
            this.response.shouldEndSession(false);
        }

        this.emit(':responseReady');
    },
    stop(){
        this.response.speak('Ok. Bye.');
        this.response.shouldEndSession(true);
        this.emit(':responseReady');
    }
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

function getClosestMatch(string, options) {
    let parts = string.split(' ');
    let mostLikely = null;
    let difference = parts.length;

    options.forEach(option => {
        let optionParts = option.split(' ');
        let diff = _.difference(optionParts, parts).length + _.difference(parts, optionParts).length;
        if (diff < difference) {
            mostLikely = option;
            difference = diff;
        }
    });

    return mostLikely;
}

/*

*/