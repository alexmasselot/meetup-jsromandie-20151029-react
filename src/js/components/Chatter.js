import React from 'react';
import MessageListStatic from './MessageListStatic';
import MessageGenerator from '../MessageGenerator';
import Input from 'react-bootstrap/lib/Input';
import _ from 'lodash';

export default React.createClass({

  getInitialState() {
    return {
      messages: []
    };
  },

  addMessage(message){
    let _this = this;
    message = _.extend({date:new Date(), id:_this.state.messages.length}, message);
    this.setState({messages: _this.state.messages.concat([message])});
  },

  componentDidMount(){
    var _this = this;
    new MessageGenerator().async(10, 200, function (message) {
      _this.addMessage(message);
    })
  },


  newMessageKeyDown(event, evt){
    let _this = this;
    let text = event.target.value.trim();
    if (event.key === 'Enter' && text !== ''){
      _this.addMessage({text:text, author:'__ME__'});
      event.target.value='';
    }

  },
  render() {
    var _this = this;
    return (
      <div className="chatter">
        <MessageListStatic messages={this.state.messages}/>
        <Input type="text" ref="newMessage"
               onChange={this.addNewMessage} onKeyDown={this.newMessageKeyDown} label="new message"/>

      </div>
    );
  }
});
