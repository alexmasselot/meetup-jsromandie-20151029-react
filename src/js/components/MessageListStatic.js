import React from 'react';
import Message from './Message';

export default React.createClass({
  getDefaultProps() {
    return {
      messages: []
    };
  },

  render() {
    var messages = this.props.messages;
    return (
      <div className="message-list">
        {messages.map(msg =>
            <Message message={msg} key={msg.id}/>
        )}
      </div>
    );
  }
});
