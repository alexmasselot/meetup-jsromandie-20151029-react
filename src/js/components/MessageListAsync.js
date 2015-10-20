import React from 'react';
import ReactDOM from 'react-dom';
import MessageListStatic from './MessageListStatic';
import MessageGenerator from '../MessageGenerator';

export default React.createClass({

  getInitialState() {
    return {
      messages: []
    };
  },

  addMessage(message){
    var _this = this;
    _this.setState({messages: _this.state.messages.concat([message])});
  },

  componentDidMount(){
    var _this = this;
    new MessageGenerator().async(10, 200, function(message){
      _this.addMessage(message);
    })
  },



  render() {
    return (
      <MessageListStatic messages={this.state.messages}/>
    );
  }
});
