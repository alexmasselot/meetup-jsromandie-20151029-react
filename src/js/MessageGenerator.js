var loremIpsum = require('lorem-ipsum');
var objectAssign = require('object-assign');
var _ = require('lodash');

var loremIpsumArgs = {
  units: 'sentences',
  sentenceLowerBound: 2,
  sentenceUpperBound: 12,
  paragraphLowerBound: 1,
  paragraphUpperBound: 1,
  format: 'plain'
};


class MessageGenerator {
  constructor(names) {
    var _this = this;
    this._names = names || ['Paf', '__ME__'];

    this._i=0;
    return _this;
  }

  /**
   * return on random message or a an array of them if the n argument is passed
   * @param n  number of message to issue
   * @returns  an array of messages or a single one if n is undefined 
   */
  next(n) {
    var _this = this;

    if (n === undefined) {
      var name = _this._names[Math.floor(Math.random() * _this._names.length)];
      return {
        text: loremIpsum(loremIpsumArgs),
        author: name,
        date: new Date()
      }
    }

    return _.times(n, function (i) {
      return _.extend({id: i}, _this.next());
    });
  }

  /**
   * produce n random messages, with a random delay iwth average value delay (milliseconds) and fires the callback with each new one.
   * @param n         number of message to issue
   * @param delay     average delay between message (uniform distribution between 0 and 2*delay)
   * @param callback  function to call with every new message
   */
  async(n, delay, callback) {
    var _this = this;
    var asyncHandler = function (nLeft) {
      if (nLeft == 0) {
        return;
      }
      setTimeout(function () {
        var i = _this._i;
        _this._i++;
        callback(_.extend({id: i}, _this.next()));
        asyncHandler(nLeft - 1);
      }, 2 * delay * Math.random());
    };
    asyncHandler(n);
  }
};


export default MessageGenerator;
