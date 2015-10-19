import React, {PropTypes} from 'react';
import MessageGenerator from '../MessageGenerator';

export default React.createClass({
  render() {
    let {onAddTask, onClear, tasks} = this.props;
    return (
      <div className="row">
        <div className="col-md-3">
          <MessageList messages={new MessageGenerator().next(10)}/>
        </div>
      </div>
    );
  }
});
