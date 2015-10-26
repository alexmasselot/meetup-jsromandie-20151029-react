import React from 'react';

export default React.createClass({
  render() {
    var name = this.props.name;
    return (
      <div className='jumbotron'>
        <p>
          Hello <b>{name}</b>
        </p>
      </div>
    );
  }
});
