import React from 'react';

export default React.createClass({
  getInitialState() {
    this.decTimer();

    return {
      timer:3
    };
  },

  decTimer(){
    var _this = this;
    setTimeout(function(){
      var t = _this.state.timer-1;
      _this.setState({timer:t});

      if (t>0){
        _this.decTimer();
      }
    }, 1000)
  },

  render() {
    var name = this.props.name;
    return (
      <div className='jumbotron'>
        <p>
          Hello <b>{name}</b>
        </p>
        <p>
          <span> {this.state.timer} second left</span>
        </p>

        <p style ={{display:(this.state.timer>0)?'none':'block'}}>
          <button className='btn btn-primary'
                  onClick={this.props.onClickCallback}
                 >
           click
           </button>
        </p>
      </div>
    );
  }
});
