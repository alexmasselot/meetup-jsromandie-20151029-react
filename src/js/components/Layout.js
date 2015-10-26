import React from 'react';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
    title: React.PropTypes.string
  },

  render(){
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>{this.props.title}</h3>
        </div>
        <div className="col-md-3">
          {this.props.children}
        </div>
      </div>
    );
  }
});
