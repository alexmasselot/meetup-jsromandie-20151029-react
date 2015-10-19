import React from 'react';
import MessageListStatic from './MessageListStatic';
import MessageGenerator from '../MessageGenerator';

export default React.createClass({

  getInitialState() {
    return {
      messages: []
    };
  },

  addMessage(message){
    this.setState({messages: this.state.messages.concat([message])});
  },

  componentDidMount(){
    var _this = this;
    new MessageGenerator().async(10, 200, function (message) {
      _this.addMessage(message);
    })
  },

  componentDidUpdate() {
    var node = this.getDOMNode();
    node.scrollTop = node.scrollHeight;
  },

  render() {
    return (
      <div className="chatter">
        <MessageListStatic messages={this.state.messages}/>
        <input />
      </div>
    );
  }
});
