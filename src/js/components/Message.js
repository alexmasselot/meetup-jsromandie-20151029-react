import React from 'react';

export default React.createClass({
  getDefaultProps() {
    return {
      message: {
        text: 'no_message'
      }
    };
  },

  formatDate(date){
    return ''+date.getHours()+':'+
      date.getMinutes() +':' +
      date.getSeconds()+'.'+
      date.getMilliseconds()
  },

  render() {
    var _this = this;
    var message = this.props.message;
    return (
      <div className={'message-container'+((message.author==='__ME__')?' author-me':'')}>
        <div className="message">
          {message.text}
        </div>
        <div className="date">
          {_this.formatDate(message.date)}
        </div>
      </div>
    );
  }
});
