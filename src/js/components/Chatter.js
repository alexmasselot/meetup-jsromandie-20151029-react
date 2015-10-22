import React from 'react';
import MessageListStatic from './MessageList';
import MessageGenerator from '../MessageGenerator';
import Input from 'react-bootstrap/lib/Input';
import _ from 'lodash';

export default React.createClass({

  getInitialState() {
    this.iMyMessage = 0;
    this.messageGenerator = new MessageGenerator(['Paf']);

    return {
      messages: []
    };
  },

  addMessage(message){
    let _this = this;
    message = _.extend({date: new Date(), id: 'my-' + _this.iMyMessage}, message);
    _this.iMyMessage++;
    this.setState({messages: _this.state.messages.concat([message])});
  },

  newMessageKeyDown(event, evt){
    let _this = this;
    let text = event.target.value.trim();
    if (event.key === 'Enter' && text !== '') {
      _this.addMessage({text: text, author: '__ME__'});

      event.target.value = '';
      _this.messageGenerator.async(2, 200, function (message) {
        _this.addMessage(message);
      });
    }
  },

  render() {
    var _this = this;
    return (
      <div className="chatter">
        <MessageListStatic messages={this.state.messages}/>
        <Input type="text"
               ref="newMessage"
               onKeyDown={this.newMessageKeyDown}
               label="new message"/>

      </div>
    );
  }
});
