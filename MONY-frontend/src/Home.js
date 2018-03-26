import React, { Component } from 'react';
import {goHome} from './actions'
import {connect} from "react-redux"


class Home extends Component {

  render() {
    return (
      <div>
        <div className="nav" onClick={this.props.goHome}>
          <img className="logo" alt="logo" src="logo.png"/>
        </div>
        <div className="home">

          <div className="home-img">
            <img className="woman-picture" src="woman2.png"/>
          </div>
          <div className="home-text">
            <span className="hungry">Hungry?</span>
            <br></br>
            <span className="thirsty">Thirsty?</span>
            <br></br>
            <span className="bored">Bored?</span>
            <br></br>
            <img className="chevron" alt="chevron" src="chevron.png"/>
            {/* <span className="dont-know">Don't know where to go?</span> */}
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {

  }

}

export default connect(mapStateToProps,{goHome })(Home);
