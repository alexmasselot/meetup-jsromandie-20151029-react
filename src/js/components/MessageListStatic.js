import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';

export default React.createClass({
  getDefaultProps() {
    return {
      messages: []
    };
  },

  /**
   * scroll to bottom
   */
  componentDidUpdate() {
    var node = ReactDOM.findDOMNode(this);
    node.scrollTop = node.scrollHeight;
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
