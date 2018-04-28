import React, { Component } from 'react';
import {goHome, logOut} from '../actions'
import {connect} from "react-redux"


class Home extends Component {

  componentDidMount = () => {
    window.scrollTo(0,0)
  }


  render() {
    return (
      <div>
        <div className="nav" onClick={this.props.goHome}>
          <img
            onClick={this.props.goHome} className="logo" alt="logo" src="logo.png"/>
          <img  src="logout.png" onClick={this.props.logOut}/>
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

export default connect(mapStateToProps,{goHome, logOut })(Home);
