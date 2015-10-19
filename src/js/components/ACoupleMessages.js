import React, {PropTypes} from 'react';
import Message from './Message';

export default React.createClass({
  render() {
    return (
      <div>
        <Message message={{text:'Tcho Paf!',author:'__ME__',date:new Date()}}/>
        <Message message={{text:"C'est moi, le chien", author:'Paf', date:new Date()}}/>
      </div>
    );
  }
});
